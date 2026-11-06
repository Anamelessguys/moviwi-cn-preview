import {news, tutorials} from './content.js?v=47c6e29a0acc';
import {roomArt, purchaseArt} from './product.js?v=47c6e29a0acc';

const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function cover(item){return item.visual==='device'?purchaseArt('editorial-device'):roomArt(item.visual==='people'?'party':'family');}
export function articleCards(items=news){return items.map((item,i)=>`<a class="editorial-card" href="/news/${item.slug}"><figure class="editorial-cover cover-${item.tone}">${cover(item)}</figure><div class="editorial-meta"><span>${esc(item.category)}</span><time datetime="${item.date}">${item.date.replaceAll('-','.')}</time></div><h3>${esc(item.title)}</h3><p>${esc(item.excerpt)}</p></a>`).join('');}
export function editorialListing(){return `<section class="container editorial-listing" id="articles"><div class="editorial-tools"><div class="editorial-filters" role="group" aria-label="文章分类">${['全部','品牌动态','产品资讯','灵感故事'].map((name,i)=>`<button data-article-filter="${name}" aria-pressed="${i===0}">${name}</button>`).join('')}</div><label class="editorial-search"><input type="search" id="article-search" aria-label="搜索文章" placeholder="搜索文章"/></label></div><div class="editorial-grid" id="article-results">${articleCards()}</div><p id="article-empty" class="editorial-empty" hidden>没有找到相关内容，试试其他关键词。</p></section>`;}
export function tutorialListing(){return `<section class="manual-tutorials" aria-label="使用教程"><h2>使用教程</h2><div class="manual-tutorial-grid">${tutorials.map(item=>`<a href="/support/${item.slug}"><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p></a>`).join('')}</div></section>`;}
export function editorialDetail(path){
  const isTutorial=path.startsWith('/support/');
  const slug=path.split('/').pop();
  const item=(isTutorial?tutorials:news).find(item=>item.slug===slug);
  if(!item)return null;
  const back=isTutorial?'/support?tab=manual':'/news';
  const sections=isTutorial?item.sections:item.body;
  const related=(isTutorial?tutorials:news).filter(x=>x!==item).slice(0,3);
  const title=isTutorial?'使用教程':item.category;
  return {title:item.title,markup:`<main id="main" class="editorial-detail"><article><header class="container editorial-article-header"><a class="editorial-back" href="${back}">返回${isTutorial?'教程中心':'新闻中心'}</a><div class="editorial-meta"><span>${esc(title)}</span>${!isTutorial?`<time datetime="${item.date}">${item.date.replaceAll('-','.')}</time>`:''}<span>示例内容</span></div><h1>${esc(item.title)}</h1><p>${esc(isTutorial?item.summary:item.excerpt)}</p></header>${!isTutorial?`<figure class="container editorial-article-cover cover-${item.tone}">${cover(item)}</figure>`:''}<div class="container editorial-reading-layout"><div class="editorial-body">${sections.map(([heading,text],i)=>`<section id="article-section-${i}"><h2>${esc(heading)}</h2><p>${esc(text)}</p></section>`).join('')}<a class="editorial-back reading-end" href="${back}">返回${isTutorial?'使用教程':'全部文章'}</a></div><aside class="editorial-toc" aria-label="文章目录">${sections.map(([heading],i)=>`<a href="#article-section-${i}">${esc(heading)}</a>`).join('')}</aside></div></article><section class="container editorial-related"><h2>${isTutorial?'其他教程':'继续阅读'}</h2>${isTutorial?`<div class="manual-tutorial-grid">${related.map(x=>`<a href="/support/${x.slug}"><h3>${esc(x.title)}</h3><p>${esc(x.summary)}</p></a>`).join('')}</div>`:`<div class="editorial-grid">${articleCards(related)}</div>`}</section></main>`};
}
