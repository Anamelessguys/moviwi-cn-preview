
const publicBase="/moviwi-cn-preview/";
function previewRoute(){return new URL(new URLSearchParams(location.search).get('page')||'/',location.origin);}
function normalizePublicLinks(){
  document.querySelectorAll('a[href]').forEach(a=>{
    const href=a.getAttribute('href');
    if(!href.startsWith('/')||href.startsWith('//')||href.startsWith(publicBase))return;
    const route=new URL(href,location.origin),target=new URL(publicBase,location.origin);
    if(route.pathname!=='/'||route.search)target.searchParams.set('page',route.pathname+route.search);
    target.hash=route.hash;a.href=target.href;
  });
}
import {header,footer,support,newsPage,article,about,notFound,gameView,categoryView,faqList,algorithms,certificatesDetail} from './apple-pages.js?v=65d1fef23d1f';
import {overviewPage,guidePage,specsPage,gamesPage} from './product-navigation.js?v=65d1fef23d1f';
import {termsPage,privacyPage} from './legal-pages.js?v=65d1fef23d1f';
document.querySelector('#header').innerHTML=header();
document.querySelector('#footer').innerHTML=footer();
const main=document.querySelector('#main'),dialog=document.querySelector('#detail');
let heroCleanup,heroMountId=0;
let carouselObservers=[];
function mountProductIntro(){
  heroCleanup?.();heroCleanup=undefined;
  const id=++heroMountId,hero=main.querySelector('.hero');
  document.body.classList.toggle('has-product-intro',Boolean(hero));
  if(!hero)return;
  import('./hero-intro.js?v=65d1fef23d1f').then(async({mountHeroIntro})=>{
    if(id!==heroMountId)return;
    const cleanup=await mountHeroIntro(hero);
    if(id===heroMountId)heroCleanup=cleanup;else cleanup();
  }).catch(error=>console.warn('Product intro fallback',error));
}
const topButton=document.createElement('button');
topButton.className='back-to-top';topButton.setAttribute('aria-label','回到顶部');
topButton.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 4h14M12 21V8m-5 5 5-5 5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
topButton.hidden=true;document.body.append(topButton);
topButton.addEventListener('click',()=>{window.scrollTo({top:0,behavior:motionPreference.matches?'instant':'smooth'});document.querySelector('#header .wordmark').focus({preventScroll:true});});
let chromeFrame=0;
function updateScrollChrome(){
  chromeFrame=0;
  const scope=main.querySelector('.product-scope');
  if(scope){const bar=scope.querySelector('.product-nav'),bounds=scope.getBoundingClientRect();const active=!scope.hasAttribute('data-nav-after-banner')||bounds.top<=0;bar.classList.toggle('is-active',active);bar.inert=!active;}
  topButton.hidden=scrollY<Math.max(300,innerHeight*.5);
}
function queueScrollChrome(){if(!chromeFrame)chromeFrame=requestAnimationFrame(updateScrollChrome);}
window.addEventListener('scroll',queueScrollChrome,{passive:true});window.addEventListener('resize',queueScrollChrome);
let revealObserver;
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
function prepareReveals(){
  revealObserver?.disconnect();
  const groups=main.querySelectorAll('.section-heading,.family-frame,.game-browser,.collection-layout,.optics-copy,.tech-intro,.tech-system,.tech-bottom,.product-copy,.rear-frame,.documents,.purchase,.page-hero,.story-grid,.news-status,.account-section .narrow,.content-section,.article');
  if(motionPreference.matches||!('IntersectionObserver' in window))return;
  revealObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}},{threshold:0,rootMargin:'0px 0px -30px 0px'});
  groups.forEach(el=>{if(el.parentElement.closest('[data-reveal]'))return;el.dataset.reveal='';if(el.getBoundingClientRect().top<innerHeight-30)el.classList.add('is-visible');else revealObserver.observe(el);});
}
motionPreference.addEventListener('change',()=>{if(motionPreference.matches){revealObserver?.disconnect();main.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-visible'));}});

function goGame(carousel,index){const track=carousel.querySelector('.game-slides'),slides=track.children;index=(index+slides.length)%slides.length;track.scrollTo({left:index*track.clientWidth,behavior:motionPreference.matches?'instant':'smooth'});}
function prepareCarousels(){main.querySelectorAll('.game-carousel').forEach(carousel=>{const track=carousel.querySelector('.game-slides'),dots=Array.from(carousel.querySelectorAll('[data-game]'));let frame;const update=()=>{frame=0;const index=Math.round(track.scrollLeft/track.clientWidth);dots.forEach((dot,i)=>dot.setAttribute('aria-pressed',String(i===index)));};track.addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(update);},{passive:true});track.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const index=e.key==='Home'?0:e.key==='End'?dots.length-1:Math.round(track.scrollLeft/track.clientWidth)+(e.key==='ArrowRight'?1:-1);goGame(carousel,index);});const observer=new ResizeObserver(()=>{const index=dots.findIndex(d=>d.getAttribute('aria-pressed')==='true');track.scrollTo({left:Math.max(0,index)*track.clientWidth,behavior:'instant'});});observer.observe(track);carouselObservers.push(observer);track.scrollTo({left:track.clientWidth,behavior:'instant'});update();});}

