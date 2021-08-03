const fetchBook = function (title) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    const data = JSON.parse(xhr.responseText);

    const img = document.createElement("img");
    img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
    document.body.appendChild(img);
  }

xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`);
xhr.send();
};

document.getElementById('fetch').onclick = function () {
    const bookTitle = document.getElementById("search-box").value;
    fetchBook(bookTitle);
}
