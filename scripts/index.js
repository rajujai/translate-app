
    import {box1,box2} from "./components/input-box.js";
    import getData from "./scripts/getData.js";
    import languages from "./scripts/addOptions.js";
    import translate from "./scripts/translate.js";
    import {appendData as search} from "./scripts/translate.js";
    import exchange from "./scripts/btns.js";
    import {copy,paste} from "./scripts/btns.js";
    
    document.getElementById("input-box").innerHTML = box1();
    document.getElementById("output-box").innerHTML = box2();

    getData("https://libretranslate.de/languages").then((data)=>{
        languages(data);
    });
    exchange(search);
    translate();
    document.getElementById("copy").addEventListener("click", ()=>{
        copy();
    });
    document.getElementById("paste").addEventListener("click", ()=>{
        paste();
        search();
    });
    document.querySelector("body").addEventListener("click", ()=>{
        search();
    })
