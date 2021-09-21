export default function (func){
    let btn = document.getElementById("change");
    let lan1 = document.getElementById("lan1");
    let lan2 = document.getElementById("lan2");
    let inp = document.getElementById("inp");
    let outp = document.getElementById("outp");
    btn.addEventListener("click", ()=>{
        let temp1 = lan1.selectedIndex;
        let temp2 = lan2.selectedIndex;
        let inp2 = inp.value;
        let outp2 = outp.value;
        inp.value = outp2;
        outp.value = inp2;
        lan1.selectedIndex = temp2;
        lan2.selectedIndex = temp1;
        if(document.getElementById("inp").value>2){
            func();
        }
    })
}

export function copy(){
    var text = document.getElementById("outp").value;
    navigator.clipboard.writeText(text);
}
export async function paste(){
    let text = await navigator.clipboard.readText();
    document.getElementById("inp").value = text;
}
