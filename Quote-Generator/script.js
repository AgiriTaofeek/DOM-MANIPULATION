//* Variables

const btn = document.querySelector('.main-content__btn');
const quote = document.querySelector('.main-content__quote');
const person = document.querySelector('.main-content__person');

const quotes = [
  {
    quote: `Life is sweet when the sun's up`,
    person: `Burna Boy`,
  },
  {
    quote: `Bird's of a feather flock together`,
    person: `Not known`,
  },
  {
    quote: `Better days are ahead, stop fussing`,
    person: `Agiri Omowunmi`,
  },
  {
    quote: `The journey of a thousand miles starts with a step`,
    person: `Lao Tzu`,
  },
  {
    quote: `Remember that not getting what you want is sometimes a wonderful  stroke of luck`,
    person: `Dalai Lama`,
  },
];

btn.addEventListener('click', () => {
  //* Math.random() function randomly generates floating numbers between 0 and 1 but since we want a number between the least and highest number of objects in the array above,  we multiply by the the total number of object in the array and round it down with the Math.floor() function since the index of arrays are integers not floats
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
