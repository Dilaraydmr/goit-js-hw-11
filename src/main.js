
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// Dokümantasyonda belirtilen import
import SimpleLightbox from "simplelightbox";
// Stil importu
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector('.app-form');
const gallery = document.querySelector('.gallery');
form.addEventListener('submit', event => {

    event.preventDefault();
    const searchValue = form.elements.search.value;
    axios.get('https://pixabay.com/api/', {
        params: {
            key: '49510581-f270029aa5247cff64ac28b7d',
            q: searchValue,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },

    })

    .then(response => {
        console.log(response);
        const images = response.data.hits;
        if (images.lenght === 0) {
            iziToast.error({
                position : 'topRight',
                message:   'Sorry, there are no images matching your search query. Please try again!',

            });
        } else {

            images.forEach(img => {
                console.log(img);
                gallery.innerHTML += `
                <li class="gallery-item">
      <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" width="360" height="200" />
      </a>
            
            <div class="content">
              <div class="info">
                <h5 class="key">Likes</h5>
                <p class="value">${img.likes}</p>
              </div>
              <div class="info">
                <h5 class="key">Views</h5>
                <p class="value">${img.views}</p>
              </div>
              <div class="info">
                <h5 class="key">Comments</h5>
                <p class="value">${img.comments}</p>
              </div>
              <div class="info">
                <h5 class="key">Downloads</h5>
                <p class="value">${img.downloads}</p>
              </div>
            </div>
          </li>`;



            });
            const lightBox = new SimpleLightbox('.gallery a', {
                

            });
        }
    })
    .catch(error => {
        console.log(error);
    });
 
   
});
   
     