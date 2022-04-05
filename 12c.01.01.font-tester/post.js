const key = "6245604967937c128d7c937f";

const postData = JSON.stringify(data);
fetch("https://beers-d2a6.restdb.io/rest/type", {
  method: "post",
  headers: {
    "Content-Type": "application/json",
    "x-apikey": "key",
  },
  body: postData,
})
  .then((res) => res.json())
  .then((data) => console.log(data));

function post() {
  const beers = {
    type: "red",
    price: "50",
  };
  fetch("https://beers-d2a6.restdb.io/rest/type", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": "key",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

console.log();
