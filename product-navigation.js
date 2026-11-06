import {home,support,games,gameView,shops,gameCarousel,collectionSection} from './apple-pages.js?v=65d1fef23d1f';

export function productNav(active='overview',overview='/product'){
  return `<nav class="product-nav" aria-label="RS-K1 产品导航"><div class="product-nav-inner"><a class="product-nav-name" href="${overview}">RS-K1</a><div class="product-nav-links"><a href="${overview}" ${active==='overview'?'aria-current="page"':''}>概览</a><a href="/product/guide" ${active==='guide'?'aria-current="page"':''}>使用指南</a><a href="/product/specs" ${active==='specs'?'aria-current="page"':''}>技术规格</a><a class="product-buy" href="${overview}#purchase">购买</a></div></div></nav>`;
}
export function overviewPage(path='/'){
  const markup=home();
  const boundary=markup.indexOf('<section class="chapter family"');
  return `${markup.slice(0,boundary)}<div class="product-scope" data-nav-after-banner>${productNav('overview',path)}${markup.slice(boundary)}</div>`;
}
export function guidePage(){
  return `<div class="product-scope product-subpage">${productNav('guide')}<div class="product-guide">${support('manual').replace('使用与支持。','RS-K1 使用指南').replace(/<div class="support-tabs[^"]*"[\s\S]*?<\/div>/,'')}</div></div>`;
}
export function specsPage(){
  const rows=[['型号','RS-K1'],['颜色','橙色 · Pantone 1365 C'],['机身结构','双层机身'],['感知设计','双摄像头'],['连接与使用','<a class="text-link" href="/product/guide">查看使用指南</a>'],['产品与认证资料','<a class="text-link" href="/product#certifications">查看资料状态</a>']];
  return `<div class="product-scope product-subpage">${productNav('specs')}<section class="page-hero narrow"><h1>技术规格</h1></section><section class="narrow specs-section"><div class="spec-appearance"><h2>外观</h2><img src="/moviwi-cn-preview/assets/rs-k1-studio.png" alt="RS-K1 双层机身正面效果图"><img src="/moviwi-cn-preview/assets/rs-k1-rear.png" alt="RS-K1 双层机身背面效果图"></div><dl class="spec-list">${rows.map(([name,value])=>`<div><dt>${name}</dt><dd>${value}</dd></div>`).join('')}</dl></section></div>`;
}
export function gamesPage(){return `<section class="page-hero narrow"><h1>找到你喜欢的那一局。</h1></section><section class="chapter games-page">${gameCarousel('九种玩法。<br>一起上场。')}</section>${collectionSection()}<section class="narrow games-product-link"><a class="text-link" href="/product">了解 RS-K1</a></section>`; }
