import BookModel from "../../models/bookModel.js";
import BookView from "../../views/bookView.js";
import BookController from "../../controllers/bookController.js";

const container = $('.table-section');


const bookModel = new BookModel();
const bookView = new BookView(container);
const bookController = new BookController(bookModel, bookView);
bookController.init();

$('#book_form').submit(function(event) {
    event.preventDefault();

    let new_book = $(this).serializeArray();
    console.log(new_book);

    return false;
})

//teeeestss