function render(){carouselObservers.forEach(o=>o.disconnect());carouselObservers=[];const path=previewRoute().pathname.replace(/\/$/,'')||'/';const segments=path.split('/').filter(Boolean);main.innerHTML=(path==='/'||path==='/product')?overviewPage(path):path==='/product/guide'?guidePage():path==='/product/specs'?specsPage():path==='/games'?gamesPage():path==='/terms'?termsPage():path==='/privacy'?privacyPage():path==='/support'?support(previewRoute().searchParams.get('tab')||'faq'):path==='/news'?newsPage():path==='/about'?about():segments.length===2&&['news','support'].includes(segments[0])?article(segments[1],segments[0]):notFound();document.title=`${(path==='/'||path==='/product')?'RS-K1':path==='/product/guide'?'使用指南':path==='/product/specs'?'技术规格':path==='/games'?'游戏中心':path==='/terms'?'使用条款':path==='/privacy'?'隐私政策':segments[0]==='support'?'使用与支持':segments[0]==='news'?'新闻中心':'关于我们'} · 实感智能`;normalizePublicLinks();closeMenu();mountProductIntro();prepareCarousels();prepareReveals();updateScrollChrome();if(location.hash)requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView({behavior:'instant'}));}
function closeMenu(){document.querySelector('#menu').setAttribute('aria-expanded','false');document.querySelector('#menu').setAttribute('aria-label','展开导航');document.querySelector('#header').classList.remove('menu-open');}
document.querySelector('#menu').addEventListener('click',()=>{const open=document.querySelector('#menu').getAttribute('aria-expanded')!=='true';document.querySelector('#menu').setAttribute('aria-expanded',String(open));document.querySelector('#menu').setAttribute('aria-label',open?'关闭导航':'展开导航');document.querySelector('#header').classList.toggle('menu-open',open);});
function show(html){document.querySelector('#dialog-content').innerHTML=html;dialog.showModal();}
document.addEventListener('click',e=>{const game=e.target.closest('[data-game]');if(game){const carousel=game.closest('.game-carousel');goGame(carousel,Array.from(carousel.querySelectorAll('[data-game]')).indexOf(game));}const step=e.target.closest('[data-game-step]');if(step){const carousel=step.closest('.game-carousel');const track=carousel.querySelector('.game-slides');goGame(carousel,Math.round(track.scrollLeft/track.clientWidth)+Number(step.dataset.gameStep));}const tech=e.target.closest('[data-tech-step]');if(tech){const track=tech.closest('.tech-capabilities').querySelector('.capability-track');track.scrollBy({left:Number(tech.dataset.techStep)*(track.querySelector('article').offsetWidth+24),behavior:motionPreference.matches?'instant':'smooth'});}const category=e.target.closest('[data-category]');if(category){document.querySelector('#category-stage').innerHTML=categoryView(category.dataset.category);document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(b===category)));}if(e.target.closest('[data-certificates]'))show(certificatesDetail());const a=e.target.closest('a');if(a&&a.origin===location.origin&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!a.target){e.preventDefault();const samePage=a.pathname===location.pathname&&a.search===location.search;history.pushState({},'',a.href);if(samePage){closeMenu();if(a.hash)document.getElementById(a.hash.slice(1))?.scrollIntoView({behavior:'smooth'});else window.scrollTo({top:0,behavior:'instant'});}else{if(!a.hash)window.scrollTo({top:0,behavior:'instant'});render();}}});
document.addEventListener('input',e=>{if(e.target.id==='faq-search')document.querySelector('#faq-list').innerHTML=faqList(e.target.value.trim());});
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});window.addEventListener('popstate',render);render();
