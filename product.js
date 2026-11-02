let productIllustrationSerial = 0;

function tennisCourt(interactive = false) {
  return `<rect width="800" height="440" fill="#b0eaf0"/>
    <path d="M0 108h800v332H0Z" fill="#37bda2"/>
    <path d="M0 68h800v49H0Z" fill="#78d5bd"/><path d="M0 89h800m-740-18v46m62-46v46m62-46v46m62-46v46m62-46v46m62-46v46m62-46v46m62-46v46m62-46v46m62-46v46m62-46v46m62-46v46" stroke="#e5fff0" stroke-width="2" opacity=".6"/>
    <path d="m276 119 248 0 208 321H68Z" fill="#429bd6"/>
    <path d="m290 133 220 0 172 287H118Z" stroke="#fffbed" stroke-width="3"/>
    <path d="m313 133-144 287m318-287 144 287M244 210h312M194 302h412M400 133v77m0 92v118" stroke="#fffbed" stroke-width="2.5"/>
    <g class="tennis-far-player"><ellipse cx="400" cy="157" rx="19" ry="5" fill="#257e9f" opacity=".35"/><circle cx="400" cy="105" r="10" fill="#e6b092"/><path d="M389 119q11-7 22 0l5 24h-32Z" fill="#fff8e8"/><path d="m391 143-5 15m22-15 6 15" stroke="#61432f" stroke-width="7" stroke-linecap="round"/><path d="m390 125-15-9m33 9 13-14" stroke="#e6b092" stroke-width="6" stroke-linecap="round"/><path d="m422 113 10-13" stroke="#49346c" stroke-width="4"/><ellipse cx="437" cy="94" rx="10" ry="14" transform="rotate(25 437 94)" fill="#d8fcba" stroke="#a76139" stroke-width="3"/><path d="m432 85 8 19m-11-10 17-1" stroke="#fff" stroke-width="1.2"/></g>
    <path d="M176 248h448v28H176Z" fill="#d8edee" fill-opacity=".45"/><path d="M176 249h448m-448 10h448m-448 10h448m-428-21v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29m20-29v29" stroke="#f3fff3" stroke-width="1.2" opacity=".9"/>
    <path d="M172 244v38m456-38v38" stroke="#40575e" stroke-width="6" stroke-linecap="round"/><path d="M172 247q228 10 456 0" stroke="#fff" stroke-width="4"/>
    <g class="tennis-near-player"><ellipse cx="372" cy="402" rx="34" ry="8" fill="#246f9d" opacity=".3"/><circle cx="373" cy="323" r="14" fill="#f2c5a1"/><path d="M360 341q14-9 28 0l9 34h-46Z" fill="#a76139"/><path d="m360 375-7 25m32-25 11 25" stroke="#503829" stroke-width="10" stroke-linecap="round"/><path d="m361 348-18 7m44-7 22-17" stroke="#f2c5a1" stroke-width="8" stroke-linecap="round"/>${interactive ? '' : '<path d="m411 333 13-16" stroke="#3d2d65" stroke-width="6" stroke-linecap="round"/><ellipse cx="436" cy="302" rx="15" ry="21" transform="rotate(35 436 302)" fill="#d7f7e4" stroke="#a76139" stroke-width="5"/><path d="m429 287 17 31m-23-21 27 10m-21-2 21 9" stroke="#fff" stroke-width="1.5"/>'}</g>
    ${interactive ? '' : '<path d="M495 221q-18-33-49-35" stroke="#fffdf0" stroke-width="3" stroke-linecap="round" opacity=".7"/><circle cx="502" cy="234" r="10" fill="#ffb549"/><path d="m497 227 10 14m-12-7 16-1" stroke="#fff" stroke-width="1.4"/>'}
    <rect x="26" y="22" width="83" height="29" rx="14" fill="#fffdf1" opacity=".85"/><text x="67" y="42" fill="#4d3187" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">网球</text>`;
}

