export default class CardController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.data = this.model.getCards();
        this.data_visitor;
        this.data_book;
        this.visitors_url = '../../data/visitors.json';
        this.books_url = '../../data/books.json';
        this.cards_url = '../../data/cards.json';
        
    }
    parseData(form_array){
        let obj = {};
        for (let i = 0; i < form_array.length; i++){
            obj[form_array[i]['name']] = form_array[i]['value'];
        }
        return obj;
    }

    getVisitorsArr(){
        let arr = this.model.getDataFromStorage();
        this.data_visitor = arr.find(data => data.name == 'visitors').data;
        return this.data_visitor;
    }

    getBooksArr(){
        let arr = this.model.getDataFromStorage();
        this.data_book = arr.find(data => data.name == 'books').data;
        return this.data_book;
    }

    init(){
        if (!localStorage.getItem('cards_data')){
            this.model.getDataFromFile(this.cards_url).then(card_data => {
                this.model.getDataFromFile(this.books_url).then(book_data => {
                    this.model.getDataFromFile(this.visitors_url).then(visitor_data => {
                        this.view.generateAllBooks(book_data);
                        this.view.generateAllVisitors(visitor_data);
                        this.view.printAllCards(card_data);

                        let data_for_storage = JSON.stringify(card_data);
                        localStorage.setItem('cards_data', data_for_storage);
                        this.data = this.model.getCards();
                    })    
                })
            })
        } else{ 
            this.getVisitorsArr();
            this.getBooksArr();
            // console.log(this.data_visitor, this.data_book);
            this.data = this.model.getCards();

            this.view.generateAllVisitors(this.data_visitor);
            this.view.generateAllBooks(this.data_book);
            this.view.printAllCards(this.data);
        }
    }

    save(form){
        let data = form.serializeArray();
        data = this.parseData(data)
        data.id = this.data.length + 1;
        data.borrow_date = this.getTodayDate();
        data.return_date = null;

        this.model.addCardToStorage(data);
        this.init();
    }

    getTodayDate(){
        let date = new Date();
        date = date.toLocaleDateString('uk')
        return date

    }

    sortController(selected_value){
        this.model.sort_data(selected_value)
        this.init();
    }
}