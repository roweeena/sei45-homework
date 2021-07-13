

// Dom
let cats1 = {speed: 1, name:"Cat 1"}
let cats2 = {speed: 0.8, name:"Cat 2"}
let cats3 = {speed: 1.2, name:"Cat 3"}

cats1.div = document.getElementById('one');
cats2.div = document.getElementById('two');
cats3.div = document.getElementById('three');

const bubble = document.getElementById('bubble');

let boxOfCats = [cats1, cats2, cats3];
let catsRacing = [];

const moveCat = function(cat, speed) {
  catDiv = cat.div;
  //convert string "100%" from margin to number
  const margin = parseFloat(catDiv.style.marginRight);

  if (margin > 0){
    catDiv.style.marginRight = (margin - speed) + "%";
  } else { catHasFinished(cat) }
};


const catHasFinished = function(catInDom){
  catsRacing = catsRacing.filter(aCat => aCat.name != catInDom.name);
  catInDom.div.classList.remove("running");
}


const startRace = function(){
  bubble.style.visibility = "hidden";

  for (var i = 0; i < boxOfCats.length; i++) {
    const thisCat = boxOfCats[i].div;
    thisCat.classList.add("running");
    thisCat.style.marginRight = "100%";
    catsRacing.push(boxOfCats[i]);
  };
  runningInte = setInterval(running, 50);
}


const running = function(){
  for (var i = 0; i < catsRacing.length; i++){
      const thisCat = catsRacing[i];
      moveCat(thisCat, thisCat.speed)
  };
  if(!catsRacing.length){
    clearInterval(runningInte);
  }
}

const showBubble = function(){
  bubble.style.visibility = "visible";
}

setTimeout(showBubble, 3000);


console.log(
  "enter startRace() to start"
)
