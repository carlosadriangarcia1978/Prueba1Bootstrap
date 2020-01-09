function abreVideo(){
	elemento = $('.video');
    videoid = ($(this).attr('url').split('?v='))[1];
    if (videoid.indexOf('&t') !== -1) {
        videoid = (videoid.split('&t'))[0];
    }
    console.log(videoid);
    seccion = $(this).parent().attr('id');
    cambiarVideo(elemento,videoid);
    /*
	$('html,body').animate({
        scrollTop: $(elemento).offset().top
    },'slow');
    */
}

function cambiarVideo(elemento,id){
    if($(elemento).attr('videoid') == id) return;
    $(elemento).attr('videoid',id);
    $(elemento).children('iframe').remove();
    $('<iframe width="100%" height="100%" frameborder="0" allowfullscreen></iframe>')
        .attr("src", "http://www.youtube.com/embed/" + id)
        .appendTo(elemento);
}

$('.flexslider').flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 3000,
    directionNav: false,
    controlNav: false,
});

$(".menu-link").click(function(e) {
    e.preventDefault();
    console.log('click');
    $(".menu-overlay").toggleClass("open");
    $(".menu").toggleClass("open");
    $(".menu-background").toggleClass("open");
	document.getElementById('alert').classList.remove('on');

});

$('.selectVideo li').on('click',abreVideo)
$('.place-card-large').css('display', 'none');