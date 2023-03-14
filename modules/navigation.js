const addNewBookBtn = document.querySelector('#addNewbookBtn');
const listBtn = document.querySelector('#list');
const contactBtn = document.querySelector('#contact');

const toggleDisplays = (ids, display) => {
  ids.forEach((id) => {
    const el = document.querySelector(id);
    el.style.display = display;
  });
};

const openClosePopUp = () => {
  addNewBookBtn.addEventListener('click', () => {
    toggleDisplays(['.bookList', '.bookListCon', '.contact'], 'none');
    toggleDisplays(['.addBookPopUp'], 'block');
  });
  listBtn.addEventListener('click', () => {
    toggleDisplays(['.addBookPopUp', '.contact'], 'none');
    toggleDisplays(['.bookList', '.bookListCon'], 'flex');
  });
  contactBtn.addEventListener('click', () => {
    toggleDisplays(['.addBookPopUp', '.bookList', '.bookListCon'], 'none');
    toggleDisplays(['.contact'], 'flex');
  });
};

export default openClosePopUp;