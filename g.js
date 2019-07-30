$(document).ready(function(){
    $("#get").click(function(){
        $.ajax({
            type:"GET",
            url:"data.json",
            success:function(data){
               var out="<table class='table'><thead><tr><th>name</th><th>dob</th><th>college</th><th>mobile</th></tr></thead>"
                   for(var i in data){
                   out+="<tr><td>"+data[i].name+"</td>"
                   out+="<td>"+data[i].dob+"</td>"
                   out+="<td>"+data[i].college+"</td>"
                   out+="<td>"+data[i].mobile+"</td></tr>"
}
out+="</table>"
$(".result").html(out);
            }
        })
    })
})