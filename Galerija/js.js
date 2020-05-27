$(document).ready(function(){
    $('#divSaMalimSlikama img').on({
        click: function(){
            var slikaURL = $(this).attr('src');
            $('#prvaSlika').fadeOut(300,function(){
                $(this).attr('src',slikaURL);
            }).fadeIn(300);
            $('#imenaSlika').text('slikaURL');
            $('p').text("Naziv " + slikaURL);
        }
    });
});