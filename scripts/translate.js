
var timerId;
async function translate (){
    let query = document.getElementById("inp").value;
    let source = document.getElementById("lan1").value;
    let target = document.getElementById("lan2").value;
    if(source==""){
        document.getElementById("lan1").selectedIndex = 18;
    }
    if(target==""){
        document.getElementById("lan2").selectedIndex = 6;
    }
    try{
        let res = await fetch("https://libretranslate.de/translate", {
	        method: "POST",
	        body: JSON.stringify({
	        	q: query,
	        	source: source,
	        	target: target
	        }),
	        headers: { "Content-Type": "application/json" }
        });
        let data = await res.json();
        return data;
    }catch (err){
        console.log(err);
    }
}


export async function appendData(){
    let {translatedText} = await translate();
    let output = document.getElementById("outp");
    output.value = translatedText;
}
function debounce(fun, delay){
    if(timerId)
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        fun();
    }, delay);
}

export default function (){
    let btn = document.getElementById("inp");
    btn.addEventListener("input", ()=>{
        if(btn.value.length>1){
            debounce(appendData, 300);
        }
    });
}