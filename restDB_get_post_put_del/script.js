const endpoint = "https://beers-d2a6.restdb.io/rest/type?max=100";
const apiKey = "624b323067937c128d7c94a0";



/*//GET R.
function get() {
  fetch(endpoint, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .then(handleData);
}

get();

function handleData(data) {
  data.forEach(showBeer);
}

function showBeer(beer) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  const parent = document.querySelector("main");
  copy.querySelector("h1").textContent = beer.name;
  copy.querySelector("h2").textContent = beer.type;
  copy.querySelector("h3").textContent = beer.price;
  parent.appendChild(copy);
}

function post() {
  const data = {
    name: "Tuborg Guld",
    type: "lager",
    price: "50",
    available: "true",
  };

  const postData = JSON.stringify(data);

  fetch(endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json, charset=utf-8",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}*/
