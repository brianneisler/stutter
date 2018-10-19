# Evaluation



## Concepts

### Data structures... not text

Unlike a traditional programming language, stutter is represented by data structures, not text files.

<!-- NOTE BRN: A text file is a data structure of it's own. We've simply chosen a different default structure. -->
Stutter programs are defined in terms of the evaluation of data structures and not in terms of the syntax of character streams/files. This makes it easy for stutter programs to manipulate, transform and produce other stutter programs.



## Contexts

Evaluation can occur in a few different contexts:
- in the REPL
- Programmatically, via `eval`
