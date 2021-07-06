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
        this.max_id;
        
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
                        this.max_id = this.findMaxId(this.data);
                    })    
                })
            })
        } else{ 
            this.getVisitorsArr();
            this.getBooksArr();
            this.data = this.model.getCards();

            let checkedBooks = this.checkInStock(this.data_book);

            this.view.generateAllVisitors(this.data_visitor);
            this.view.generateAllBooks(checkedBooks);
            this.view.printAllCards(this.data);
            this.max_id = this.findMaxId(this.data);
        }
    }

    save(form){
        let data = form.serializeArray();
        data = this.parseData(data)
        data.id = this.max_id + 1;
        data.borrow_date = this.getTodayDate();
        data.return_date = null;

        this.model.addCardToStorage(data);
        this.withdrawBook(data.book);
        this.init();
    }

    returnBook(id){
        let index = this.data.findIndex(card => card.id == id);
        this.data[index].return_date = this.getTodayDate();
        this.addBook(this.data[index].book);
        localStorage.setItem('cards_data', JSON.stringify(this.data))
        this.init()
    }

    getTodayDate(){
        let date = new Date();
        date = date.toLocaleDateString('uk')
        return date;
    }

    withdrawBook(book_name){
        let books_data = this.getBooksArr();
        let index = books_data.findIndex(book => book.name == book_name)
        books_data[index].count -= 1;
        localStorage.setItem('book_data', JSON.stringify(books_data))
    }

    addBook(book_name){
        let books_data = this.getBooksArr();
        let index = books_data.findIndex(book => book.name == book_name)
        books_data[index].count += 1;
        localStorage.setItem('book_data', JSON.stringify(books_data)) 
    }

    checkInStock(book_data){
        let sorted_arr = book_data.filter(book => book.count != 0);
        return sorted_arr;
    }

    sortController(selected_value){
        this.model.sort_data(selected_value)
        this.init();
    }

    search(search_string){
        let item = [];
        item = this.model.searchInStorage(search_string);
        this.view.printAllCards(item);
    }

    findMaxId(arr){
        let max = 0;
        arr.forEach(item => {
            max < item.id ? max = item.id : max;
        })
        return max;
    }
}