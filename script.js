function fetchesRepository(name) {

  const url = "https://api.github.com/users/" + name;

  fetch(url)
    .then((response) => {
      response.json()
        .then((data) => {
          console.log(data);
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

          const org = data.company
          let companyName = document.getElementById("company");
          companyName.innerHTML += org;

          const loc = data.location
          let userLocation = document.getElementById("location");
          userLocation.innerHTML += loc;

          const url_rep = data.repos_url;
          fetch(url_rep)
            .then((response) => {
              response.json()
                .then((data) => {
                  console.log(data);
                  let ul = document.createElement("ul");
                  document.querySelector("#list").appendChild(ul);
                  for (let i = 0; i < data.length; i++) {
                    console.log(data[i].name);
                    console.log(data[i].html_url);
                    let li = document.createElement("li");
                    ul.appendChild(li);
                    li.innerHTML += "<a href='" + data[i].html_url + "' target='_blank'>" + data[i].name + "</a>";
                    li.style.listStyleType = "decimal";
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

fetchesRepository("y1ann1s85")
