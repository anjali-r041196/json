$(document).ready(function(){
    $("#get").click(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            success:function(data){
                
           
                   
                    var out=""
                
                for(var i in data){
                   
                    out  +=  "<div class='card'><div class='card-header'>name</div>"
                   
                        
                   out+="id: "+data[i].id+"<td>"
                   out+="<td>name: "+data[i].name+"</td>"
                   out+="<td>username:"+data[i].username+"</td>"
                   out+="<td>"+data[i].address.street+"</td>"
                   out+="<td>"+data[i].address.suite+"</td></tr>"
                         

                   out+="</div> <br> "                            
                   $(".result").html(out);

}


            }
        })
    })
})