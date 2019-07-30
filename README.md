# seed-command-line-arg-parsing

A seed for processing files in JavaScript.

Covers:

- Process more than one file with file globbing
- Working with pipes (redirect stdin and stdout)
- Accepting command line options with file names
- Mutually exclusive command line options with a default option

Sources for this code and command-line programs in general:

- https://nodejs.org/api/readline.html
- https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
- Discussion in [StackOverflow](https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js),
  especially about how **not** do it.
- [The command line parsing seed program](https://github.com/cgarbin/seed-javascript-command-line-arg-parsing)

Examples:

```
file.txt --tolower
file.txt --toupper
file.txt (defaults to '--tolower')
*.txt --tolower  (file globbing)
cat file.txt | thisscript.py (read from stdin)
```

It's also meant to be installed as with node (`npm install -g`). See the `bin` section
of [package.json](package.json) for the name used to invoke the script once installed.

# How to work with this program

- Install node, if not yet installed
- Clone git repository
- `cd` to the repository directory
- Install all dependencies: `npm install`
- Install as a shell command with `npm install -g`
- During development, link to the working version with `npm link`

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
