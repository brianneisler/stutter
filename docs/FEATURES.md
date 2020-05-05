# Features

- framework should have built in auth.
- framework should have linting built in.
  + Rules should be specifiable in .stutterrc for each project.
- Project files should be automatically "prettied" on each code change event.
  + https://github.com/prettier/prettier/tree/master/src
- error catching, reporting and tracking should be built in. The runtime should be capable of determining exactly where an error came from and which library/system is responsible for the error. Every user's error should automatically be recorded and potentially reported to the correct owner of the library.
- makes use of hypervisors and unikernels by default for isolation
  + https://medium.com/@iefserge/runtime-js-javascript-library-os-823ada1cc3c
  + http://runtimejs.org/
  + http://www.linux-kvm.org/
- auto revision controlled,
- the language should have a built in framework and developer tools that are provided at a locally running development server (localhost:45654)
- Each user's project should have a single event log.
  + Code changes should be an event stored in a project event log. That event log should be streamed to stutter.io for logging and analysis.
- execution of a project should be time travelable. The impact of a code change on state over time should be derived through replay of the event log.


## Isolation

Each program should be isolated from the operating system and other programs/processes. To achieve this each program is built as a unikernel that is trimmed down to only the essential pieces that the program needs to run.

- perhaps using unik? https://github.com/cf-unik/unik


## Event Logs

### Project Event Log
Each project should have an underlying event log. The actual source code should be derived from the event log.

## Execution Event Log
Each execution of a project should have an event log that represents the "facts" that have occurred in execution (these should be things such as user input). The actual state of memory should be derived from the event log in combination with the execution of the actual code. The event log should be replayable so that when new code is hot loaded the new state can be determined through replay of the log.

Execution of the code should ALWAYS be deterministic.

The parser and interpreter should be reactive to code changes in the event log.

Code should be capable of being synchronized between multiple editors by using Operational Transform to resolve the new state.

**This should prevent having to log any values**
Since a log is kept of al execution the tooling instead is designed to help you find the logs you are looking for... (these are not the logs you're looking for)



## Immutable Fractional Math
- Should use fractions for all numbers. No more floats, doubles, etc! yay!! All decimal numbers should be converted to a fraction by the compiler.
-- interim solution for this is to write a babel plugin to convert numbers to string fractions


Fractional numbers are represented by two BinaryTries
Fraction = {
  dividend: BinaryTrie,
  divisor: BinaryTrie
}

http://www.math.grin.edu/~rebelsky/Courses/152/97F/Readings/student-binary



## Non-deterministic data sources
In order to avoid non-determinism of execution, all non-deterministic values should be fed in as log based event sources. This helps ensure that any functional code using data derived from these sources must receive that data as a parameter and that deterministic execution can achieved through replay of a log.


### Example: Seeded randomness
- a good example of deterministic randomness
- a random function can be made deterministic by giving it a seed that it bases its randomness from. Each call using the same seed will always yield the same result.

### Example: Deterministic http calls.
- Each outbound http call is recorded as an event
- The event is given a unique id (think of this as the seed)
- The response is received and recorded as an event with the eventId
- When the log is replayed, the http call is made again but the event id is the same as it was during execution. Instead of making the http call the same response event is replayed.


## Modeling after genetics
- Each node in an app cluster should have a complete copy of the code for the whole app.
- Each node should have multiple entry points. These are similar to the cellular expressions that each cell can take. Although each cell has the whole genetic code a cell only expresses a portion of that code.
- Nodes should be able to automatically replicate themselves.
- During replication, a node should be able to specify an entry point so that the code that actually ends up running is only a small subset of the overall codebase.


## No misleading comments
- Comments have been helpful and yet problematic in all languages
  + They often fall out of date as a code base evolves. This can cause comments to be misleading and even plain wrong.
- Code should explain itself.
  + Code that is properly named will self explain the purpose of the code.
  + Naming should be consistent with comments.
- Comments should be contextually analyzed and flagged when out of date.
- Comments should

## Intentions
- Stutter offers a method of stating intention for a section of code. This intention is then converted to code automatically by the language. The intention is forcibly kept in line with the actual code itself.



## Identifiers should be consistently named
- At the heart of a language identifiers (variable names, function names, etc) are meant to identify a specific value holder.
- The reality of naming is that the computer does not care what the name is, only humans care because it is a mechanism for communicating purpose.
-  




APIS to Implement
- http://clojure.github.io/core.async/#clojure.core.async
