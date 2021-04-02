function orderplaced(){
    qty1=document.getElementById('qty1').value;
    qty2=document.getElementById('qty2').value;
    qty3=document.getElementById('qty3').value;
    qty4=document.getElementById('qty4').value;
    
    if(qty1=="" && qty2=="" && qty3=="" && qty4==""){
        alert("Enter some product quantity to order");
    }
    else{
        window.open("subprob1.html", "","width=500,height=400");
    }
}
function billing(){
    var q1=document.getElementById('q1');
    var q2=document.getElementById('q2');
    var q3=document.getElementById('q3');
    var q4=document.getElementById('q4');
    q1.value=qty1;
    q2.value=qty2;
    q3.value=qty3;
    q4.value=qty4;
}