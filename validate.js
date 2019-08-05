function validate()
{
	if( document.myForm.Name.value == "" )
	{
		alert( "Please provide your name." );
		document.myForm.Name.focus() ;
		return false;
	}

	if( document.myForm.EMail.value == "" ){
		alert( "Please provide your Email." );
		var validEmail = validateEmail();
		document.myForm.EMail.focus() ;
		return false;
	}

	else{
		//If email is not empty; Check if it is valid email or not
		var validEmail = validateEmail();
		if(!validEmail)
		{
			alert("Please enter correct email ID.")
			document.myForm.EMail.focus() ;
			return false;
		}
	}

	if( document.myForm.Zip.value == "" ||
	isNaN( document.myForm.Zip.value ) ||
	document.myForm.Zip.value.length != 5 )
	{
		alert( "Please provide a zip in the format #####." );
		document.myForm.Zip.focus() ;
		return false;
	}

	if( document.myForm.Country.value == "-1" )
	{
	alert( "Please provide your country." );
	return false;
	}

	return true ;
}


function validateEmail()
{
	var emailID = document.myForm.EMail.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");
	if (atpos < 1 || ( dotpos - atpos < 2 ))
	{
		return false;
	}

	return true;
}
