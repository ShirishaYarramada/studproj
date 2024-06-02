import { useState } from "react";

function Body1() {
  let [notes, setNotes] = useState([]);
  function updatNote() {
    let input = document.getElementById("input-name").value;
    setNotes([...notes, input]);
    document.getElementById("input-name").value = "";
    console.log(notes);
  }

  return (
    <div id="body">
      <h1>Notes: </h1>
      <ol>
        {notes.map((ele) => {
          return <li key={ele}>{ele}</li>;
        })}
      </ol>
      <br></br>
      <input type="text" id="input-name" />
      <button onClick={updatNote}>update notes</button>
    </div>
  );
}
export default Body1;
