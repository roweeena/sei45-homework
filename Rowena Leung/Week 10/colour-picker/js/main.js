
$(document).ready(() => {
$('.color-rgb').text( );
$('.color-hex').text( );


$('.color-picker').mouseover(function(e){

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  
  const rgbColor = `rgb(${r}, ${g}, ${b})`

    //change the background colour to the color
  $(this).css('background-color', rgbColor);//referring to the div
  $('.color-picker').click(()=>{
    $('.color-rgb').text( rgbColor );
    $('.color-hex').text();
  });
})




// $('.color-picker').mouseout(function(){
//   //mouse out change to white
//   $(this).css('background-color', "white");
// })



})
