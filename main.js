let mainName = document.getElementById('mainNm');
let surName = document.getElementById('surName');
let error = document.getElementById('errorName');

function nameCheck(){
    let mainName = document.getElementById('mainNm');
    let nameRegex = /^[a-zA-Z ]{2,30}$/;
    let checkIt = nameRegex.test(mainName.value);

    if (checkIt){
       error.innerHTML=""
    }
    else{
        error.innerHTML="kskjgkdg"
    }
}
