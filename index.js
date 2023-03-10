import BookCollection from './modules/bookCollection.js';
import openClosePopUp from './modules/navigation.js';
import updateTime from './modules/time.js';

const bookCollection = new BookCollection();
bookCollection.retrieveFromLocal();
bookCollection.displayOnUI();
bookCollection.addBooks();
openClosePopUp();
updateTime();