$(document).ready(function () {
    $(".btn-like").on("click", function (event) {
        let dealid = $(this).attr("data-dealid");
        $.get("/like/", {"deal_id": dealid}, function (data, status) {
            $(this).hide();
        });
     });
});