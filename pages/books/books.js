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
    console.log(id);
    bookController.editBook(id);
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

$("#sort_btn").click(function(e){
    let value = $("#sort option:selected").text() ;
    bookController.sortController(value)
    console.log(value);
})

