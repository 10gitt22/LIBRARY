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

    SortByName(a, b){
        var aName = a.name.toLowerCase();
        var bName = b.name.toLowerCase(); 
        return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
      }

      SortById(a, b){
        var aId = a.id;
        var bId = b.id;
        return ((aId < bId) ? -1 : ((aId > bId) ? 1 : 0));
      }

      sort_data(value){
        switch (value) {
            case "id":
                this.data = this.data.sort(this.SortById)
                break;
            case "name":
              this.data = this.data.sort(this.SortByName)
              break;

            default:
                break;
        }
        localStorage.setItem('visitor_data', JSON.stringify(this.data))
    }

} 
