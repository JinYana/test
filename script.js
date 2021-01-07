



var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=d7632121edc0f177016ed0c3b58ed031c1609581596");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
var test ="HLM"

fetch("https://api.data.gov.sg/v1/transport/carpark-availability", requestOptions)
  .then(response => response.json())
  .then(function(result){
    for (let i = 0; i < result.items[0].carpark_data.length; i++) {
      let short = result.items[0].carpark_data[i]
      if(short.carpark_number == test){
        console.log(short.carpark_info[0])
      }
      
    }
  })

  
  $.getJSON("csvjson.json", function(data){
    var items = []
    $.each( data, function( key, val ) {
      
    });
    console.log(data)
    $('#search').keyup(function(){
      var searchField = $(this).val();
    if(searchField === '')  {
    $('#filter-records').html('');
    return;
    }
    
      var regex = new RegExp(searchField, "i");
      var output = '<div class="row">';
      
    $.each(data, function(key, val){
    
      if ((val.address.search(regex) != -1) || (val.address.search(regex) != -1)) {
        output += '<h5>' + val.address + '</h5>';
        output += '</div><div class="row">'
        }
        
    
    });
    output += '</div>';
    $('#filter-records').html(output);
    });
  })
 
  