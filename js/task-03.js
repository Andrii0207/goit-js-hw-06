const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
console.log(images);

const galleryMarkup = images
  .map(({ url, alt }) => `<li><img src="${url}" alt=${alt}/></li>`)
  .join('');
console.log(galleryMarkup);

const listEl = document.querySelector('.gallery');
listEl.insertAdjacentHTML('beforeend', galleryMarkup);
console.log(listEl.setAttribute('width', 320));
console.log(listEl.width);

// const galleryItem = ({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`;
// const galleryMarkup = images.reduce((acc, item) => acc + galleryItem(item), '');
// const galleryList = document.querySelector('.gallery');
// galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);
// galleryList.setAttribute('style', 'list-style-type:none; display: flex;');
