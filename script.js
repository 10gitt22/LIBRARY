
async function getDataFromFile(url){
    const resp = await fetch(url);
    let data = await resp.json();
    return data;
}

$('.burger-block').click(function() {
    $('.sidebar-menu').toggleClass('open_sidebar')
})

function toggleModal() {
    $('.modal-background').css('display', 'flex');
    $('.modal-close').click(function() {
        $('.modal-background').css('display', 'none')
    })
} 

if (!localStorage.getItem('book_data')){
    getDataFromFile('data/books.json').then(data => {
        localStorage.setItem('book_data', JSON.stringify(data));
    });
}
if (!localStorage.getItem('cards_data')){
    getDataFromFile('data/cards.json').then(data => {
        localStorage.setItem('cards_data', JSON.stringify(data));
    });
}
if (!localStorage.getItem('visitor_data')){
    getDataFromFile('data/visitors.json').then(data => {
        localStorage.setItem('visitor_data', JSON.stringify(data));
    });
}





