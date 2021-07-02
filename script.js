$('.burger-block').click(function() {
    $('.sidebar-menu').toggleClass('open_sidebar')
})

function toggleModal(event) {
    // let modal_back = document.querySelector('.modal-background');
    // modal_back.style.display = 'flex';
    $('.modal-background').css('display', 'flex');
    $('.modal-close').click(function() {
        $('.modal-background').css('display', 'none')
    })
} 