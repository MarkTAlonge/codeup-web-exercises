"use strict";
$(document).ready(function() {
    $('dd').addClass('invisible');

});
    $('dt').click(function () {
        $(this).toggleClass('invisible');
    });

    $('#highlight').click(function () {
        $('ul').each(function () {
            $(this).children().last().css("background-color", 'yellow');
        });
    });

        $('h3').click(function () {
            $(this).next().children().css('font-weight', 'bold')
        });

        $('li').click(function () {
            $(this).parent().children().first().css('color', 'blue');

        });



