import CardModel from "../../models/cardModel.js";
import CardView from "../../views/cardView.js";
import CardController from "../../controllers/cardController.js";

const container = $('.table-section');

const cardModel = new CardModel();
const cardView = new CardView(container);
const cardController = new CardController(cardModel, cardView);
cardController.init();

// $('#visitor_form').submit(function(event) {
//     event.preventDefault();

//     visitorController.save($(this));
//     closeModal();
//     $('#visitor_form')[0].reset();

//     return false;
// })

// function closeModal() {
//     $('.modal-background').css('display', 'none')
// }
