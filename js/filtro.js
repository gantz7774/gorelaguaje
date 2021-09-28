$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let conocenos = $('#Conocenos').offset().top,       //agregado 15/09/21
        equipo = $('#equipo').offset().top,
        //servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        publicacion = $('#publicacion').offset().top,
        ubicacion = $('#ubicacion').offset().top;


    window.addEventListener('resize', function(){
        let conocenos = $('#Conocenos').offset().top,   //agregado 15/09/21
        equipo = $('#equipo').offset().top,
        //servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        publicacion = $('#publicacion').offset().top,
        ubicacion = $('#ubicacion').offset().top;
        
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-conocenos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: conocenos -100
        },600);
    });

    $('#enlace-equipo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo -100
        },600);
    });

    /*$('#enlace-servicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -100
        },600);
    });*/

    $('#enlace-trabajo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo -100
        },600);
    });

    $('#enlace-publicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: publicacion -100
        },600);
    });


    $('#enlace-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion -100
        },600);
    });
    

});