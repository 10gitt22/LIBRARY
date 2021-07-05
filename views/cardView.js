export default class CardView {
    constructor(container) {
        this.container = container;
    }

    printAllCards(data){
        console.log(data);
        let table = $('#cards');
        let str = ``;
        data.forEach(card => {
            str += `
            <tr>
                <td>${card.id}</td>
                <td>${card.visitor}</td>
                <td>${card.book}</td>
                <td>${card.borrow_date}</td>
                <td class="return_btn" data-id="${card.id}">
                    <svg class="table_icon" id="return_img" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve"> <g> <g> <path d="M453.992,53.777L408.736,8.513c-9.372-9.369-24.564-9.369-33.936,0L66.576,316.737c-0.08,0.08-0.104,0.192-0.176,0.272 c-0.56,0.606-1.019,1.297-1.36,2.048c-0.095,0.174-0.18,0.353-0.256,0.536c-0.04,0.096-0.104,0.176-0.136,0.272L30.712,421.713 c-1.371,4.2,0.922,8.717,5.122,10.088c1.613,0.527,3.353,0.527,4.966,0l101.816-33.936c0.096,0,0.176-0.096,0.272-0.136 c0.183-0.076,0.362-0.161,0.536-0.256c0.751-0.341,1.442-0.8,2.048-1.36c0.08-0.072,0.192-0.096,0.272-0.176L453.992,87.713 C463.361,78.341,463.361,63.149,453.992,53.777z M50.944,411.569l24.8-74.36l49.6,49.6L50.944,411.569z M140.12,378.969 l-56.576-56.576L335.2,70.745l22.632,22.632L208,243.201c-3.178,3.069-3.266,8.134-0.196,11.312 c3.069,3.178,8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196l149.824-149.824l22.632,22.624L140.12,378.969z M442.68,76.401l-39.6,39.608l-28.264-28.272l-28.312-28.304l39.608-39.6c3.124-3.123,8.188-3.123,11.312,0l45.248,45.256 C445.797,68.211,445.801,73.275,442.68,76.401z"/> </g> </g> <g> <g> <path d="M472,462.513H8c-4.418,0-8,3.582-8,8s3.582,8,8,8h464c4.418,0,8-3.582,8-8S476.418,462.513,472,462.513z"/> </g> </g> <g> <g> <path d="M472,414.513H232c-4.418,0-8,3.582-8,8s3.582,8,8,8h240c4.418,0,8-3.582,8-8S476.418,414.513,472,414.513z"/> </g> </g> <g> <g> <path d="M472,358.513H264c-4.418,0-8,3.582-8,8s3.582,8,8,8h208c4.418,0,8-3.582,8-8S476.418,358.513,472,358.513z"/> </g> </g> </svg>
                    <div class="return_date" style="display:none"></div>
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