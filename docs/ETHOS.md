# stutter ethos

The foundation of a modern language...


## Principals

### Reactive

From the ground up a language should be reactive! A user should not need to compile, test, lint, coverage check, document, backup, etc through commands. Instead, these things should all happen automatically on every code change.


### Event-driven

A modern language should be event driven. Event logs should be at the very core of the language so that every step is logged and analyzed.


### Immutable

All data structures should be immutable by default. Immutability enables code that is easy to reason about.


### Functional

The language should be built on functional principles.


### Intelligent

The language should make use of AI under the hood to ensure that the development experience is a delightful one.


### Distributed

A language's runtime should be distributed by default enabling code that can scale in parallel right out of the box.


### Isolated

A language's runtime should be isolated from the user's operating system by default.


### Connected

A language by default should be connected to the internet and leverage the vast compute available for superior performance and capabilities that would be impossible on a single machine.


### Evaluated from Data

The language should be evaluated from data and capable of being hot injected with new code. Internal state of memory should be replayed using the event log to determine what the new resultant memory state should be.


### Deterministic

Benefits
- A deterministic program can be understood without concern for execution interleavings, data races, or complex memory consistency models: the program behavior is completely defined by its sequential equivalent.
- Programmers can reason about programs, debug them during development, and diagnose error reports after deployment using the development techniques and tools currently used for sequential programs.
- Independent software vendors can test codes as they do for sequential programs, without being concerned about the need to cover multiple possible executions for each input. The same test suites developed for the sequential code can be used for the parallel code.
- Programmers can use an incremental parallelization strategy, progressively replacing sequential constructs with parallel constructs, while preserving program behavior.
- Two separately developed but deterministic parallel components should be far easier to compose than more general parallel code, because a deterministic component should have the same behavior regardless of the external context within which it is executed.


## RESEARCH
- https://www.usenix.org/legacy/event/hotpar09/tech/full_papers/bocchino/bocchino_html/
