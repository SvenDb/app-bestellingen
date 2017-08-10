$(function() {
    $("ul#onderverdelingen li.onderverdeling").click(function(e) {
        $(this).contents('ol').toggle(300);
    });
});
