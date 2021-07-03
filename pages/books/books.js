import BookModel from "../../models/bookModel.js";
import BookView from "../../views/bookView.js";
import BookController from "../../controllers/bookController.js";

let data = [];
const container = $('.table-section')

const bookModel = new BookModel(data);
const bookView = new BookView(container);
const bookController = new BookController(bookModel, bookView);


$('#book_form').submit(function(event) {
    event.preventDefault();

    let new_book = $(this).serializeArray();
    console.log(new_book);

    return false;
})

