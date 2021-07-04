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

    sortController(selected_value){
        this.model.sort_data(selected_value)
        this.init();
    }

    SortByName(a, b){
        var aName = a.name.toLowerCase();
        var bName = b.name.toLowerCase(); 
        return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
      }
      
     SortByAuthor(a, b){
        var aName = a.author.toLowerCase();
        var bName = b.author.toLowerCase(); 
        return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
      }
    
     SortByCount(a, b){
        var aName = a.count;
        var bName = b.count;
        return ((aName > bName) ? -1 : ((aName < bName) ? 1 : 0));
      }
      sort_data(value){
          switch (value) {
              case "name":
                this.data = this.data.sort(this.SortByName)
                break;
              case "author":
                this.data = this.data.sort(this.SortByAuthor)
                break;
              case "count":
                this.data = this.data.sort(this.SortByCount)
                break;
          
              default:
                  break;
          }
          localStorage.setItem('book_data', JSON.stringify(this.data))
      }

}