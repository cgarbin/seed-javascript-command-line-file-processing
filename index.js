#!/usr/bin/env node

/**
 * A seed to process files in JavaScript.
 *
 * Covers:
 *
 * - Process more than one file with file globbing
 * - Working with pipes (redirect stdin and stdout)
 * - Accepting command line options with file names
 * - Mutually exclusive command line options with a default option
 *
 * Sources for this code and command-line programs in general:
 *
 * - https://nodejs.org/api/readline.html
 * - https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
 * - Discussion in https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js,
 *   especially about how **not** do it.
 * - The command line parsing seed program in
 *   https://github.com/cgarbin/seed-javascript-command-line-arg-parsing
 *
 * Examples:
 *  - file.txt --tolower
 *  - file.txt --toupper
 *  - file.txt (defaults to '--tolower')
 *  - *.txt --tolower  (file globbing)
 *  - cat file.txt | thisscript (read from stdin)
 *
 * Some extended chars to test UTF-8 handling against this source code:
 *     á Á ñ Ñ - çãü
 */
"use strict";

const program = require("commander");
const readline = require("readline");
const fs = require("fs");

let files = ["-"]; // Read from stdin if no argument given

program.version("0.1.0")
  .description("Converts files to all upper or all lower case.");

program.arguments("[files...]")
  .option("-l, --tolower", "Convert to lower case (default)")
  .option("-u, --toupper", "Convert to upper case")
  .option("-v, --verbose", "Verbose mode");

program.action(function (f) {
  files = f;
});

program.parse();
const options = program.opts();

// Parameter validation: both options specified
if (options.tolower && options.toupper) {
  console.warn("Ignoring --toupper, using --tolower");
  options.toupper = false;
}

// Parameter validation: no option specified (use default)
if (!options.tolower && !options.toupper) {
  options.tolower = true;
}

const operation = options.tolower
  ? function (line) {
    return line.toLowerCase();
  }
  : function (line) {
    return line.toUpperCase();
  };

files.forEach(file => {
  if (options.verbose) {
    console.warn(`Processing file ${file}`);
  }

  const rl = readline.createInterface({
    input: file === "-" ? process.stdin : fs.createReadStream(file),
    crlfDelay: Infinity
  });
  rl.input.on("error", error => {
    // Print human-readable message
    // Note that try/catch doesn't work for this case
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
    console.error(error.message);
  });
  rl.on("line", line => {
    console.log(operation(line));
  });
});
