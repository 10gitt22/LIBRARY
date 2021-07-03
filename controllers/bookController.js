export default class BookController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.data = this.model.getBooks();
        this.url = '../../data/books.json';
    }

    parseData(form_array){
        let obj = {};
        for (let i = 0; i < form_array.length; i++){
            obj[form_array[i]['name']] = form_array[i]['value'];
        }
        obj.id = parseInt(obj.id);
        return obj;
    }

    init(){
        if (!localStorage.getItem('book_data')){
            this.model.getDataFromFile(this.url).then(data => {
                this.view.printAllBooks(data);
                let data_for_storage = JSON.stringify(data);
                localStorage.setItem('book_data', data_for_storage);
            })
        } else{ 
            localStorage.getItem('book_data');
            this.view.printAllBooks(this.data);
        }
    }
}