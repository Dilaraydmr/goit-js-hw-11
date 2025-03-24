import{a as c,i as n,S as d}from"./assets/vendor-BBSqv8W6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const l=document.querySelector(".app-form"),f=document.querySelector(".gallery");l.addEventListener("submit",i=>{i.preventDefault();const o=l.elements.search.value;c.get("https://pixabay.com/api/",{params:{key:"49510581-f270029aa5247cff64ac28b7d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{console.log(t);const r=t.data.hits;r.lenght===0?n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(r.forEach(e=>{console.log(e),f.innerHTML+=`
                <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" width="360" height="200" />
      </a>
            
            <div class="content">
              <div class="info">
                <h5 class="key">Likes</h5>
                <p class="value">${e.likes}</p>
              </div>
              <div class="info">
                <h5 class="key">Views</h5>
                <p class="value">${e.views}</p>
              </div>
              <div class="info">
                <h5 class="key">Comments</h5>
                <p class="value">${e.comments}</p>
              </div>
              <div class="info">
                <h5 class="key">Downloads</h5>
                <p class="value">${e.downloads}</p>
              </div>
            </div>
          </li>`}),new d(".gallery a",{}))}).catch(t=>{console.log(t)})});
//# sourceMappingURL=index.js.map
