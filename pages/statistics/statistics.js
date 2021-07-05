import StatisticModel from "../../models/statisticModel.js";
import StatisticView from "../../views/statisticView.js";
import StatisticController from "../../controllers/statisticController.js";

const container_books = $('.table-section-books');
const container_visitors = $('.table-section-visitors');

const statisticModel = new StatisticModel();
const statisticView = new StatisticView(container_books, container_visitors);
const statisticController = new StatisticController(statisticModel, statisticView);
statisticController.init();
