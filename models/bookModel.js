export default class BookModel {
    constructor() {
        this.data = [];
        this.getDataFromStorage();
    }

    async getDataFromFile(url){
        const resp = await fetch(url);
        let data = await resp.json();
        return data;
    }

    getDataFromStorage(){
        this.data = JSON.parse(localStorage.getItem('book_data'));
    }

    getBooks(){
        this.getDataFromStorage();
        return this.data;
    }

    getBookInStorage(id){
        let editable_item = this.data.find(book => book.id == id);
        return editable_item;
    }

    editBookInStorage(book){
        let editable_item = this.getBookInStorage(book.id);
        let index = this.data.indexOf(editable_item);

        this.data.splice(index, 1, book);

        localStorage.setItem('book_data', JSON.stringify(this.data));

    }

    addBookToStorage(new_book_data){
        console.log(new_book_data);
        this.data.push(new_book_data);
        localStorage.setItem('book_data', JSON.stringify(this.data));
    }

    

    deleteBookFromStorage(id){
        let filtered_arr = this.data.filter(book => book.id != id);
        this.data = filtered_arr;
        localStorage.setItem('book_data', JSON.stringify(this.data))
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
