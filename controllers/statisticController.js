export default class StatisticController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.data = this.model.getStatistic();
        this.url = '../../data/cards.json';
    }

    init(){
        let arr_books = this.model.top5Books(this.data);
        let arr_visitors = this.model.top5Visitors(this.data);
            this.view.printTopBooks(arr_books);
            this.view.printTopVisitors(arr_visitors);  
    }
}