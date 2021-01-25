// Javascript for The Odin Project - Library Project
let myLibrary = [];
const gridContainer = document.getElementById("grid-container");
const addBookBtn = document.getElementById('addBook');

function Book (title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(){
  
  //  Feature List:
  //  Check for fields being filled in. 
  //  Add a delete Button to each book to delete it's self.


  const title = document.getElementsByTagName("input")[0].value;
  const author = document.getElementsByTagName("input")[1].value;
  const pages = document.getElementsByTagName("input")[2].value;
  const readIt = document.getElementsByTagName("input")[3].checked;
  
  
  let newBK = new Book(title,author,pages,readIt);
  console.log(newBK);
  myLibrary.push(newBK);
  console.log(myLibrary);
  clearForm();
  displayBooks(newBK); 
  
  
}

function clearForm(){
  const title = document.getElementsByTagName("input")[0];
  const author = document.getElementsByTagName("input")[1];
  const pages = document.getElementsByTagName("input")[2];
  const readIt = document.getElementsByTagName("input")[3];

  title.value = "";
  author.value = "";
  pages.value = "";
  readIt.checked = false;

  return
}

function displayBooks(bk){
  let book = document.createElement('div');
  let bookImage = document.createElement('img');

  //Display Image
  bookImage.src = '/_images/books-clipart.png';
  bookImage.alt = 'Avatar';
  bookImage.style.width = '100%';
  book.append(bookImage);

  //Display Book info
  let textContainer = document.createElement('div');
  textContainer.innerHTML = `<h4><b>${bk.title}</b></h4><p>${bk.author}</p><p>Number of Pages:${bk.pages}</p><p>Read = ${bk.read}</p>`;
  textContainer.className = `container`;
  book.append(textContainer);

  //Display Delete Button
  let delBtn = document.createElement('button');
  delBtn.className = `deleteBook`;
  //delBtn.addEventListener("click", deleteBook(this));
  delBtn.onclick =  function(){deleteBook(this);}
  delBtn.textContent = "Delete Book!"
  delBtn.attributes.style = 'center';
  book.append(delBtn);

  let xtraSpace = document.createElement('p');
  book.append(xtraSpace);
  

  gridContainer.appendChild(book).className = "card";
}

function deleteBook(e){
  //console.log("bk = " + bk);
  e.parentNode.parentNode.removeChild(e.parentNode);
}



const newBook = new Book('The Hobbit', 'J.R.R. Tolkein', 295, true);
myLibrary.push(newBook);
const newBook2 = new Book('Animal Farm', 'George Orwell', 128, true);
myLibrary.push(newBook2);
let newBook3 = new Book('Fahrenheit 451', 'Ray Bradbury', 174, false);
myLibrary.push(newBook3);
newBook3 = new Book('Of Mice and Men', 'John Steinbeck', 112, true);
myLibrary.push(newBook3);

//console.log(myLibrary);
/*
let book = document.createElement('div');

let bookImage = document.createElement('img');
bookImage.src = '/_images/books-clipart.png';
bookImage.alt = 'Avatar';
bookImage.style.width = '100%';
book.append(bookImage);

let textContainer = document.createElement('div');
textContainer.innerHTML = `<h4><b>${myLibrary[0].title}</b></h4><p>${myLibrary[0].author}</p><p>Number of Pages:${myLibrary[0].pages}</p><p>Read = ${myLibrary[0].read}</p>`;
textContainer.className = `container`;
book.append(textContainer);
gridContainer.appendChild(book).className = "card";
*/
myLibrary.forEach(displayBooks);

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  clearForm();
  document.getElementById("popupForm").style.display = "none";
}