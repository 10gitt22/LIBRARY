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
} 
