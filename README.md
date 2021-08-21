# JavaScript command line parsing

A seed program for processing files in JavaScript.

Covers:

- Process more than one file with file globbing
- Working with pipes (redirect stdin and stdout)
- Accepting command line options with file names
- Mutually exclusive command line options with a default option

Sources for this code and command-line programs in general:

- <https://nodejs.org/api/readline.html>
- <https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line>
- Discussion in [StackOverflow](https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js),
  especially about how **not** do it.
- [The command line parsing seed program](https://github.com/cgarbin/seed-javascript-command-line-arg-parsing)

## How to work with this program

- Install Node.js, if not yet installed
- Clone the repository
- `cd` to the repository directory
- Install all dependencies: `npm install`
- Install as a shell command with `npm install -g`
- During development, link to the working version with `npm link`

The program is now available as `seed-file-processing`.

See the `bin` section of [package.json](package.json) to modify the name used to invoke the script once installed.

## Examples

```bash
seed-file-processing file.txt --tolower
seed-file-processing seed-file-processing file.txt --toupper
seed-file-processing file.txt # defaults to '--tolower'
seed-file-processing *.txt --tolower # file globbing
seed-file-processing cat file.txt | thisscript.py # read from stdin
```

It's also meant to be installed as with node (`npm install -g`).


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
