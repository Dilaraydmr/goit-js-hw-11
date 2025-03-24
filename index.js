import{a as c,i as n}from"./assets/vendor-xdmks-E3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".app-form"),d=document.querySelector(".gallery");l.addEventListener("submit",i=>{i.preventDefault();const o=l.elements.search.value;c.get("https://pixabay.com/api/",{params:{key:"49510581-f270029aa5247cff64ac28b7d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>{console.log(s);const r=s.data.hits;r.lenght===0?n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(r.forEach(e=>{console.log(e),d.innerHTML+=`
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
          </li>`}),new SimpleLightBox(".gallery a",{}))}).catch(s=>{console.log(s)})});
//# sourceMappingURL=index.js.map
