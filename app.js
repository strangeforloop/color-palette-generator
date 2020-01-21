const url = "http://colormind.io/api/";
const data = {
  model: "default"
  // input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
}

function requestPalette() {
  let http = new XMLHttpRequest();

  http.onreadystatechange=function () {
    if (http.readyState == 4&&http.status == 200) {
      var palette=JSON.parse(http.responseText).result;
      console.log('palette: ', palette);

      getColorsFromArray(palette);
      console.log(palette);
    }
  }

  // when this completes, runs the above
  http.open("POST", url, true);
  http.send(JSON.stringify(data));
}

// rgb(redValue, greenValue, blueValue)
function getColorsFromArray(palette) {
  const numColorsInPalette = palette.length;
  let rgbColorsAsStringsArray = [];
  
  for (let i = 0; i < numColorsInPalette; i++) {
    console.log(palette[i]);

    // let color="rgb(";
    let colorAsString = 
    `rgb(${palette[i].map(hue => hue.toString()).join(', ')})`;

    rgbColorsAsStringsArray.push(colorAsString);
  }

  setColorOfElements(rgbColorsAsStringsArray);
}

function setColorOfElements(rgbColorsAsStringsArray) {
  const swatchElements = document.getElementsByClassName('swatch');
  const numSwatches = swatchElements.length;

  for (let i = 0; i < numSwatches; i++) {
    swatchElements[i].style.backgroundColor = rgbColorsAsStringsArray[i];
  }
}