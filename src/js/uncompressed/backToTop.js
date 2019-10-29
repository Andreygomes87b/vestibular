// This one is the responsible for hiding on scroll the text message additional of the whatsapp button
// $(document).ready(function(){
//     $(window).scroll(function () {
//            if ($(this).scrollTop() < 50) {
//                $('#whats2').fadeIn();                
//            } else {
//                $('#whats2').fadeOut();                
//            }
//        });
//     });

$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
                $('#whats').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
                $('#whats').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });        
        // $('#back-to-top').tooltip('show');
    
});