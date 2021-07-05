export default class VisitorModel {
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
        this.data = JSON.parse(localStorage.getItem('visitor_data'));
    }

    getVisitors(){
        this.getDataFromStorage();
        return this.data;
    }
    getVisitorInStorage(id){
        let editable_item = this.data.find(visitor => visitor.id == id);
        return editable_item;
    }

    editVisitorInStorage(visitor) {
        let editable_item = this.getVisitorInStorage(visitor.id);
        let index = this.data.indexOf(editable_item);

        this.data.splice(index, 1, visitor);

        localStorage.setItem('visitor_data', JSON.stringify(this.data));
    }

    addVisitorToStorage(new_visitor_data){
        this.data.push(new_visitor_data);
        localStorage.setItem('visitor_data', JSON.stringify(this.data));
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
    sort_data(value){
        switch (value) {
            case "id":
                this.data = this.data.sort(this.sortById)
                break;
            case "name":
                this.data = this.data.sort(this.sortByName)
                break;

            default:
                break;
        }
        localStorage.setItem('visitor_data', JSON.stringify(this.data))
    }

    searchInStorage(string) {
        let results;
        string = string.toUpperCase();
        results = this.data.filter(function(entry) {
            let bool = false;
            for (const key in entry) {
                let item = entry[key];
                if(typeof(entry[key]) != "number") {  
                    if(key == "phone"){
                        item = entry[key].split(" ").join('');
                    } 
                    bool = item.toUpperCase().includes(string);
                    if(bool) return bool;
                }
            }
        });
        return results;
    }
} 