function tennisRacket() {
  return `<svg viewBox="0 0 100 130" fill="none"><path d="m32 117 18-47" stroke="#31224b" stroke-width="13" stroke-linecap="round"/><path d="m33 114 10-25" stroke="#ffb549" stroke-width="10" stroke-linecap="round"/><ellipse cx="59" cy="45" rx="29" ry="37" transform="rotate(19 59 45)" fill="#ffffff2e" stroke="#f9fff0" stroke-width="7"/><ellipse cx="59" cy="45" rx="33" ry="41" transform="rotate(19 59 45)" stroke="#a76139" stroke-width="4"/><path d="m50 13-18 49m30-52-21 64m32-58-20 62m29-51-16 49M40 24l43 15M35 37l49 17M32 51l45 16" stroke="#fffdf1" stroke-width="1.5"/></svg>`;
}

export function roomArt(variant = 'family') {
  const people = variant === 'party'
    ? '<circle cx="135" cy="239" r="24" fill="#d9a68b"/><path d="M113 270q25-17 46 0l13 85H98Z" fill="#ffb13b"/><path d="m114 288-39-34m70 34 24-52" stroke="#d9a68b" stroke-width="16" stroke-linecap="round"/><path d="m113 353-11 90m48-90 16 90" stroke="#45435d" stroke-width="21" stroke-linecap="round"/><circle cx="243" cy="201" r="26" fill="#bf866e"/><path d="M220 233q24-14 46 0l17 110h-80Z" fill="#b56d42"/><path d="m223 249-26-47m67 47 37-37" stroke="#bf866e" stroke-width="17" stroke-linecap="round"/><path d="m224 342-12 104m49-104 19 104" stroke="#414354" stroke-width="23" stroke-linecap="round"/>'
    : '<ellipse cx="191" cy="467" rx="97" ry="13" fill="#bcb09d" opacity=".22"/><circle cx="153" cy="220" r="25" fill="#e0ae90"/><path d="M128 218q-2-35 30-28 24 4 23 25l-16-11-36 14Z" fill="#373242"/><path d="M131 250q24-16 48 0l16 105h-81Z" fill="#a55d37"/><path d="m134 265-33-41-16-40m88 81 28-25 20-42" stroke="#e0ae90" stroke-width="16" stroke-linecap="round"/><path d="m134 354-14 104m56-104 20 104" stroke="#34334c" stroke-width="21" stroke-linecap="round"/><path d="M106 462h22m57 0h24" stroke="#faf8f2" stroke-width="13" stroke-linecap="round"/><circle cx="255" cy="286" r="19" fill="#e2b495"/><path d="M236 284q0-25 21-22 16 2 17 18l-17-8-21 12Z" fill="#403644"/><path d="M239 309q18-12 34 0l14 69h-62Z" fill="#ffb549"/><path d="m242 321-19-26m44 26 25-33 12-30" stroke="#e2b495" stroke-width="12" stroke-linecap="round"/><path d="m241 377-6 79m33-79 15 79" stroke="#9b8274" stroke-width="16" stroke-linecap="round"/><path d="M225 461h19m31 0h19" stroke="#fff8e8" stroke-width="10" stroke-linecap="round"/>';
  return `<svg class="room-illustration" viewBox="0 0 900 560" fill="none" aria-hidden="true"><rect width="900" height="560" rx="30" fill="#edd9bb"/><path d="M0 397h900v163H0Z" fill="#ffe0b3"/><path d="M0 397h900" stroke="#d0ad80"/><rect x="27" y="50" width="217" height="249" rx="90" fill="#fff4be"/><path d="M130 51v248M30 173h212" stroke="#ffe59b" stroke-width="8"/><path d="M41 49v252M228 49v252" stroke="#ffbd67" stroke-width="23"/><rect x="293" y="75" width="532" height="295" rx="13" fill="#2b293d"/><svg class="tv-tennis" x="307" y="90" width="503" height="263" viewBox="0 0 800 440" preserveAspectRatio="none" style="width:503px;height:263px">${tennisCourt()}</svg><path d="M365 383h391" stroke="#f7f3ec" stroke-width="20" stroke-linecap="round"/><rect x="337" y="391" width="445" height="75" rx="10" fill="#eead78"/><path d="M485 399v58m145-58v58" stroke="#d98c60"/><path d="M357 467v18m405-18v18" stroke="#897965" stroke-width="9"/>${purchaseArt('room-device', 'x="520" y="292" width="150" height="120" style="width:150px;height:120px"')}<path d="M851 414v-75" stroke="#8f9f77" stroke-width="7"/><path d="M851 384q-48-5-34-36 29-3 34 36m0-28q29-35 45-11-9 30-45 11" fill="#66ba69"/><path d="M829 410h43l-7 45h-29Z" fill="#f7f0e2"/>${people}<path d="M54 508h757" stroke="#d6c8b6" stroke-width="2"/></svg>`;
}

