


const videos = document.querySelectorAll("a");

// JS
// const formatPage = function(){
//   videos.forEach((vid, i) => {
//     const url = vid.getAttribute('href');
//     const thumbInner = youtube.generateThumbnailUrl(url);
//     let img = document.createElement('img');
//     img.src = thumbInner;
//     console.log(img);
//     videos[i].prepend(img);
//   });
// }


const formatPage = function(){
  videos.forEach((vid, i) => {
    const url = vid.getAttribute('href');
    const thumbInner = youtube.generateThumbnailUrl(url);
    let img = document.createElement('img');
    img.src = thumbInner;
    console.log(img);
    videos[i].prepend(img);
  });
}


formatPage();


// document.body.appendChild(myNewElement);
