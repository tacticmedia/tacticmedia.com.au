$(document).foundation();

$(document).ready(function() {
    $('section').click(function(){
        $('section').removeClass('active');
        $(this).addClass('active');
    });

    console.log($('section.active').css('width'));
});

