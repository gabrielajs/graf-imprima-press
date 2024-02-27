$(function(){   
    var nav = $('#menu-fixo');   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 170) { 
            nav.addClass("menu-fixo");
            $('body').css('padding-top', 70);
            $("#hr-menu-fixo").remove();
        } else { 
            nav.removeClass("menu-fixo"); 
            $('body').css('padding-top', 0);
        } 
    });  
}); 

    
    
function adicionaOuRemoveClasseResponsiva() {
    var res = $('.s-res');
    if($(this).width() <= 480){
        res.addClass("slider-item-reveal");
    } else {
        res.removeClass('slider-item-reveal');
    }
}

window.addEventListener('resize', adicionaOuRemoveClasseResponsiva);
adicionaOuRemoveClasseResponsiva();



function removeClasseContainer() {
    var con = $('body');
    if($(this).width() <= 480){
        con.removeClass('container');
    }
}

window.addEventListener('resize', removeClasseContainer);
removeClasseContainer();