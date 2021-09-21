function box1(){
    return `<div class="container">
        <div class="header">
            Translate from
            <select name="form" id="lan1">
            <option value="" disabled selected>Select language</option>
            </select>
            <span id="paste">
                <img src="https://i.ibb.co/nL2M9mn/paste.png" alt="Paste"/>
            </span>
        </div>
        <div class="input">
            <textarea type="text" placeholder="Translate this..." id="inp"></textarea>
        </div>
    </div>`;
}
function box2(){
    return `<div class="container">
        <div class="header">
            Translate to
            <select name="form" id="lan2">
                <option value="" disabled selected>Select language</option>
            </select>
            <span id="copy">
                <img src="https://i.ibb.co/7YrySrd/files-copy-interface-symbol.png" alt="Copy"/>
            </span>
        </div>
        <div class="input">
            <textarea type="text" placeholder="Translated..." id="outp" disabled></textarea>
        </div>
    </div>`;
}
export {box1,box2};