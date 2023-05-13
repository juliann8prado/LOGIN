function login(){
    var user,password
    user=document.getElementById("usuario").value;
    password=document.getElementById("contrasenia").value;
    if(user == "julian8prado" && password== "BJAHP"){
        window.location="pagina.html";
    }
    else{
          alert("Datos Incorrectos")
    }
}