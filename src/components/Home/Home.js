import { React, useState, useEffect } from "react";
import "./Home.css";
import { GiTrashCan } from "react-icons/gi";
import { BiTrash, BiEdit } from "react-icons/bi";
import NoteCard from "../NoteCard/NoteCard";

const Home = () => {
  const [allNotes, setallNotes] = useState(
    JSON.parse(localStorage.getItem("notes"))
      ? JSON.parse(localStorage.getItem("notes"))
      : [
          {
            id: "5",
            title: "Title",
            text: "this is the new note",
            date: "12-09-2022",
            canUpdateNote: false,
          },
        ]
  );

  const [isEditingModeOn, setisEditingModeOn] = useState(false);

  const saveNotes = (e, id, selectedNote) => {
    e.preventDefault();
    console.log(selectedNote);

    if (selectedNote.title === "" || selectedNote.text === "") {
      alert("Please add title and note text");
      return;
    }

    let newNotes = [...allNotes];

    newNotes.map((n) => {
      console.log(n);
      if (n.id === id) {
        n.title = selectedNote.title;
        n.text = selectedNote.text;
        n.canUpdateNote = false;
      }
    });

    setallNotes(newNotes);
    setisEditingModeOn(false);
  };

  const addNewNote = () => {
    setisEditingModeOn(true);

    if (isEditingModeOn) {
      alert("Please save the current not to create new one!");
      return;
    }

    setisEditingModeOn(true);

    setallNotes([
      ...allNotes,
      {
        id: Date.now(),
        title: "",
        text: "",
        date: new Date().toJSON().slice(0, 10),
        canUpdateNote: true,
      },
    ]);
  };

  const deleteNote = (id) => {
    console.log(`deleting ${id}`);

    let confirmDelete = window.confirm("Are you sure you want to delete" + id);

    if (confirmDelete) {
      let tempNotesArray = [...allNotes];

      tempNotesArray.map((note, i) => {
        if (note.id === id) {
          tempNotesArray.splice(i, 1);
        }
        setallNotes(tempNotesArray);
        return;
      });
    }
  };

  const editNote = (id) => {
    console.log("editing");

    if (!isEditingModeOn) {
      setisEditingModeOn(true);
      const tempNotes = [...allNotes];

      tempNotes.map((note, i) => {
        if (note.id === id) {
          note.canUpdateNote = true;
          return;
        }
      });

      setallNotes(tempNotes);
      return;
    }

    alert("Please save the note to continue.");
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(allNotes));
  }, [allNotes]);

  return (
    <div className="container">
      <div className="home-banner">
        <img
          className="home-banner-image"
          src="https://www.appsntips.com/content/images/2022/05/20-Best-Note-Taking-Apps-You-Should-Use-to-Take-Good-Notes-in-2022.jpg"
        ></img>
      </div>

      <div className="notes-container">
        <div className="notes">
          {allNotes.length != 0 ? (
            allNotes.map((note) => {
              return (
                <NoteCard
                  key={note.id}
                  note={note}
                  saveNotes={saveNotes}
                  deleteNote={deleteNote}
                  editNote={editNote}
                ></NoteCard>
              );
            })
          ) : (
            <h1 className="please-add-note">
              Click on Plus Button To Add Note
            </h1>
          )}
        </div>
      </div>

      <button className="add-new-note-button" onClick={addNewNote}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Home;
