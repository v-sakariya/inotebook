import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "65e2111f88a2fa72aaad4dfc",
          "user": "65e0c14815d31d428d74b1f1",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "timestamp": "2024-03-01T17:32:15.197Z",
          "__v": 0
        },
        {
          "_id": "65e2111f88a2fa72aaad4dfe",
          "user": "65e0c14815d31d428d74b1f1",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "timestamp": "2024-03-01T17:32:15.747Z",
          "__v": 0
        },
        {
          "_id": "65e2112088a2fa72aaad4e00",
          "user": "65e0c14815d31d428d74b1f1",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "timestamp": "2024-03-01T17:32:16.531Z",
          "__v": 0
        },
        {
          "_id": "65e2112188a2fa72aaad4e02",
          "user": "65e0c14815d31d428d74b1f1",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "timestamp": "2024-03-01T17:32:17.633Z",
          "__v": 0
        }
      ]
      const [notes,setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;