console.log('My JavaScript has been loaded...');
$(document).ready(function () {
    $("#flip").click(function () {
    $("#panel").slideToggle(5000);
    });
    $("#flip2").click(function () {
        $("#panel2").slideToggle(5000);
        });
});



