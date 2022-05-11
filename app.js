const yargs = require("yargs");
const notes = require("./notes");

//Adding version
yargs.version("1.0.0");
//Adding commands add, remove, list, read
//For adding note
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.addNotes(argv.title, argv.body),
});
//For removing note
yargs.command({
  command: "remove",
  describe: "Remove a note using title name provided",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.removeNotes(argv.title),
});
yargs.parse();
