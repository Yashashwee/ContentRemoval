var imported = document.createElement('script');
imported.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js';
document.head.appendChild(imported);

let filenames = [
  "pepe1.jpg",
  "pepe2.jpg"
];

let imgs = document.getElementsByTagName('img');

for (let imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'images/' + filenames[r];
  let url = chrome.extension.getURL(file);

  for(var i=0; i<imgElt.length; i++){
  img = loadImage(imgElt[i]);

  //Send POST request

  if(1){
  imgElt.src = url;
  console.log(url);
  }
}
}
