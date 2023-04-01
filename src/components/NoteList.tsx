import React, { useEffect, useState } from "react";
import { Note } from "~/models/Note";

const [note, setNote] = useState<Note[]>([]);

function NoteList(): JSX.Element {
  return (
    <div>
      <h1>Notes</h1>
    </div>
  );
}

export default NoteList;
