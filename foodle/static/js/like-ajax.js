function like(dealid, id, id2, pref) {
  $.get('/'+pref+'/', {deal_id: dealid }, function(data){

    if($(id2).value=="like") {
    $(id2).html('remove '+pref);
    }
    else {
      $(id2).html(pref);
    }

    $(id).html("likes : " + data);
  });
}