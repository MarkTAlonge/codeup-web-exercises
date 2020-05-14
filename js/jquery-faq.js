"use strict";
$(document).ready(function() {
$('dd').addClass('invisible');
});

$('dt').click(function(){
    $(this).toggleClass('invisible')
});