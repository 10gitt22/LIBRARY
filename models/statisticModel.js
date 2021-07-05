export default class StatisticModel {
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
        this.data = JSON.parse(localStorage.getItem('cards_data'));
    }

    getStatistic(){
        this.getDataFromStorage();
        return this.data;
    }

    top5Books(data){
        let res_arr = data.map(card => {
            return {count: 1, book_name: card.book}
        }).reduce((a, b) => {
            a[b.book_name] = (a[b.book_name] || 0) + b.count
            return a;
        }, {})
        // res_arr = res_arr.sort(this.sortByCount);
        let result = Object.keys(res_arr).map((key) => [{key: res_arr[key]}]);

        return result;
    }

    sortByCount(a, b){
        var a_count = a.count;
        var b_count = b.count;
        return ((a_count < b_count) ? 1 : ((a_count > b_count) ? -1 : 0));
    }


}