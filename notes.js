const fs = require("fs");
const chalk = require("chalk");
const getNotes = function () {
  //Return Notes
};
const addNotes = (title, body) => {
  //Adds a note
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
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
};
