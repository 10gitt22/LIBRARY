export default class VisitorController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.data = this.model.getVisitors();
        this.url = '../../data/visitors.json';
        this.editable = false;
        this.editable_item = null;
    }
    parseData(form_array){
        let obj = {};
        for (let i = 0; i < form_array.length; i++){
            obj[form_array[i]['name']] = form_array[i]['value'];
        }
        return obj;
    }
    init(){
        if (!localStorage.getItem('visitor_data')){
            this.model.getDataFromFile(this.url).then(data => {
                this.view.printAllVisitors(data);
                let data_for_storage = JSON.stringify(data);
                localStorage.setItem('visitor_data', data_for_storage);
                this.data = this.model.getVisitors();
            })
        } else{ 
            this.view.printAllVisitors(this.data);
        }
    }

    addVisitor(){
        this.editable = false;
    }

    editVisitor(id){
        this.editable = true;
        let editable_item = this.model.getVisitorInStorage(id);
       
        $('#visitor_id').val(editable_item.id);
        $('#name').val(editable_item.name);
        $('#phone').val(editable_item.phone);  
    }
    save(form){
        let data = form.serializeArray();
        let new_visitor_data = this.parseData(data);
        
        switch (this.editable) {
            case true:
                new_visitor_data.id = parseInt(new_visitor_data.id);
                this.model.editVisitorInStorage(new_visitor_data);
                break;
            case false:
                new_visitor_data.id = this.data.length + 1;
                this.model.addVisitorToStorage(new_visitor_data)
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
}