const passwordbox=document.getElementById("password");
const copybtn=document.getElementById("copy");
const generatebtn=document.getElementById("generate");
const uppercases="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercases="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()_+~`|}{[]:;?><,./-=";
generatebtn.addEventListener("click",()=>{
    let password="";
    let allchar=uppercases+lowercases+numbers+symbols;
    for(let i=0;i<12;i++){
        let randomchar=allchar[Math.floor(Math.random()*allchar.length)];
        password+=randomchar;
    }
    passwordbox.value=password;
});

copybtn.addEventListener("click", () => {
    if (passwordbox.value) {
        passwordbox.select();
        document.execCommand("copy");
        alert("Password copied to clipboard");
    } else {
        alert("Generate a password first");
    }
});

