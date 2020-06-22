let x = document.getElementById("date");
let todaydate = () => {
    let a = new Date();
    let y = a.getDay() + "/" + a.getMonth() + "/" + a.getFullYear();
    x.innerHTML = y.toString();
} 

let clear = () => {
    while(x.firstChild){
        x.removeChild(div.firstChild);
    }
    
}