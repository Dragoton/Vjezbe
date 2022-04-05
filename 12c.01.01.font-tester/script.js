//GET R.

const key = "6245604967937c128d7c937f";

fetch("https://beers-d2a6.restdb.io/rest/type", {
  method: "get",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    "x-apikey": "key",
    "cache-control": "no-cache",
  },
})
  .then((res) => res.json())
  .then((data) => handleData(data));

function handleData(data) {
  console.log(data);
}
