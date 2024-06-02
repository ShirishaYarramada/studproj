import { useState } from "react";

function Body(){
    let [text,setText] = useState('shiva');
    function updateText(){
        let textInput = document.getElementById("text-input").value
        console.log(textInput)
        setText(textInput);
    }

    return (<div id="body">
        text = {text}
        <br></br>
        <input type="text" id="text-input"/>
        <button onClick={()=>updateText()}>setText</button>
    </div>)
}
export default Body