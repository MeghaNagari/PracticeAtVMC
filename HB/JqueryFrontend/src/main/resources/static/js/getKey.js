$(document)
		.ready(
				function() {
					$('#getKey').click(function() {

						$("#sendForm").hide();
						$("#getKeyForm").show();

					});

					$("#getKeyBtn")
							.click(
									function() {
										alert("get key clicked")

										var getKeyObj = {
											cacheKey : $("#cKey").val(), // Considering
											method : $("#mtd").val()
										};
										var vurl = "http://localhost:8882/cachingService/getCacheKey"

										var request = $.ajax({
											dataType: "json",
											url : vurl,
											method : "POST",
											data : JSON.stringify(getKeyObj)

										});

										request
												.done(function(data) {
													alert("Key :"+data.key+" Value : "+data.value+" Error code:"+data.errorCode+" Description is"+data.description);
															$("p").text(data.value);
													$("#disp")
															.html(
																	"<h4>KEY ="
																			+ data.key
																			+ "</h4><br><h4>Value ="
																			+ data.value
																			+ "</h4><br><h4>Description ="
																			+ data.description
																			+ "</h4>");

												});

										request
												.fail(function(jqXHR,
														textStatus) {
													alert("Request failed: "
															+ textStatus);
												});

									})

				});
