$(document).ready( function() {

    $('#likes').click(function(event){
        var dealid;
        dealid = $(this).attr("data-dealid");
        $.get('/rango/like/', {deal_id: dealid }, function(data){
            $('#like_count').html(data);
                $('#likes').hide();
        });
    });

});