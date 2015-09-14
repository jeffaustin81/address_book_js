$(document).ready(function() {
	$("add-address").click(function() {
		$("#new-addresses").append('<div class="new_address">' +
										'<div class="form-group">' +
											'<label for="new-street">Street></label>' + 
											'<input type="text" class="form-control new-street">' +
										'</div>' +
										'<div class="form-group">' +
											'<label for="new-city">City</label>' +
											'<input type="text" class="form-control new-city">' +
											'</div>' +
											'<div clas="form-group">' +
												'<label for="new-state">State</label>' +
												'<input type="text" class="form-control new-state">' +
											'</div>' +
										'</div>');
	
	});
	
	$("form#new-contact").submit(function(event) {
		event.preventDefault();
		
		var inputtedFirstName = $("input#new-first-name").val();
		var inputtedLastName = $("input#new-last-name").val();
		var inputtedAddress = $("input#new-address").val();
		var newContact = {firstName: inputtedFirstName, lastName: inputtedLastName, address: inputtedAddress};
		
		$("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");
		
		$("input#new-first-name").val("");
		$("input#new-last-name").val("");
		$("input#new-address").val("");
		
		$(".contact").last().click(function() {
			$("#show-contact").show();
			$("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
			$(".first-name").text(newContact.firstName);
			$(".last-name").text(newContact.lastName);
			$(".address").text(newContact.address);
		});
	});
});