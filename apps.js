let input = document.getElementById("inp");
let img = document.getElementById("img");

function hello(){
    
    let value = input.value;

    if(value){
        img.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`
        

    }
}
