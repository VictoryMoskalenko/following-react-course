const btn = document.querySelector(".btn-get-posts");
const btnAddPost = document.querySelector(".btn-add-post");

const container = document.querySelector('.container');

function getPosts(cb) {
  const xhr = new XMLHttpRequest();
// console.log(xhr)
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.addEventListener("load", () => {
  //  console.log(xhr.responseText);
   const response = JSON.parse(xhr.responseText);
  //  console.log(response);
   cb(response)
});

xhr.addEventListener("error", () => {
  console.log('error');
});

xhr.send();
}


function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
  // console.log(xhr)
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  
  xhr.addEventListener("load", () => {
    //  console.log(xhr.responseText);
     const response = JSON.parse(xhr.responseText);
     cb(response)
  });

  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8")
  
  xhr.addEventListener("error", () => {
    console.log('error');
  });
  
  xhr.send(JSON.stringify(body));
}

function cardTemplate(post) {
    const card = document.createElement("div");
    card.classList.add('card');
    const cardBody = document.createElement("div");
    cardBody.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = post.title;
    const article = document.createElement('p');
    article.classList.add('card-text');
    article.textContent = post.body;
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    // console.log(cardBody);
    card.appendChild(cardBody);
    return card;
}


function renderPosts(response) {
  const fragment = document.createDocumentFragment();
    response.forEach(post => {
      const card = cardTemplate(post);
      fragment.appendChild(card);  
    });
    container.appendChild(fragment);
}

btn.addEventListener("click", (e) => {
  getPosts(renderPosts);
});

btnAddPost.addEventListener("click", (e) => {
  const newPost = {
    title: 'foo',
      body: 'bar',
      userId: 1
  };
  createPost(newPost, response => {
    // console.log(response);
    const card = cardTemplate(response);
    container.insertAdjacentElement("afterbegin", card);
    //console.log(card); 
  });
});

function myHttpRequest({ method, url } = {}, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.addEventListener("load", () => {
    if (Math.floor(xhr.status / 100) !== 2) {
      cb(`Error. Status code: ${xhr.status}`, xhr);
      return;
    }
    const response = JSON.parse(xhr.responseText);
    cb(null, response);
  });

  xhr.addEventListener("error", () => {
    cb(`Error. Status code: ${xhr.status}`, xhr);
  });

  xhr.send();
} 

myHttpRequest(
  {
    method:'GET',
    url: 'https://jsonplaceholder.typicodes.com/posts',
  },
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(res);
  },
);