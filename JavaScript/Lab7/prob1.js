var count =1000;
function validate(){
	var bqty=document.getElementById('bqty');
	var cqty=document.getElementById('cqty');
	var mqty=document.getElementById('mqty');
	var lqty=document.getElementById('lqty');

	if (bqty.value=="" && cqty.value==""&& mqty.value==""&& lqty.value==""){
		alert("No items selected");
		return false;
	}
	else{
		
		
		var a = Number(bqty.value)
		var b = Number(cqty.value)
		var c = Number(mqty.value)
		var d = Number(lqty.value)
		count = (a*20)+(b*30)+(c*40)+(d*50);
		var mywindow= window.open("","","width=500,height=400");
		mywindow.document.write("<h1 style=\"text-align: center\">Invoice</h1>")
		mywindow.document.write("<table border=\"2px\", style=\"background-color: white\"><tr><th>product</th><th>quantity</th><th>price</th><th>total</th></tr>");
		if (a>0){
		mywindow.document.write("<tr><td>Barbie Doll</td><td>"+a+"</td><td>20</td><td>"+a*20+"</td></tr>")
	}
	if (b>0){
		mywindow.document.write("<tr><td>Calculator</td><td>"+b+"</td><td>20</td><td>"+b*30+"</td></tr>")
	}
	if (c>0){
		mywindow.document.write("<tr><td>Mobile Phone</td><td>"+c+"</td><td>20</td><td>"+c*40+"</td></tr>")
	}
	if (d>0){
		mywindow.document.write("<tr><td>LG DVD</td><td>"+d+"</td><td>20</td><td>"+d*50+"</td></tr>")
	}

		
		mywindow.document.write("</table>");

	}
}