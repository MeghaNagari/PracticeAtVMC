$(document).ready(function() {
		$('#updateKey').click(function() {
			$("#getKeyForm").hide();
			$("#sendForm").show();

		
		});
		
		$("#updateSendBtn").click(function(){
			
			var MyObject = {
					cacheKey:$("#cacheKey").val(), //Considering as getting from textBox
					requestPayload:$('#requestPayload').val(),
					expiresIn :$("#expiresIn").val(),
						method:$("#method").val()
		};	
			alert("sending update request")
			var vurl = "http://localhost:8882/cachingService/updateCacheKeyValue"

			var request = $.ajax({
				dataType: "json",
				url : vurl,
				method : "POST",
				data : JSON.stringify(MyObject)	
						
			});

			request.done(function(data) {
				alert("Successful,error code is "+data.errorCode+"Description is"+data.description);
			});

			request.fail(function(jqXHR, textStatus) {
				alert("Request failed: " + textStatus);
			});

			
		});

	});





