var imageElement = document.getElementById("bong-den");

function bat() {
  imageElement.src = "./pic_bulbon.gif";
}

function tat() {
  imageElement.src = "./pic_bulboff.gif";
}

function batTat() {
  // if (5 === "5") {
  //   // 5 value 5, type integer
  //   // "5" value "5", type string
  //   // 2 dau bang thi chuyen tu 5 => "5", so sanh gia tri
  //   // 3 dau bang thi k chuyen doi va so sanh ca kieu
  //   console.log('123');
  // }
  console.log(imageElement.src);
  console.log(typeof (imageElement.src));
  console.log(imageElement.src.includes('bulboff'));
  if (imageElement.src.includes('bubloff')) {
    imageElement.src = "./pic_bulbon.gif";
  } else {
    imageElement.src = "./pic_bulboff.gif";
  }
  if (imageElement.src == "http://127.0.0.1:5500/bong-den/pic_bulboff.gif") {
    imageElement.src = "./pic_bulbon.gif";
  } else {
    imageElement.src = "./pic_bulboff.gif";
  }
}