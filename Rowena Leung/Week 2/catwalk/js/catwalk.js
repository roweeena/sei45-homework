
const cat = document.getElementsByTagName('img')[0];
cat.style.position = 'absolute';
cat.style.left = '0px';

const catWalk = function() {

  const oldLeft = parseInt(cat.style.left);
  const newLeft = oldLeft + 1;
  cat.style.left = newLeft + 'px'; //keep walking
//
  if (oldLeft > (innerWidth-cat.width)) {
    cat.style.transform = 'scaleX(-1)' //if the cat hits  the edge of the screen, flip it

  }
}
//   else if (cat.style.transform === 'scaleX(-1)'){
//     const newleft = oldLeft - 1
//     cat.style.left = newLeft + 'px';
//     if (oldLeft === 0) {
//       cat.style.transform = 'scaleX(1)';
//     }
// }
// }

const godzilla = function () {
  const body = document.body;
  const newImg = document.createElement('img');
  newImg.src = "images/godzilla_drib.gif";
  document.querySelector('#godzilla');
  body.getElementById('#godzilla').appendChild(newImg);
};


//
//   }
//   if (catLocation === innerWidth) {
//     cat.style.transform = 'scaleX(-1)';
//   }
//  else if (catLocation <= innerWidth && cat.style.transform === 'scaleX(-1)') {
//   catLocation = oldLeft - 1;
//   cat.style.left = catLocation + 'px';
// } if (catLocation === 0) {
//   cat.style.transform = 'scaleX(-1)';
// }
// else {
//     clearInterval(stop);
//   //   setTimeout(cat.style.visibility='hidden', 5500);
//   //
//   //
//   // }
//
//
//   // if (godzilla.style.display = 3000) {
//   //
//
//
// }
// }

 let stop = setInterval(catWalk, 10);
