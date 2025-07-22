$(document).ready(function () {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });

    $(document).on('click', '.tags-bar .nav-link', function () {
        $('.tags-bar .nav-link').removeClass('active'); // retire la classe active des autres
        $(this).addClass('active'); // ajoute la classe active au bouton cliqué
    });

    $(document).on('click', '.top-header .nav a', function (e) {
        $('.top-header .nav a').removeClass('active');
        $(this).addClass('active');
    });










});
