export default class BookCollection {
  constructor() {
    this.books = [];
  }

  displayOnUI() {
    const bookContainer = document.querySelector('.bookList');
    bookContainer.innerHTML = '';
    this.books.forEach((book) => {
      const div = document.createElement('div');
      div.classList.add('items');
      div.innerHTML = `
        <p> "${book.title}" by <strong>${book.author}</strong></p>
        <button class="deleteBtn" type="button" >Remove</button>
        `;
      bookContainer.appendChild(div);
    });
    this.delete();
  }

  setInLocal() {
    localStorage.setItem('bookStr', JSON.stringify(this.books));
  }

  retrieveFromLocal() {
    const storedData = localStorage.getItem('bookStr') ? JSON.parse(localStorage.getItem('bookStr')) : [];
    this.books = storedData;
  }

  addBooks() {
    const form = document.querySelector('form');
    const { bookName, authorName } = form.elements;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = this.books.length;
      const title = bookName.value;
      const author = authorName.value;
      const info = { id, title, author };
      this.books.push(info);
      this.setInLocal();
      form.reset();
      this.displayOnUI();
    });
  }

 delete = () => {
   const deleteBtns = document.querySelectorAll('.deleteBtn');
   deleteBtns.forEach((deleteBtn, i) => {
     deleteBtn.addEventListener('click', () => {
       const filteredArr = this.books.filter((book, index) => index !== i);
       this.books = filteredArr;
       this.setInLocal();
       this.displayOnUI();
     });
   });
 };
}
