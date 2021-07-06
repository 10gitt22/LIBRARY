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
                returnBook = `<svg class="table_icon" id="return_img" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.862 477.862" style="enable-background:new 0 0 477.862 477.862;" xml:space="preserve"> <g> <g> <path d="M187.722,102.856V17.062C187.719,7.636,180.076-0.003,170.65,0c-4.834,0.001-9.44,2.053-12.676,5.644L4.375,176.311 c-5.617,6.256-5.842,15.67-0.529,22.187l153.6,187.733c5.968,7.295,16.72,8.371,24.016,2.403c3.952-3.233,6.249-8.066,6.26-13.172 v-85.043c134.827,4.386,218.965,62.02,256.888,175.787c2.326,6.96,8.841,11.653,16.179,11.656c0.92,0.003,1.84-0.072,2.748-0.222 c8.256-1.347,14.319-8.479,14.319-16.845C477.855,259.818,356.87,112.174,187.722,102.856z M170.655,255.995 c-9.426,0-17.067,7.641-17.067,17.067v54.613L39.532,188.257l114.057-126.72v57.924c0,9.426,7.641,17.067,17.067,17.067 c134.144,0,234.53,92.826,264.124,234.462C379.841,294.6,291.385,255.995,170.655,255.995z"/> </g> </g> </svg>`
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