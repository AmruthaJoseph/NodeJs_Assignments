function validation(){
    var userName = document.getElementById("userName");
    var passWord = document.getElementById("passWord");
    if(userName.value.trim() == "" ){
        alert("User Name cannot be blank");     
    }else if(passWord.value.trim() == ""){
        alert("Password cannot be blank");
    }else if(passWord.value.length < 5){
        alert("Password should be minimum 5 character");
    }else if(userName.value.trim() == "amrutha" && passWord.value.trim() == "12345"){
        //alert("You have successfully logged in");
        window.location.href="./loginMsg.html"
    }else{
        alert("Wrong User name or Password");
    }
}

function clearData(){
    window.location.reload();
}