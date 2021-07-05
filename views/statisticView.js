export default class StatisticView {
    constructor(container_books, container_visitors) {
        this.container_books = container_books;
        this.container_visitors = container_visitors;
    }

    printTopBooks(data) {
        console.log('print top books');
        let table_books = $('#stat-books');
        let str = ``;
        data.forEach(card => {
            str  +=`
            <tr>
                <td>${card.id}</td>
                <td>${card.book}</td>
            </tr>
            `
        });
        table_books.html(str);
    }

    printTopVisitors(data) {
        console.log('print top visitors');
        let table_visitors = $('#stat-visitors');
        let str = ``;
        data.forEach(card => {
            str  +=`
            <tr>
                <td>${card.id}</td>
                <td>${card.visitor}</td>
            </tr>
            `
        });
        table_visitors.html(str);
    }
}