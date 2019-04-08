//JavaScript and jQuery
$(document).ready(function(){
	$("#output").hide();
	$("button").click(function(){
		var input_text = $("input").val();
		document.getElementById("output").innerHTML = "Text: " + input_text; //jQuery -- $("#output").html("text: " + input_text);
		$("#output").show();
	});
});