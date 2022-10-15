import './newsArticle.js';
import { topHeadlinesUrl } from './newsAPI.js';

async function fetchNews() {
  try {
    const res = await fetch(topHeadlinesUrl);
    // console.log('res', res);
    const json = await res.json();
    // console.log('json', json);

    const main = document.querySelector('main');
    // console.log(main);

    json.articles.forEach((article) => {
      //* I am creating a custom HTMLElement called news-article and i will make it acceptable by creating a new class and extending or inheriting all the properties of in built HTMLElement class in a new JS file i.e newsArticle
      const el = document.createElement('news-article');
      //* Add a made up article property to the created article element and assign it the article object in the array of json.articles objects
      el.article = article;
      //   console.dir((el.article = article));
      //* This didn't work
      // main.insertAdjacentHTML('beforeend', el);
      //* Worked
      //   main.append(el);
      //* Preference
      main.appendChild(el);
    });
  } catch (err) {
    console.log(err);
  }
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js')
      .then((registration) => {
        console.log('SW registered');
        console.log(registration);
      })
      .catch((err) => {
        console.log('SW registration failed');
        console.log(err);
      });
  }
}

window.addEventListener('load', () => {
  fetchNews();
  //* After loading the page, we register our service worker
  registerSW();
});
