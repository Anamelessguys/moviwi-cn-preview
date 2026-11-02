import * as THREE from './assets/vendor/three/build/three.module.js';
import {GLTFLoader} from './assets/vendor/three/examples/jsm/loaders/GLTFLoader.js';
import {RoomEnvironment} from './assets/vendor/three/examples/jsm/environments/RoomEnvironment.js';
import {MeshoptDecoder} from './assets/vendor/meshopt_decoder.js';

const clamp=THREE.MathUtils.clamp;
const smooth=(a,b,t)=>{const x=clamp((t-a)/(b-a),0,1);return x*x*(3-2*x);};

export async function mountHeroIntro(hero,{stillTime}={}){
  const stage=hero.querySelector('.hero-product');
  if(!stage)return ()=>{};
  const canvas=document.createElement('canvas');
  canvas.className='hero-3d-canvas';canvas.setAttribute('aria-label','RS-K1 正面三维开场：光线照亮双层机身，双摄镜片依次亮起');canvas.setAttribute('role','img');
  stage.append(canvas);
  let renderer;
  try{renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'low-power'});}catch{canvas.remove();return ()=>{};}
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.setClearColor(0x08090b,0);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.95;
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(27,1,.001,5);
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment();
  const environment=pmrem.fromScene(room,.04);scene.environment=environment.texture;
  room.dispose();pmrem.dispose();
  scene.environmentIntensity=.02;
  const ambient=new THREE.HemisphereLight(0xdde7f2,0x090a0c,.015);scene.add(ambient);
  const key=new THREE.DirectionalLight(0xfff0d7,0);key.position.set(-.15,.22,.25);scene.add(key);
  const fill=new THREE.DirectionalLight(0xd9e7f4,0);fill.position.set(.2,.025,.15);scene.add(fill);
  const rim=new THREE.DirectionalLight(0xf9d7a1,.05);rim.position.set(0,.15,-.12);scene.add(rim);
  const sweep=new THREE.SpotLight(0xffffff,0,1,Math.PI/10,.7,1);sweep.position.set(-.25,.13,.24);sweep.target.position.set(0,0,.03);scene.add(sweep,sweep.target);
  const preference=matchMedia('(prefers-reduced-motion: reduce)');
  let model,frame=0,start=0,elapsed=0,finished=false,disposed=false,intersecting=true,loaded=false,cameraDistance=.3;
  const eyes=[],lensMaterials=[],ownedMaterials=new Set();
  function resize(){const r=stage.getBoundingClientRect();if(!r.width||!r.height)return;renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix();const distance=Math.max(.175/camera.aspect,.067)*.5/Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*1.27;cameraDistance=distance+.035;camera.position.set(0,.001,cameraDistance);camera.lookAt(0,.001,0);if(loaded)renderer.render(scene,camera);}
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);resize();
  function apply(t){
    const reveal=smooth(.45,2.5,t),settle=smooth(2.5,4.7,t);
    scene.environmentIntensity=.015+reveal*.38;
    ambient.intensity=.015+reveal*.22;
    key.intensity=reveal*2;fill.intensity=reveal*.65;
    rim.intensity=.15+smooth(0,1.2,t)*1.1;
    const pass=smooth(.5,2.7,t);sweep.position.x=THREE.MathUtils.lerp(-.25,.25,pass);
    sweep.target.position.x=THREE.MathUtils.lerp(-.085,.085,pass);
    sweep.intensity=Math.sin(pass*Math.PI)*1.3;
    eyes.forEach((eye,i)=>{const open=smooth(2.5+i*.28,3.4+i*.28,t);const gleam=Math.sin(smooth(2.6+i*.28,4.15+i*.28,t)*Math.PI);eye.group.scale.y=.015+open*.985;eye.ring.opacity=open*(.20+gleam*.36);eye.iris.opacity=open*(.18+gleam*.26);eye.sparkle.opacity=gleam*.7+open*.16;});
    lensMaterials.forEach(m=>{m.emissive.setRGB(.012,.045,.065);m.emissiveIntensity=settle*.35;});
    const travel=preference.matches?1:smooth(0,3.6,t);
    const elevation=THREE.MathUtils.degToRad(6)*(1-travel);
    camera.position.set(0,.001+Math.sin(elevation)*cameraDistance,Math.cos(elevation)*cameraDistance);
    camera.lookAt(0,.001,0);
    hero.style.setProperty('--intro-copy',String(smooth(.4,1.5,t)));
    renderer.render(scene,camera);
  }
  function tick(now){frame=0;if(disposed||!loaded||document.hidden||!intersecting)return;const t=preference.matches?5.2:elapsed+(now-start)/1000;apply(Math.min(t,5.2));if(t<5.2)frame=requestAnimationFrame(tick);else{finished=true;elapsed=5.2;stage.dataset.introState='complete';}}
  function play(){if(disposed||!loaded)return;cancelAnimationFrame(frame);elapsed=0;start=performance.now();finished=false;stage.dataset.introState='playing';frame=requestAnimationFrame(tick);}
  function pause(){if(frame){elapsed=Math.min(5.2,elapsed+(performance.now()-start)/1000);cancelAnimationFrame(frame);frame=0;}}
  function resume(){if(!finished&&loaded&&!document.hidden&&intersecting&&!frame){start=performance.now();frame=requestAnimationFrame(tick);}}
  const onVisibility=()=>document.hidden?pause():resume();document.addEventListener('visibilitychange',onVisibility);
  const onPreference=()=>{if(preference.matches&&loaded){pause();apply(5.2);finished=true;stage.dataset.introState='complete';}};
  preference.addEventListener('change',onPreference);
  const observer=new IntersectionObserver(entries=>{intersecting=entries[0].isIntersecting;if(intersecting)resume();else pause();},{threshold:0});observer.observe(hero);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();pause();stage.classList.remove('is-3d-ready');});
  const teardown=()=>{if(disposed)return;disposed=true;cancelAnimationFrame(frame);observer.disconnect();resizeObserver.disconnect();document.removeEventListener('visibilitychange',onVisibility);preference.removeEventListener('change',onPreference);model?.traverse(o=>{if(o.isMesh){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const key of ['map','normalMap','roughnessMap','metalnessMap','emissiveMap'])m[key]?.dispose();m.dispose();}}});eyes.forEach(e=>e.group.traverse(o=>{o.geometry?.dispose();o.material?.dispose();}));environment.dispose();renderer.dispose();canvas.remove();stage.classList.remove('is-3d-ready');hero.style.removeProperty('--intro-copy');};
  try{
    const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync('/moviwi-cn-preview/assets/models/rs-k1-smooth.glb');
    model=gltf.scene;if(!hero.isConnected||disposed){teardown();return ()=>{};}
    const box=new THREE.Box3().setFromObject(model),center=box.getCenter(new THREE.Vector3());model.position.sub(center);
    model.traverse(o=>{if(!o.isMesh)return;o.frustumCulled=false;for(const material of Array.isArray(o.material)?o.material:[o.material]){if(ownedMaterials.has(material))continue;ownedMaterials.add(material);if(material.name==='Satin silver enclosure'){material.color.set('#f6a329');material.metalness=.35;material.roughness=.36;}if(material.name==='Optical cover glass'){material.transmission=0;material.color.set('#101b24');material.metalness=.5;material.roughness=.11;material.transparent=true;material.opacity=.42;material.depthWrite=false;}if(material.name==='Black optical barrel'){material.color.set('#080a0d');material.metalness=.08;material.roughness=.38;}if(material.name==='Coated lens elements')lensMaterials.push(material);}});
    scene.add(model);
    for(const x of [-.02985,.02985]){
      const group=new THREE.Group();group.position.set(x-center.x,.0141759-center.y,.03665-center.z);
      const ring=new THREE.MeshBasicMaterial({color:0x83b1bd,transparent:true,opacity:0,depthWrite:false});
      const iris=new THREE.MeshBasicMaterial({color:0x173f50,transparent:true,opacity:0,depthWrite:false});
      const sparkle=new THREE.MeshBasicMaterial({color:0xcbe5e8,transparent:true,opacity:0,depthWrite:false});
      group.add(new THREE.Mesh(new THREE.RingGeometry(.0029,.00315,64),ring));
      const irisMesh=new THREE.Mesh(new THREE.CircleGeometry(.00235,64),iris);irisMesh.position.z=.00002;group.add(irisMesh);
      const highlight=new THREE.Mesh(new THREE.CircleGeometry(.00045,24),sparkle);highlight.position.set(-.001,.001,.00004);group.add(highlight);
      scene.add(group);eyes.push({group,ring,iris,sparkle});
    }
    loaded=true;resize();stage.classList.add('is-3d-ready');stage.dataset.model='rs-k1-cad';
    if(Number.isFinite(stillTime)){apply(stillTime);finished=true;stage.dataset.introState='review';}else play();
  }catch(error){console.warn('Hero 3D unavailable; displaying product image.',error);teardown();}
  return teardown;
}
