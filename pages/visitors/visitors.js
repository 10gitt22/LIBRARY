import VisitorModel from "../../models/visitorModel.js";
import VisitorView from "../../views/visitorView.js";
import VisitorController from "../../controllers/visitorController.js";

let data = [];
const container = $('.table-section')

const visitorModel = new VisitorModel(data);
const visitorView = new VisitorView(container);
const visitorController = new VisitorController(visitorModel, visitorView);

const cleave = new Cleave('.formatted-phone', {
    phone: true,
    phoneRegionCode: 'UA'
});
console.log(cleave);

$('#visitor_form').submit(function(event) {
    event.preventDefault();

    let new_visitor = $(this).serializeArray();
    console.log(new_visitor);

    return false;
})
