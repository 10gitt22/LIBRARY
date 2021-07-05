export default class StatisticController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.data = this.model.getStatistic();
        this.url = '../../data/cards.json';
    }

    init(){
        let arr_books = this.model.top5Books(this.data);
        console.log(arr_books);
            // this.view.printTopBooks(arr_books);
            // this.view.printTopVisitors(this.data);  
    }
}