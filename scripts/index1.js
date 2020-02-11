// const btn = document.querySelector("button")
// function getPosts(cb) {

// const xhr = new XMLHttpRequest();

// //request settings
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.addEventListener("load", () => {
//   const response = JSON.parse(xhr.responseText);
//   console.log(response);
//   cb(response);
// });

// xhr.addEventListener('error', () => {
//   console.log('error');
// })

// xhr.send();
// }

// btn.addEventListener("click", (e) => {
//   getPosts((response) => {
//     console.log(response); 
//    });
// });
//----------------------------------------------------------------------------
function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if(Math.floor(xhr.status / 100) !== 2) {
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
      } catch (error) {
        cb(error);
      }
      },
      post(url, body, headers, cb) {
        try {
          const xhr = new XMLHttpRequest();
          xhr.open('POST', url);
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
  
          if (headers) {
            Object.entries(headers).forEach(([key, value]) => {
              // console.log(key, value);
              xhr.setRequestHeader(key, value);
            });
          }
      
          xhr.send(JSON.stringify(body));
        } catch (error) {
          cb(error);
        }
      },
    };
  }

  const myHttp = http();

  myHttp.get(
    'https://jsonplaceholder.typicode.com/posts', 
    (err, res) => {
      if (err) {
        console.log('error', err);
        return;
      }
      myHttp.get(
        'https://jsonplaceholder.typicode.com/comments?postId=1', 
        (err, res) => {
          if (err) {
            console.log('error', err);
            return;
          }
          myHttp.get(
            'https://jsonplaceholder.typicode.com/users/1', 
            (err, res) => {
              if (err) {
                console.log('error', err);
                return;
              }
              // console.log('наконец');
            },
          );
        },
      );  
    },   
  );


function getPost(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/1`, 
        (err, res) => {
        if(err) {
          reject(err);
        }
        resolve({ post, comments: res });
      },
    );
  }) 
}

function getPostComments(post) {
  const { id } = post;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
        (err, res) => {
          if(err) {
            reject(err);
          }
          resolve(res);
        },
      );
  }); 
}

function getUserCreatedPost(data) {
  const { post:  { userId },
} = data;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/1`,
      (err, res) => {
        if(err) {
          reject(err);
        }
        resolve(res);
      });
  });
}

 getPost()
  .then(post => getPostComments())
  .then(comments => getUserCreatedPost())
  .then(user => console.log(user))
  .catch(err => console.log(err));





