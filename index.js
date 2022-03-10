function validation(){
    var name = document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var country = document.getElementById('exampleFormControlSelect1').value;
    var department = document.getElementById('department').value;
    var error_message = document.getElementById('error_message');
    var text;
    error_message.style.padding ="10px";
   
  
if(name.length<5){
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
}

if(email.indexOf('@')==-1 ||email.length<6){
    text = "Please Enter Valid Email id";
    error_message.innerHTML = text;
    return false;
}

if(phone==""){
    text = "Please Enter Phone Number";
    error_message.innerHTML = text;
    return false;
}

if(isNaN(phone)){
    text = "Only digits are allowed";
    error_message.innerHTML = text;
    return false;
}
if(country=="Select a Country"){
    text = "Please select the country";
    error_message.innerHTML = text;
    return false;
}
if(department=="Department"){
    text = "Please select the department";
    error_message.innerHTML = text;
    return false;
}
     text = "submitted sucessfully";
    error_message.innerHTML = text;
return true;
}