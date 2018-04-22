
	$(document).ready(function() {
		$('#btn').click(function() {

			alert("display user clicked")
			var request = $.ajax({
				url : "dispUser",
				method : "GET",

				dataType : "json"
			});

			request.done(function(data) {
				/*   $( "p" ).text(JSON.stringify(msg,['userId','title'])); */

				var source = $("#some-template").html();
				var template = Handlebars.compile(source);
				var users = {
					jsonObjects : data
				};
				$("p").html(template(users));
				
				

				/*
				
				
				Adding in a list
				
				var jsonObj;
				var i;
				for(i=0;i<data.length;i++)
					{
					jsonObj=data[i];
					 $( "#uladd" ).append("<li>"+jsonObj.id+"</li>");
					}
				  
				/*   $( "p" ).text(JSON.parse(data[i])); */

			});

			request.fail(function(jqXHR, textStatus) {
				alert("Request failed: " + textStatus);
			});

		});

	});

