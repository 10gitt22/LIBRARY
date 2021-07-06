export default class BookController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.data = this.model.getBooks();
        this.url = '../../data/books.json';
        this.editable = null;
        this.max_id;
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
                this.max_id = this.findMaxId(this.data);
            })
        } else{ 
            this.data = this.model.getBooks();
            this.view.printAllBooks(this.data);
            this.max_id = this.findMaxId(this.data);
        }
    }

    addBook(){
        this.editable = false;
    }

    editBook(id){
        this.editable = true;
        let editable_item = this.model.getBookInStorage(id);

        $('#book_id').val(editable_item.id);
        $('#name').val(editable_item.name);
        $('#author').val(editable_item.author);
        $('#year').val(editable_item.year);
        $('#publisher').val(editable_item.publisher);
        $('#pages').val(editable_item.pages);
        $('#count').val(editable_item.count);

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
                new_book_data.id = parseInt(new_book_data.id);
                this.model.editBookInStorage(new_book_data);
                break;
            case false:
                new_book_data.id = this.max_id + 1;
                this.model.addBookToStorage(new_book_data);
                break;
        
            default:
                break;
        }
        this.init();
    }

    sortController(selected_value){
        this.model.sort_data(selected_value)
        this.init();
    }

    search(search_string){
        let item = [];
        item = this.model.searchInStorage(search_string);
        this.view.printAllBooks(item);
    }

    findMaxId(arr){
        let max = 0;
        arr.forEach(item => {
            max < item.id ? max = item.id : max;
        })
        return max;
    }
}