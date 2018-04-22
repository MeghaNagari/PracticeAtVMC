$(document).ready(function() {
	$('#addKey').click(function() {
		alert("Add  keyclicked")
		$("#getKeyForm").hide();
		$("#sendForm").show();
	});

	$("#sendFormBtn").click(function() {
		var MyObject = {
			cacheKey : $("#cacheKey").val(), // Considering as getting from
												// textBox
			requestPayload : $('#requestPayload').val(),
			expiresIn : $("#expiresIn").val(),
			method : $("#method").val()
		};
		alert("sending request")
		var vurl = "http://localhost:8882/cachingService/addCacheKey"

		var request = $.ajax({
			dataType: "json",
			url : vurl,
			method : "POST",
			data : JSON.stringify(MyObject)

		});

		request.done(function(data) {
			alert("added successfully" + data.errorCode+"Description is"+data.description);

		});

		request.fail(function(jqXHR, textStatus) {
			alert("Request failed: " + textStatus);
		});

	});

});
