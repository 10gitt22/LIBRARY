import BookModel from "../../models/bookModel.js";
import BookView from "../../views/bookView.js";
import BookController from "../../controllers/bookController.js";

const container = $('.table-section');

const bookModel = new BookModel();
const bookView = new BookView(container);
const bookController = new BookController(bookModel, bookView);
bookController.init();


$(document).on('click', '#add_btn', function() {
    bookController.addBook();
})

$(document).on('click', '.edit_item', function() {
    let id = $(this).data().id;
    bookController.editBook(id);
})

$(document).on('click', '.delete_item', function() {
    let id = $(this).data().id;
    bookController.deleteBook(id);
})

$(document).on('click', '#sort_btn', function() {
    let value = $("#sort option:selected").text() ;
    bookController.sortController(value)
})

$(document).on('click', '#search_btn', function() {
    let search_string = $('#search').val();
    bookController.search(search_string);
})

$(document).on('keyup', '#search', function() {
    let search_string = $('#search').val();
    bookController.search(search_string);
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


