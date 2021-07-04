export default class BookController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.data = this.model.getBooks();
        this.url = '../../data/books.json';
        this.editable = null;
    }

    parseData(form_array){
        let obj = {};
        for (let i = 0; i < form_array.length; i++){
            obj[form_array[i]['name']] = form_array[i]['value'];
        }
        return obj;
    }

    init(){
        if (!localStorage.getItem('book_data')){
            this.model.getDataFromFile(this.url).then(data => {
                this.view.printAllBooks(data);
                let data_for_storage = JSON.stringify(data);
                localStorage.setItem('book_data', data_for_storage);
                this.data = this.model.getBooks();
            })
        } else{ 
            this.data = this.model.getBooks();
            this.view.printAllBooks(this.data);
        }
    }

    addBook(){
        this.editable = false;
    }

    editBook(){
        this.editable = true;
    }

    deleteBook(id) {
        this.model.deleteBookFromStorage(id);
        this.init();
    }

    save(form){
        let data = form.serializeArray();
        let new_book_data = this.parseData(data);

        switch (this.editable) {
            case true:
                this.model.editBookInStorage();
                break;
            case false:
                new_book_data.id = this.data.length + 1;
                this.model.addBookToStorage(new_book_data);
                break;
        
            default:
                break;
        }
        this.init();
    }
}