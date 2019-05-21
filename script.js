let contentElement = document.getElementById("content");

function fetchesRepository(name) {

const url = "https://api.github.com/users/" + name;

fetch(url)
  .then((response) => {
    response.json()
      .then((data) => {
        console.log(data);
        // myResponse = JSON.stringify(data);
        // contentElement.innerHTML += myResponse;
    const avatar = data.avatar_url;
    let avatarElement = document.getElementById("img");
    avatarElement.src = avatar;
  
    const name = data.name;
    if (name == null) {
      const login = data.login;
      let nameElement = document.getElementById("name");
      nameElement.innerHTML += login;  
    }
    else {
    let nameElement = document.getElementById("name");
    nameElement.innerHTML += name;
    }
    const repos = data.repos_url;
    let repElement = document.getElementById("list");
    repElement.innerHTML += repos;

    const url_rep = data.repos_url;
    fetch(url_rep)
    .then((response) => {
      response.json()
      .then((data) => {
        console.log(data);
        for (let i=0; i<data.length; i++) {
          console.log(data[i].name);
          // console.log(i);
          let ul = document.createElement("ul");
          document.querySelector("#list").appendChild(ul);
          let li = document.createElement("li");
          ul.appendChild(li);
          li.innerHTML += data[i].name;      
        }
      })

      .catch((err) => {
        console.log("Error while parsing json ", err);
      });
      }).catch((err) => {
        console.log("error", err);
      });
      })
      .catch((err) => {
        console.log("Error while parsing json ", err);
      });
  }).catch((err) => {
    console.log("error", err);
  });
}

fetchesRepository("y1ann1s85");
