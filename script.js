$('.burger-block').click(function() {
    $('.sidebar-menu').toggleClass('open_sidebar')
})

function toggleModal(event) {

    $('.modal-background').css('display', 'flex');
    $('.modal-close').click(function() {
        $('.modal-background').css('display', 'none')
    })
} 


