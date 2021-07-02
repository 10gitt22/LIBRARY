import VisitorModel from "../../models/visitorModel.js";
import VisitorView from "../../views/visitorView.js";
import VisitorController from "../../controllers/visitorController.js";

let data = [];
const container = $('.table-section')

const visitorModel = new VisitorModel(data);
const visitorView = new VisitorView(container);
const visitorController = new VisitorController(visitorModel, visitorView);