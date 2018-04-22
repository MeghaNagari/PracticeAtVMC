

$(document).ready(function() {
		$('#delKey').click(function() {
		
					    $("#sendForm").hide();
			$("#getKeyForm").show();



		});
		
		$("#delKeyBtn").click(function(){
			alert("del key clicked")
						

			var getKeyObj = {
				cacheKey:$("#cKey").val(), //Considering as getting from textBox
					method:$("#mtd").val()
			};
			var vurl = "http://localhost:8882/cachingService/deleteCache"
				
			 var request = $.ajax({
					dataType: "json",
					url : vurl,
					method : "POST",
					data : JSON.stringify(getKeyObj)
				
				});

				request.done(function(data) {
					alert("Error code 0 means success:"+data.errorCode+"Description is"+data.description);
							
				});

				request.fail(function(jqXHR, textStatus) {
					alert("Request failed: " + textStatus);
				});

			
		})
		
			   
		

	});








