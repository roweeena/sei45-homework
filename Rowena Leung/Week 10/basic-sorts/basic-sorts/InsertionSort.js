function insertionSort (items) {

  //joel's solution
  for (let i=0; i < items.length; i++){
    const item = items[i];
    //finding the position to insert the item
    let j;
    for (j = i -1 ; j >= 0 && items[j] > item; j-- ){
      items[j+1] = items[j];
    }
    items[j + 1]= item; //actual inserstion
  }
  return items;
}

module.exports = insertionSort;
