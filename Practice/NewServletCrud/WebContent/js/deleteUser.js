
	$(document).on("click", "table.mytable button.delUser", function() {
		alert("button clicked");
		//var email = $('table.mytable tr:nth-child() td:nth-child(2)').text();

		var email = $(this).parent().siblings("td.emailData").text();
		alert("email is" + email);

		//var email=$("td:eq(1)").text();

		var request = $.ajax({
			url : "deleteUser",
			method : "GET",
			data : {
				"email" : email
			}
		});

		$(this).parents("tr").remove();
	});




