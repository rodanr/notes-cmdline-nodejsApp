const fs = require("fs");
const chalk = require("chalk");
const readNotes = function (title) {
  notes = loadNotes();
  const noteFound = notes.find((note) => note.title === title);
  if (!noteFound) {
    console.log(
      chalk.red.inverse.bold(
        "Note with the title: " + title + " doesn't exists"
      )
    );
  } else {
    console.log(
      "Title: " + chalk.inverse(noteFound.title) + "\nBody: " + noteFound.body
    );
  }
};
const addNotes = (title, body) => {
  //Adds a note
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen.bold("New Note Added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken"));
  }
};
const removeNotes = function (title) {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);
  if (newNotes.length === notes.length) {
    console.log(chalk.red.inverse.bold("No any note with the title: " + title));
  } else {
    saveNotes(newNotes);
    console.log(
      chalk.bgGreen.bold("Successfully deleted note with the title: " + title)
    );
  }
};
const listNotes = () => {
  notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.red.inverse.bold("Empty Note!"));
  } else {
    notes.forEach((note) => {
      console.log(note.title);
    });
  }
};
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
