export default class CardModel {
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
        let books = JSON.parse(localStorage.getItem('book_data'));
        let visitors = JSON.parse(localStorage.getItem('visitor_data'));
        this.data = JSON.parse(localStorage.getItem('cards_data'));

        let data_arr =  [{name: 'books', data: books}, {name: 'visitors', data: visitors}, {name: 'cards', data: this.data}];
        return data_arr;
    }

    getCards(){
        this.getDataFromStorage();
        return this.data;
    }

    addCardToStorage(new_card_data){
        this.data.push(new_card_data);
        localStorage.setItem('cards_data', JSON.stringify(this.data));
    }
    sortById(a, b){
        var a_id = a.id;
        var b_id = b.id;
        return ((a_id < b_id) ? -1 : ((a_id > b_id) ? 1 : 0));
    }
    sortByVisitor(a, b){
        var a_visitor = a.visitor.toLowerCase();
        var b_visitor = b.visitor.toLowerCase(); 
        return ((a_visitor < b_visitor) ? -1 : ((a_visitor > b_visitor) ? 1 : 0));
    }
    sortByBook(a, b){
        var a_book = a.book.toLowerCase();
        var b_book = b.book.toLowerCase(); 
        return ((a_book < b_book) ? -1 : ((a_book > b_book) ? 1 : 0));
    }
    sortByReturnDate(a, b){
        var a_return_date = a.return_date;
        var b_return_date = b.return_date; 
        return (((a_return_date < b_return_date) || b_return_date == null) ? 1 : (((a_return_date > b_return_date)|| a_return_date == null )? -1 : 0));
    }
    sort_data(value){
        switch (value) {
            case "id":
                this.data = this.data.sort(this.sortById)
                break;
            case "visitor":
                this.data = this.data.sort(this.sortByVisitor)
                break;
            case "book":
                this.data = this.data.sort(this.sortByBook)
                break;
            case "return date":
                this.data = this.data.sort(this.sortByReturnDate)
                break;

            default:
                break;
        }
        localStorage.setItem('cards_data', JSON.stringify(this.data))
    }
    searchInStorage(string) {
        let results;
        string = string.toUpperCase();
        results = this.data.filter(function (entry) {
            let bool = false;
            for (const key in entry) {
                let item = entry[key];
                if ((typeof (item) != "number")) {
                    if (item != null){
                        bool = item.toUpperCase().includes(string);
                        if (bool) return bool;
                    }   
                }
            }
        });
        return results;
    }
}