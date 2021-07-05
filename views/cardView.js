export default class CardView {
    constructor(container) {
        this.container = container;
    }

    printAllCards(data){
        // console.log(data);
        let table = $('#cards');
        let str = ``;
        data.forEach(card => {
            let returnBook = ``;
            if (card.return_date == null){
                returnBook = `<svg class="table_icon" id="return_img" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 438.483 438.483" style="enable-background:new 0 0 438.483 438.483;" xml:space="preserve"> <g> <g> <path d="M431.168,230.762c-23.552-75.776-98.304-127.488-187.904-129.024V13.162c0-4.096-3.584-7.68-7.68-7.68 c-1.536,0-3.072,0.512-4.608,1.536L3.136,171.882c-3.584,2.56-4.096,7.168-1.536,10.752c0.512,0.512,1.024,1.024,1.536,1.536 l227.84,163.84c3.584,2.56,8.192,1.536,10.752-1.536c1.024-1.536,1.536-3.072,1.536-4.608v-88.064 c55.296,0,101.888,26.112,118.272,65.536c13.824,33.792,2.56,70.144-30.208,100.352c-3.072,3.072-3.584,7.68-0.512,10.752 c1.536,1.536,3.584,2.56,5.632,2.56h6.144c1.536,0,3.072-0.512,4.096-1.536C421.952,381.802,454.208,304.49,431.168,230.762z"/> </g> </g> </svg>`
            } else {
                returnBook = `<div class="return_date">${card.return_date}</div>`
            }
            str += `
            <tr>
                <td>${card.id}</td>
                <td>${card.visitor}</td>
                <td>${card.book}</td>
                <td class="cell_center">${card.borrow_date}</td>
                <td class="return_btn cell_center" data-id="${card.id}">
                    ${returnBook}                   
                </td>
            </tr>    
            `
        });
        table.html(str);
    }

    generateAllVisitors(data){
        // console.log(data);
        let select = $('#visitor_select');
        let str =  ``;
        data.forEach(visitor => {
            str += `
            <option value="${visitor.name}">${visitor.name}</option>
            `
        })
        select.html(str);
    }

    generateAllBooks(data){
        // console.log(data);
        let select = $('#book_select');
        let str =  ``;
        data.forEach(book => {
            str += `
            <option value="${book.name}">${book.name}</option>
            `
        })
        select.html(str);
    }
}