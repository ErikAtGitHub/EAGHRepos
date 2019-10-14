/*
Creator: Ville Peltonen
Date created: 10/11/2019
Date last modified: 10/13/2019
*/

function validateItems() {
	var name = document.forms["contactForm"]["name"].value;
	var email = document.forms["contactForm"]["email"].value;
	var phone = document.forms["contactForm"]["phone"].value;
	var option1 = document.getElementsByName("customer");
	var option2 = document.getElementsByName("contact");

	if (name == "") {
		alert("Name must be entered.");
		document.forms["contactForm"]["name"].focus();
		return false;
	}

	if (email == "") {
		alert("Email address must be entered.");
		document.forms["contactForm"]["email"].focus();
		return false;
	}

	if (phone == "") {
		alert("Phone number must be entered.");
		document.forms["contactForm"]["phone"].focus();
		return false;
	}

	if (!(option1[0].checked || option1[1].checked)) {
		alert("Please select Yes or No.");
		document.forms["contactForm"]["choice1"].focus();
		return false;
	}

	if (!(option2[0].checked || option2[1].checked || option2[2].checked || option2[3].checked || option2[4].checked)) {
		alert("Please select the best day(s) to contact you.");
		document.forms["contactForm"]["M"].focus();
		return false;
	}


	alert("Thank you! We'll get back to you within 24 hours.");
	
	document.forms["contactForm"]["name"].value = "";
	document.forms["contactForm"]["email"].value = "";
	document.forms["contactForm"]["phone"].value = "";
	document.getElementsByType("radio").checked = false;
	document.getElementsByType("checkbox").checked = false;
	
	return false;
}


