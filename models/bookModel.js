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

    addBookToStorage(new_book_data){
        console.log(new_book_data);
        this.data.push(new_book_data);
        localStorage.setItem('book_data', JSON.stringify(this.data));
    }
    
    editBookInStorage(id){

    }

    deleteBookFromStorage(id){
        let filtered_arr = this.data.filter(book => book.id != id);
        this.data = filtered_arr;
        localStorage.setItem('book_data', JSON.stringify(this.data))
    }
} 
