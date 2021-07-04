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

$(document).on('click', '.delete_item', function() {
    let id = $(this).data().id;
    bookController.deleteBook(id);
})

$('#book_form').submit(function(event) {
    event.preventDefault();
    
    bookController.save($(this));
    closeModal();
    $('#book_form')[0].reset();

    return false;
})

function closeModal() {
    $('.modal-background').css('display', 'none')
}

