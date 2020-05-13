"use strict";
$(document).ready(function() {

    $('h1').click(function() {
        $(this).css('background-color', '#F08');
    });
    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    });
    $('li').hover(
        function() {
            $(this).css('color', '#f00');
        },
        function() {
            $(this).css('color', '#000');
        }
    );


});