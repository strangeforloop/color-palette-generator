const proxyurl="https://cors-anywhere.herokuapp.com/";
const url="http://colormind.io/api/";
const data={
  model: "default"
  // input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
}

var http=new XMLHttpRequest();

http.onreadystatechange=function () {
  if (http.readyState==4 && http.status==200) {
    var palette=JSON.parse(http.responseText).result;
    console.log('palette: ', palette);

    getColorsFromArray(palette);
    console.log(palette);
  }
}

http.open("POST", url, true);
http.send(JSON.stringify(data));


// GENERAL SYNTAX
// parent.childNodes[1].style.color="rgb(155, 102, 102)"; 
// let color = "rgb(";
// if first two items, append number as a string and ,
// if last item, append number as a string )

let rgbColorsAsStringsArray = [];

// rgb(redValue, greenValue, blueValue)
function getColorsFromArray(palette) {
  let numOfColors = 5;

  // get hex color for palette
  for (let i = 0; i < numOfColors; i++) {
    console.log(palette[i]);

    let color="rgb(";
    for (let j = 0; j < 3; j++) {
      // construct color string to have format rbg(x, y, z)
      if (j == 0 || j == 1) {
        color += palette[i][j].toString() + ", ";
      } else {
        color += palette[i][j].toString() + ")";
      }
    }
    rgbColorsAsStringsArray.push(color);
    // console.log('Colors Array: ', rgbColorsAsStringsArray);
  }

  setColorOfElements();
}

function setColorOfElements() {
  // for the number of swatches,
  // set each one to the corresponding color in the string color array
  // then do
  // document.getElementById('one').style.backgroundColor = rgbAsAStringArray[i];

  const swatchElements = document.getElementsByClassName('swatch');
  // console.log("LIs: ", swatchElements);
  let numOfColors = 5;

  for (let i = 0; i < numOfColors; i++) {
    swatchElements[i].style.backgroundColor = rgbColorsAsStringsArray[i];
  }
}


// function getColorsFromArray2(palette) {
//   let numOfColors = 5;

//   // get hex color for palette
//   for (let i = 0; i < numOfColors; i++) {
//     let hexColorString='';
//     console.log(palette[i]);

//     for (let j = 0; j < 3; j++) {
//       hexColorString += palette[i][j].toString();
//     }

//     console.log('Hex String: ', hexColorString);
//   }
// }