const fetchBook = function () {

  let title = document.getElementById('book').value;
  console.log(title);

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // not ready yet so exit the function.
    }

    const data = JSON.parse(xhr.responseText);

    const img = document.createElement('img'); // detached DOM mode
    img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
    document.body.appendChild(img);
  }

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`);
  xhr.send();
};

document.getElementById('fetch').addEventListener('click', fetchBook);
