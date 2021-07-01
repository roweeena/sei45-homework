
// Dom
let cat1 = ({
  div: document.getElementById('one'),
  speed: 1
})

let cat2 = {
  div: document.getElementById('two'),
  speed: 0.8
}
let cat3 = {
    div: document.getElementById('three'),
    speed: 1.2
}


const boxOfCats = [cat1, cat2, cat3];

const catsRacing = [];



const moveCat = function(cat, margin) {
  const m = -Math.abs(margin); //make number negative, moving right subtracts right margin
  cat.setAttribute('margin-right', m);
  if (cat.getAttribute('margin-right') < 0) return true;
};


const startRace = function(){

  for (let i = 0; boxOfCats.length < i; i++ ){
    console.log(boxOfCats[i]);
    boxOfCats[i].div.classList.add("running");
    catsRacing.push(boxOfCats[i]);
  };
  setInterval(running, 50);
}


const running = function(){
  for (let i = 0; catsRacing.length < 1; i++ ){
      console.log(catsRacing[i]);
      const thisCat = catsRacing[i];
      if (!moveCat(thisCat.div, thisCat.speed)){
        catsRacing.splice(i, 1);
      }
  };

  if(!catsRacing.length){
    clearInterval(running)
  }
}





startRace();