export function gameArt() {
  return `<svg class="game-landscape tennis-court" viewBox="0 0 800 440" fill="none" preserveAspectRatio="none" aria-hidden="true">${tennisCourt(true)}</svg>`;
}

export function purchaseArt(className = 'purchase-device', attributes = '') {
  const instance = ++productIllustrationSerial;
  return `<svg class="${className}" ${attributes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 800" fill="none" role="img" aria-labelledby="moviwi-product-title moviwi-product-desc">
  <title id="moviwi-product-title">RS-K1 橙黄产品插画</title>
  <desc id="moviwi-product-desc">以 PANTONE 1365 C 橙黄为配色参考绘制的双层设备，保留左侧散热格栅、上层黑色双镜头面板和下层品牌面板。</desc>
  <defs>
    <linearGradient id="moviwi-product-shell" x1="610" y1="173" x2="649" y2="427" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffd99a"/><stop offset=".35" stop-color="#ffb549"/><stop offset=".7" stop-color="#eb982e"/><stop offset="1" stop-color="#bd6b1b"/>
    </linearGradient>
    <linearGradient id="moviwi-product-lid" x1="610" y1="177" x2="674" y2="324" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffe0a9"/><stop offset=".51" stop-color="#ffc66d"/><stop offset=".79" stop-color="#ffb549"/><stop offset="1" stop-color="#e99730"/>
    </linearGradient>
    <linearGradient id="moviwi-product-front" x1="697" y1="223" x2="748" y2="396" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffc568"/><stop offset=".4" stop-color="#ef9d32"/><stop offset=".78" stop-color="#ffbf5b"/><stop offset="1" stop-color="#d58022"/>
    </linearGradient>
    <linearGradient id="moviwi-product-end" x1="354" y1="280" x2="517" y2="401" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffcd7b"/><stop offset=".45" stop-color="#f2a53c"/><stop offset="1" stop-color="#c57a20"/>
    </linearGradient>
    <linearGradient id="moviwi-product-glass" x1="712" y1="268" x2="753" y2="359" gradientUnits="userSpaceOnUse">
      <stop stop-color="#161621"/><stop offset=".46" stop-color="#272633"/><stop offset="1" stop-color="#101018"/>
    </linearGradient>
    <linearGradient id="moviwi-product-rim" x1="367" y1="282" x2="494" y2="398" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff"/><stop offset=".45" stop-color="#dc8d29"/><stop offset="1" stop-color="#ffe1aa"/>
    </linearGradient>
    <radialGradient id="moviwi-product-lens">
      <stop stop-color="#0c151f"/><stop offset=".26" stop-color="#112b39"/><stop offset=".42" stop-color="#285d69"/><stop offset=".55" stop-color="#121c29"/><stop offset=".74" stop-color="#353b48"/><stop offset=".85" stop-color="#141722"/><stop offset="1" stop-color="#737080"/>
    </radialGradient>
    <filter id="moviwi-product-shadow" x="-30%" y="-180%" width="160%" height="460%"><feGaussianBlur stdDeviation="14"/></filter>
    <path id="moviwi-product-vent-shape" d="M382 277c-22-5-33 7-32 29l3 33c2 24 13 38 35 44l96 25c22 6 36-6 36-29l-3-26c-2-23-12-38-33-45Z"/>
    <clipPath id="moviwi-product-vent-clip"><use href="#moviwi-product-vent-shape"/></clipPath>
    <g id="moviwi-product-housing">
      <path d="M345 318c-1-42 12-69 46-79l340-73c18-5 34-2 51 1l105 18c34 6 49 28 49 61l-1 33c-1 30-17 46-46 55l-352 86c-24 6-46 3-71-4l-82-19c-27-7-39-26-39-56Z" fill="url(#moviwi-product-shell)"/>
      <path d="M512 320c15 5 27 2 42-3l360-101c15 6 22 19 22 36l-1 27c-1 30-17 46-46 55l-352 86c-9 3-19 4-28 2 20-18 22-44 16-65Z" fill="url(#moviwi-product-front)"/>
      <path d="M351 291c4-25 15-43 40-50l340-73c18-5 34-2 51 1l105 18c23 4 37 16 43 34-15-5-30-2-48 3L549 321c-20 6-38 4-56-4l-113-39c-14-5-23-1-29 13Z" fill="url(#moviwi-product-lid)"/>
      <path d="M349 301c-1-24 13-34 36-28l105 29c29 8 41 35 40 66-1 35-18 54-45 47l-101-25c-26-7-38-29-37-62Z" fill="url(#moviwi-product-end)"/>
      <path d="m533 366 65-17m317-83 19-5" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".86"/>
      <path d="M355 286c8-11 20-14 36-9l98 27c23 6 37 27 39 53" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>
      <use href="#moviwi-product-vent-shape" fill="#1c1c27" stroke="#c1802c" stroke-width="5"/>
      <g clip-path="url(#moviwi-product-vent-clip)">
        <path d="m411 272 2 143m53-143 2 143" stroke="#5a5768" stroke-width="2"/>
        <path d="m338 278 205 56m-205-45 205 56m-205-45 205 56m-205-45 205 56m-205-45 205 56m-205-45 205 56m-205-45 205 56m-205-45 205 56m-205-45 205 56m-205-45 205 56m-205-45 205 56m-205-45 205 56" stroke="#ffb549" stroke-width="3.1"/>
      </g>
      <use href="#moviwi-product-vent-shape" stroke="url(#moviwi-product-rim)" stroke-width="4"/>
      <path d="m615 306 276-75c16-5 23 2 23 18l-2 25c-1 18-8 27-24 32l-261 77c-17 5-26-2-26-19v-22c0-18 3-30 14-36Z" fill="url(#moviwi-product-glass)"/>
      <path d="m620 307 270-74c11-3 16-1 19 4" stroke="#6a657b" stroke-width="1" opacity=".5" stroke-linecap="round"/>
      <path d="m545 410 342-85" stroke="#aa641b" stroke-width="1.5" opacity=".48"/>
    </g>
    <g id="moviwi-product-camera">
      <ellipse rx="16" ry="23" fill="#0f101a" stroke="#5b586a" stroke-width="1.5"/>
      <ellipse rx="12.3" ry="19.5" fill="url(#moviwi-product-lens)"/>
      <ellipse rx="6.6" ry="11" fill="#09141e" stroke="#286272" stroke-width=".8"/>
      <ellipse cx="3.2" cy="-7" rx="2.7" ry="4.2" fill="#a0dbeb" opacity=".8"/>
      <path d="M-8 10q4 7 10 4" stroke="#7464b3" stroke-width="1.5" opacity=".65" stroke-linecap="round"/>
    </g>
  </defs>
  <g transform="translate(-400 -105) scale(1.4)">
    <ellipse cx="652" cy="564" rx="244" ry="22" fill="#584070" opacity=".21" filter="url(#moviwi-product-shadow)"/>
    <g transform="translate(0 124)">
      <use href="#moviwi-product-housing"/>
      <text x="771" y="319" text-anchor="middle" fill="#e8e6f0" font-family="Arial, sans-serif" font-weight="600" font-size="15" letter-spacing=".1" transform="rotate(-16.5 771 319)">Moviwi</text>
    </g>
    <path d="m385 408 96 23q30 7 58 0l356-89" stroke="#5e566d" stroke-width="7" opacity=".15" stroke-linecap="round"/>
    <use href="#moviwi-product-housing"/>
    <use href="#moviwi-product-camera" transform="translate(714 321) rotate(17)"/>
    <use href="#moviwi-product-camera" transform="translate(837 282) rotate(17) scale(.93)"/>
  </g>
</svg>`.replaceAll('moviwi-product-', `moviwi-product-${instance}-`);
}

