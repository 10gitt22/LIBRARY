import StatisticModel from "../../models/statisticModel.js";
import StatisticView from "../../views/statisticView.js";
import StatisticController from "../../controllers/statisticController.js";

const container = $('.table-section');

const statisticModel = new StatisticModel();
const statisticView = new StatisticView(container);
const statisticController = new StatisticController(statisticModel, statisticView);
statisticController.init();
