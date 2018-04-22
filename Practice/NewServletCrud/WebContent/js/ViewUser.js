$(document).on("click", "table.mytable button.viewUser", function() {
	
alert("View user clicked");


var email = $(this).parent().siblings("td.emailData").text();

		var requestData = $.ajax({
			url : "detailinfo",
			method : "GET",
			dataType : "json",

			data : {
				"email" : email
			}
						
		
		});
		
		requestData.done(function(response){
			
			alert("sending html request");
			$("table.mytable").hide();
			$("#btn").hide();
			
			var req = $.ajax({
				url : "viewUserHtml",
				method : "GET",
				dataType : "html"
			});
			req.done(function(data){
				
		            $('#results').html(data);
		            $(".container").find("#email").text(response.email);
		            $(".container").find("#name").text(response.name);
		            $(".container").find("#password").text(response.password);
		            $(".container").find("#contact").text(response.contact);
			});
 	
			
			
			

			
		
			
			/* $this = $('#tr_' + objUser.id).find("td");
			$this.eq(1).html(objUser.id); */

			
		});
		/* $("table.mytable").hide();*/
});


