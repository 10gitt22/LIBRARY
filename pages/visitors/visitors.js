import VisitorModel from "../../models/visitorModel.js";
import VisitorView from "../../views/visitorView.js";
import VisitorController from "../../controllers/visitorController.js";

const container = $('.table-section');

const visitorModel = new VisitorModel();
const visitorView = new VisitorView(container);
const visitorController = new VisitorController(visitorModel, visitorView);
visitorController.init();

const cleave = new Cleave('.formatted-phone', {
    phone: true,
    phoneRegionCode: 'UA'
});

$(document).on('click','#add_btn', function(e) {
    visitorController.addVisitor();
})

$(document).on('click', '.edit_item', function() {
    let id = $(this).data().id;
    visitorController.editVisitor(id);
})

$(document).on('click', '#sort_btn', function() {
    let value = $("#sort option:selected").text();
    visitorController.sortController(value)
})

$(document).on('click', '#search_btn', function() {
    let search_string = $('#search').val();
    visitorController.search(search_string);
})

$(document).on('keyup', '#search', function() {
    let search_string = $('#search').val();
    visitorController.search(search_string);
})


$('#visitor_form').submit(function(event) {
    event.preventDefault();

    visitorController.save($(this));
    closeModal();
    $('#visitor_form')[0].reset();

    return false;
})

function closeModal() {
    $('.modal-background').css('display', 'none')
}