export function homeMarkup({ button, news, newsCard }) {
  return `<main id="main">
    <section class="product-hero"><div class="container product-hero-grid"><div class="product-hero-copy"><p class="product-type">家庭体感游戏机</p><h1>客厅，就是<br>全家的<span>游戏场。</span></h1><p>用身体参与游戏，<br>把一家人的快乐，放到同一块屏幕上。</p><div class="hero-buttons">${button('#play', '看看怎么玩', 'button-dark')}${button('/buy', '购买渠道', 'button-outline')}</div></div><figure class="hero-room">${roomArt()}<figcaption>产品外观与游戏画面为示意</figcaption></figure></div></section>
    <section class="play-section" id="play"><div class="container"><div class="play-heading"><h2>挥挥手，<br>来一局网球。</h2><p class="game-instruction">移动鼠标或手指挥拍，试着把球打回去。</p></div><div class="game-frame"><div class="game-topbar"><span>体感网球示意</span><div class="game-controls"><button class="game-pause" data-game-pause hidden>暂停</button><button class="game-reset" data-game-reset aria-label="重新开始网球演示">重新开始 ↻</button></div></div><div class="play-surface tennis-surface" role="group" tabindex="0" aria-label="体感网球互动演示" aria-describedby="tennis-instructions" data-tennis-state="idle" data-hits="0">${gameArt()}<div class="tennis-hud" aria-hidden="true"><span>连续回球 <b data-tennis-score>0</b></span><span class="tennis-best">最佳 <b data-tennis-best>0</b></span></div><div class="tennis-landing" aria-hidden="true"></div><div class="tennis-ball-shadow" aria-hidden="true"></div><div class="tennis-ball" aria-hidden="true"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#ffb549"/><path d="M8 7c14 6 19 18 21 27M6 30c5-14 15-22 27-23" stroke="#fffef0" stroke-width="2.2" fill="none"/></svg></div><span class="tennis-racket" aria-hidden="true">${tennisRacket()}</span><div class="game-feedback" aria-hidden="true">漂亮！</div><div class="tennis-overlay"><button class="tennis-start" data-tennis-start>开始接球 <span aria-hidden="true">↗</span></button><p>用鼠标或触摸代替身体挥拍</p></div></div><div class="tennis-caption"><p class="game-status" role="status" aria-live="polite">准备好，来一场轻松的对打。</p><span id="tennis-instructions">方向键移动 · 空格挥拍</span></div></div></div></section>
    <section class="family-section section-space"><div class="container"><h2>一个人玩，<br>还是全家一起？</h2><div class="family-scenes"><figure class="family-main">${roomArt()}<figcaption>亲子同玩</figcaption></figure><figure class="family-small">${roomArt('party')}<figcaption>周末聚会</figcaption></figure><div class="family-caption"><p>晚饭后活动一下，<br>周末和朋友来一场。<br>留点时间，一起玩。</p></div></div></div></section>
    <section class="connection-section"><div class="container connection-layout"><div class="connection-sticky"><h2>从电视前，<br>开始第一局。</h2><div class="connection-scene" data-connection="connected">${roomArt()}<div class="connection-highlight" aria-hidden="true"></div></div></div><div class="connection-copy"><article class="connection-step" data-connection="connected"><h3>连上电视。</h3><p>把设备放到电视附近，让客厅成为游戏空间。</p></article><article class="connection-step" data-connection="ready"><h3>站到屏幕前。</h3><p>留出活动空间，准备加入游戏。</p></article><article class="connection-step" data-connection="playing"><h3>选个游戏，一起开始。</h3><p>具体连接和操作说明，后续将在教程中心更新。</p>${button('/support', '查看教程', 'button-lime')}</article></div></div></section>
    <section class="home-updates container"><div class="section-heading"><h2>最新动态</h2>${button('/news', '查看全部', 'button-text')}</div><div class="news-grid">${news.slice(0, 3).map(newsCard).join('')}</div></section>
    <section class="home-buy"><div class="container"><h2>准备好一起玩了吗？</h2>${button('/buy', '查看官方渠道', 'button-dark')}</div></section>
  </main>`;
}
