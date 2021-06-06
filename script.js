// oops where is password :) ??





function clicked(){
    let password=document.getElementById('input')
if (password.value!==atob('aGFja2VyMTIz')){
    alert('incorrect password')
    localStorage.setItem("pass","TE9M")
}
else{
    localStorage.setItem("pass","Z29hbA==")
    window.location.href = atob("Y29ycmVjdC5odG1s");
}
    

    
}
let btn=document.getElementById("btn");
btn.addEventListener("click",clicked)

