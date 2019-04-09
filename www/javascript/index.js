//JavaScript and jQuery
$(document).ready(function(){
	//Initiation
	$("#pop").hide();
	
	
	
	//Button clicks
	$("#add_window").click(function(){
		$("#pop").show();
	});
	
	$("#add").click(function(){
		var newText = $("input").val();
		$("#pop").hide();
		$("#options").append('<li>'+newText+'</li>');
	});
});