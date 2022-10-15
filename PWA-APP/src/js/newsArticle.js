//* We are creating a class that basically generates an object which is the same as the one created with the createElement('news-article)
class NewsArticle extends HTMLElement {
  constructor() {
    super();
    //* Using shadow DOM to encapsulate the news-article element
    this.root = this.attachShadow({ mode: 'open' });
  }
  //* using the setter, we are going to set the article property we assigned to the custom news-article we created earlier and it must be the same name NB- the argument passed into the setter can be called anything and it represents the object fetched from the API
  set article(article) {
    //* Since the news-article is now a shadow DOM the CSS style can't be accessed hence we have to apply CSS style here
    this.root.innerHTML = `
        <style>
            h2{
                font-family: system-ui;
                font-size:2rem;
            }

            a,
            a:visited{
                text-decoration: none;
                color:inherit;
            }
            img{
                max-inline-size:100%;
            }

            p{
                font-size:1.6rem;
                font-weight: normal;
            }
        </style>
        <a href="${article.url}">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage || ''}">
            <p>${article.description || ''}</p>
        </a>
        `;
  }
}

//* The very next important step is to register the custom html, 1st arg = custom html element name and 2nd arg = class of custom element name NB-bThis command also create the object from the class above and runs the setter
customElements.define('news-article', NewsArticle);
