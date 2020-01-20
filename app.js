const proxyurl="https://cors-anywhere.herokuapp.com/";
const url="http://colormind.io/api/";
const data={
  model: "default",
  input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
}

// need to make the request thru a CORS proxy because
// lack Access-Control-Allow-Origin header
// axios({
//   method: 'post',
//   url: proxyurl + source,
//   data: {
//     model: "default",
//     input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
//   }
// });

// --- xml request stuff that isn't not returning data in time to
// be used :(
var http=new XMLHttpRequest();
var palette;

http.onreadystatechange=function () {
  if (http.readyState==4&&http.status==200) {
    palette=JSON.parse(http.responseText).result;
  }
}

console.log(palette);

http.open("POST", url, false);
http.send(JSON.stringify(data));

console.log(palette);


// http.addEventListener("load", e => {
//   console.log(e);
// });

// --- note: fetch won't work with xml, so you can't use it
// const getColors = async () => {
//   const response=await fetch(url, JSON.stringify(data));
//   const info=await response.json();
//   console.log('info: ', info);
// }

// getColors();
