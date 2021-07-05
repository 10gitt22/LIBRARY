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

        let result = Object.keys(res_arr).map((key) => {
            let obj = {
                'book': key,
                'count': res_arr[key]
            }
            return obj
        });
        let sorted = result.sort(this.sortByCount);
        sorted.length = 5;
        return sorted;
    }

    top5Visitors(data){
        let res_arr = data.map(card => {
            return {count: 1, visitor_name: card.visitor}
        }).reduce((a, b) => {
            a[b.visitor_name] = (a[b.visitor_name] || 0) + b.count
            return a;
        }, {})

        let result = Object.keys(res_arr).map((key) => {
            let obj = {
                'visitor': key,
                'count': res_arr[key]
            }
            return obj
        });
        let sorted = result.sort(this.sortByCount);
        sorted.length = 5;
        return sorted;
    }

    sortByCount(a, b){
        var a_count = a.count;
        var b_count = b.count;
        return ((a_count < b_count) ? 1 : ((a_count > b_count) ? -1 : 0));
    }


}