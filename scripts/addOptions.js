export default function (data){
    let box = document.querySelectorAll("select");
    let options = ``;
    options+=`<option value="" disabled selected hidden>< Select language ></option>`;
    data.forEach((d)=>{
        let option = `<option value="${d.code}">${d.name}</option>`;
        options+= option+" ";
    })
    box[1].innerHTML = options;
    options+=`<option value="auto" hidden>Auto Detect</option>`;
    box[0].innerHTML = options;
}