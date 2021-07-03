import BookModel from "../../models/bookModel.js";
import BookView from "../../views/bookView.js";
import BookController from "../../controllers/bookController.js";

const container = $('.table-section');


const bookModel = new BookModel();
const bookView = new BookView(container);
const bookController = new BookController(bookModel, bookView);
bookController.init();

$('#add_btn').click(function() {
    bookController.addBook();
})

$('.edit_item').click(function() {
    bookController.editBook();
})

function closeModal() {
    $('.modal-background').css('display', 'none')
}

$('#book_form').submit(function(event) {
    event.preventDefault();
    
    bookController.save($(this));
    closeModal();
    $('#book_form')[0].reset();

    return false;
})
