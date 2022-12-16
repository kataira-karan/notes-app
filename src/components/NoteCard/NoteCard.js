import { React, useState, useEffect } from "react";
import { BiTrash, BiEdit } from "react-icons/bi";
// import "../Home/Home.css";
import "./NoteCardStyle.css";

const NoteCard = (props) => {
  const { note, saveNotes, deleteNote, editNote } = props;

  const [noteDetails, setnoteDetails] = useState({
    title: note.title != "" ? note.title : "",
    text: note.text != "" ? note.text : "",
  });

  const [selectedNote, setselectedNote] = useState(note);

  const setTitle = (e) => {
    // If the length exceed
    if (e.target.value.length > 15) {
      alert("Title length must be < 20");
      return;
    }
    setnoteDetails({ ...noteDetails, title: e.target.value });
  };
  const setText = (e) => {
    if (e.target.value.length > 300) {
      alert("Text length must be < 300");
      return;
    }
    setnoteDetails({ ...noteDetails, text: e.target.value });
  };

  // const editNote = (e) => {
  //   console.log("editing");
  //   return { ...note, canUpdateNote: true };
  // };
  useEffect(() => {
    console.log(note);
  }, [selectedNote, note]);

  return (
    <div className="note-card">
      {/* <textarea placeholder="Add notes here"></textarea> */}

      {note.canUpdateNote ? (
        // add limited text number

        <div className="title-text-field-seciton">
          <input
            type="text"
            className="add-title-inputfield"
            placeholder="Add Title"
            value={noteDetails.title}
            onChange={(e) => setTitle(e)}
          ></input>

          <span className="text-length-validator">
            {" "}
            {noteDetails.title.length}/15
          </span>
        </div>
      ) : (
        // add limited text number
        <div className="note-card-header-section">
          <span className="note-header"> {note.title} </span>

          <BiEdit onClick={() => editNote(note.id)}></BiEdit>
        </div>
      )}

      {note.canUpdateNote ? (
        <div>
          {/* to display different types of input options */}
          {/* <div className="note-body"> Press / for the options </div> */}

          <div>
            <textarea
              className="add-note-field"
              type="text"
              value={noteDetails.text}
              onChange={(e) => setText(e)}
              placeholder="Add Note here.........."
              rows={12}
            />

            <span className="text-length-validator">
              {" "}
              {noteDetails.text.length}/300{" "}
            </span>
          </div>
        </div>
      ) : (
        <div className="note-body">{note.text}</div>
      )}

      {note.canUpdateNote ? (
        <button
          className="save-note-button"
          onClick={(e) => saveNotes(e, note.id, noteDetails)}
        >
          {" "}
          Save{" "}
        </button>
      ) : (
        <div className="footer note-card-header-section">
          <span className="footer-note-header"> {note.date} </span>

          <BiTrash
            className="delete-icon"
            onClick={() => deleteNote(note.id)}
          ></BiTrash>
        </div>
      )}
    </div>
  );
};

export default NoteCard;
