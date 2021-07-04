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
console.log(cleave);

$('#add_btn').click(function() {
    visitorController.addVisitor();
})

$('.edit_item').click(function() {
    let id = $(this).data().id;
    console.log(id);
    visitorController.editVisitor(id);
})

function closeModal() {
    $('.modal-background').css('display', 'none')
}

$('#visitor_form').submit(function(event) {
    event.preventDefault();

    visitorController.save($(this));
    closeModal();
    $('#visitor_form')[0].reset();

    return false;
})

$('#search_btn').click(function() {
    visitorController.search();

})
