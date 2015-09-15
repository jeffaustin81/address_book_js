function Contact(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.addresses = [];
}

Contact.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
}

function Address(street, city, state, type) {
	this.type = type;
	this.street = street;
	this.city = city;
	this.state = state;
}

Address.prototype.fullAddress = function() {
	return this.street + ", " + this.city + ", " + this.state;
}

function resetFields() {
	$("input#new-first-name").val("");
	$("input#new-last-name").val("");
	$("input.new-address-type").val("");
	$("input.new-street").val("");
	$("input.new-city").val("");
	$("input.new-state").val("");
	$("div.new-address").not(":first").remove();
}

function newAddresses() {
	$("#new-addresses").append('<div class="new-address">' +
									'<div class="form-group">' +
										'<label for="new-type">Type of Address</label>' +
										'<input type="text" class="form-control new-address-type" required>' +
									'</div>' +
									'<div class="form-group">' +
										'<label for="new-street">Street</label>' +
										'<input type="text" class="form-control new-street" required>' +
									'</div>' +
									'<div class="form-group">' +
										'<label for="new-city">City</label>' +
										'<input type"text" class="form-control new-city" required>' +
									'</div>' +
									'<div class="form-group">' +
										'<label for="new-state">State</label>' +
										'<input type="text" class="form-control new-state" required onkeydown="keyPress(event)">' +
									'</div>' +
								'</div>');
}

function keyPress(event) {
	var x = event.keyCode;
	if(x === 9) {
		newAddresses();
	}
}

$(document).ready(function() {
	$("#add-address").click(function() {
		newAddresses();
	});

	$("form#new-contact").submit(function(event) {
		event.preventDefault();

		var inputtedFirstName = $("input#new-first-name").val();
		var inputtedLastName = $("input#new-last-name").val();

		var newContact = new Contact(inputtedFirstName, inputtedLastName);

		$(".new-address").each(function() {
			var inputtedType = $(this).find("input.new-address-type").val();
			var inputtedStreet = $(this).find("input.new-street").val();
			var inputtedCity = $(this).find("input.new-city").val();
			var inputtedState = $(this).find("input.new-state").val();
			// if (inputtedStreet !== '' || inputtedCity !== '' || inputtedState !== '') {
			// }
			var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedType);
			newContact.addresses.push(newAddress);
		});

		$("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

		$(".contact").last().click(function() {
			$("#show-contact").fadeIn();
			$("#show-contact").fadeOut(3333);
			$("#show-contact h2").text(newContact.fullName());
			$(".first-name").text(newContact.firstName);
			$(".last-name").text(newContact.lastName);

			$("ul#addresses").text("");
			newContact.addresses.forEach(function(address) {
				$("ul#addresses").append("<li>" + address.type + "</li><ul><li>" + address.fullAddress() + "</li></ul>");
			});
		});

			resetFields();

	});
});
