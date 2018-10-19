Parser
- Use babel as parser for stutter engine.
- Create a babel plugin
-- remove commas from language
-- convert JS keywords in to functions
-- convert operators in to functions 

Features
- Switch runtime engine to using generators
- Add function chaining
```
if([exp])
.else([exp])

try(
  throw('"error')
).catch(['error'],
  log('error'))
```
- Use [bitpack](https://github.com/brianneisler/bitpack) as basis for package manager
  - two types of packages
    - module package, common code similar to node package
    - lang package, extensions to the stutter language usable by anyone

- Lang extensions
