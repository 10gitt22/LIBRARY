export default class StatisticView {
    constructor(container_books, container_visitors) {
        this.container_books = container_books;
        this.container_visitors = container_visitors;
    }

    printTopBooks(data) {
        let table_books = $('#stat-books');
        let str = ``;
        let num = 0;
        data.forEach(card => {
            num += 1
            str  +=`
            <tr class="place${num}">
                <td>${num}</td>
                <td>${card.book}</td>
            </tr>
            `
        });
        table_books.html(str);
    }

    printTopVisitors(data) {
        let table_visitors = $('#stat-visitors');
        let str = ``;
        let num = 0;
        data.forEach(card => {
            num += 1
            str  +=`
            <tr class="place${num}">
                <td>${num}</td>
                <td>${card.visitor}</td>
            </tr>
            `
        });
        table_visitors.html(str);
    }
}