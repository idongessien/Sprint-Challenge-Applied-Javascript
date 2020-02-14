// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios({
    url: 'https://lambda-times-backend.herokuapp.com/articles',
    method: 'get'
}).then((response) => {
    console.log(response.data);
}).catch(err => console.error(err));


function Articles(headline, authorPhoto, authorName) {
    const articleCard = document.createElement('div');
          cardHeadline = document.createElement('div');
          author = document.createElement('div');
          imgContainer = document.createElement('div');
          img = document.createElement('img');
          authName = document.createElement('span');
    
    articleCard.classList.add('card');
    cardHeadline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    var cardsContainer = document.querySelector('.cards-container');

    cardsContainer.appendChild(articleCard);
    articleCard.appendChild(cardHeadline);
    articleCard.appendChild(author);
    articleCard.appendChild(imgContainer);
    articleCard.appendChild(authName);
    imgContainer.appendChild(img);

    cardHeadline.innerHTML = headline;
    img.src = authorPhoto;
    authName.innerHTML = authorName;

    return Articles;
}

Articles();