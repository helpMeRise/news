import fetchRequest from './fetchRequest.js';
import renderCards from './renderCards.js';
import preload from './preload.js';

let searchUrl;

const form = document.querySelector('.form');
const input = document.querySelector('.input');

const wrapperHeadlines = document.querySelector('.wrapper__headlines');
const wrapperNews = document.querySelector('.wrapper__news');

const init = () => {
  preload.show();
  return Promise.all([
    fetchRequest('top-headlines?country=ru', {
      callback: renderCards,
      headers: {
        'X-Api-Key': '03224a3a80d742aebfbfa7b4012d353a',
      },
    }),
  ]);
};

init().then(data => {
  preload.remove();
  wrapperHeadlines.append(data[0]);
});

const show = () => {
  preload.show();
  return Promise.all([
    fetchRequest(searchUrl, {
      callback: renderCards,
      headers: {
        'X-Api-Key': '03224a3a80d742aebfbfa7b4012d353a',
      },
    }),
    fetchRequest('top-headlines?country=ru', {
      callback: renderCards,
      headers: {
        'X-Api-Key': '03224a3a80d742aebfbfa7b4012d353a',
      },
    })]);
};

form.addEventListener('submit', e => {
  e.preventDefault();
  searchUrl = `everything?q=(${input.value})`;
  const headlinesCards = wrapperHeadlines.querySelectorAll('.card');
  const newsCards = wrapperNews.querySelectorAll('.card');

  show().then(data => {
    preload.remove();
    headlinesCards.forEach(item => item.remove());
    newsCards.forEach(item => item.remove());
    wrapperNews.append(data[0]);
    wrapperHeadlines.append(data[1]);
  });
});
