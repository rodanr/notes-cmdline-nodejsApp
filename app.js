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
//For listing note (lists all titles)
yargs.command({
  command: "list",
  describe: "Lists all the titles of existing notes",
  handler: () => notes.listNotes(),
});
yargs.command({
  command: "read",
  describe: "Read notes from the given title",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.readNotes(argv.title),
});
yargs.parse();
