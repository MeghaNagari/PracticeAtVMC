
$(document).on("click", "table.mytable button.editUser", function() {
	
alert("edit user clicked");


var email = $(this).parent().siblings("td.emailData").text();

		var request = $.ajax({
			url : "editUser",
			method : "GET",
			dataType : "json",

			data : {
				"email" : email
			}
						
		
		});
		request.done(function(response){
			
			alert("sending html request");
			$("table.mytable").hide();
			
			var req = $.ajax({
				url : "update",
				method : "GET",
				dataType : "html"
			});
			req.done(function(data){
				
		            $('#results').html(data);
		            $(".container").find("#email").val(response.email);
		            $(".container").find("#name").val(response.name);
		            $(".container").find("#password").val(response.password);
		            $(".container").find("#contact").val(response.contact);
			});
 	
			
			
			

			
		
			
			/* $this = $('#tr_' + objUser.id).find("td");
			$this.eq(1).html(objUser.id); */

			
		});
		/* $("table.mytable").hide();*/
});


