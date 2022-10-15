const accordionContent = document.querySelectorAll('.accordion__content');

const accordionQuestion = document.querySelectorAll(
  '.accordion__question-wrapper'
);

const accordionAnswer = document.querySelectorAll('.accordion__answer');

// accordionContent.forEach((content) => {
//   //   console.log(content);
//   content.addEventListener('click', function () {
//     this.classList.toggle('active');
//   });
// });

accordionQuestion.forEach((question) => {
  question.addEventListener('click', function (e) {
    // console.log(this);
    // console.log(this.hasAttribute('aria-expanded', 'false'));
    // console.log(e);

    e.target.hasAttribute('data-visible')
      ? e.target.setAttribute('aria-expanded', false)
      : e.target.setAttribute('aria-expanded', true);

    e.target.toggleAttribute('data-visible');
    this.toggleAttribute('data-visible');
  });
});
console.log(accordionContent);
console.log(accordionQuestion);
console.log(accordionAnswer);
