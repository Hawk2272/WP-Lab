function validateForm() {
  let x = document.forms["form1"]["fname"].value;
  let y = document.forms["form1"]["lname"].value;
  let z = document.forms["form1"]["email"].value;
  
  if (x =="" && y == "" && z == "") {
    alert("The form must be filled out");
    return false;
  }
  
  if (x == "") {
    alert("First Name must be filled out");
    return false;
  } else if (y == "") {
    alert("Last Name must be filled out");
    return false;
  } else if (z == "") {
    alert("Email must be filled out");
    return false;
  }  
}