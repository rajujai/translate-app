function exchange(func){
    let btn = document.getElementById("change");
    let lan1 = document.getElementById("lan1");
    let lan2 = document.getElementById("lan2");
    btn.addEventListener("click", ()=>{
        let temp1 = lan1.selectedIndex;
        let temp2 = lan2.selectedIndex;
        lan1.selectedIndex = temp2;
        lan2.selectedIndex = temp1;
        if(document.getElementById("inp").value>2){
            func();
        }
    })
}

function copy(){
    let text = document.getElementById("outp");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    console.log(text.value);
}

export {exchange, copy}