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
    sortById(a, b){
        var a_id = a.id;
        var b_id = b.id;
        return ((a_id < b_id) ? -1 : ((a_id > b_id) ? 1 : 0));
    }
    sortByName(a, b){
        var a_name = a.name.toLowerCase();
        var b_name = b.name.toLowerCase(); 
        return ((a_name < b_name) ? -1 : ((a_name > b_name) ? 1 : 0));
    }
      
    sortByAuthor(a, b){
        var a_author = a.author.toLowerCase();
        var b_author = b.author.toLowerCase(); 
        return ((a_author < b_author) ? -1 : ((a_author > b_author) ? 1 : 0));
    }
    
    sortByCount(a, b){
        var a_count = a.count;
        var b_count = b.count;
        return ((a_count > b_count) ? -1 : ((a_count < b_count) ? 1 : 0));
    }
    sort_data(value){
        switch (value) {
            case "id":
                this.data = this.data.sort(this.sortById)
                break;
            case "name":
                this.data = this.data.sort(this.sortByName)
                break;
            case "author":
                this.data = this.data.sort(this.sortByAuthor)
                break;
            case "count":
                this.data = this.data.sort(this.sortByCount)
                break;
        
            default:
                break;
        }
        localStorage.setItem('book_data', JSON.stringify(this.data))
    }

    searchInStorage(string) {
        let results;
        string = string.toUpperCase();
        results = this.data.filter(function (entry) {
            let bool = false;
            for (const key in entry) {
                let item = entry[key];
                if (typeof (entry[key]) != "number") {
                    bool = item.toUpperCase().includes(string);
                    if (bool) return bool;
                }
            }
        });
        return results;
    }
    
} 
