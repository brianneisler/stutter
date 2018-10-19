# stutter db

The stutter db is used to represent stutter programs. Each definition in a stutter program is represented by one db.

e.g.
- each function is represented by one db
- each type is represented by one db
- any call to `def` has its own backing database

## Notes
- number of devices that each device should be connected to is equal to log (n) where n is the number of devices on the system
https://en.wikipedia.org/wiki/Distributed_hash_table

## Log

Each database is backed by a single log file.
- each line in the log is an event
- each event is represented in a common format
- processing each event generates the resultant program
- events should use operational transform to reconcile events that are happening in parallel on different machines

### Log Format
- each log entry is one operation
- each log entry should know which previous log entry it was based on
```
[this-log-uuid`]:[hash]:[op]
```

*op format* (json)
```json
{"p":["path"], "na":1}
```

*uuid format*
```
[time_high_and_version]-[time_mid]-[time_low]-[clock_seq_hi_and_reserved]-[clock_seq_low]-[nodeid]
```

*hash format*
```
sha256(previous_log_hash + sha256(op) + version?)
```

## Operations
op                                    | Description
---------------------------------------|-------------------------------------
`{p:[path], na:x}`                     | adds `x` to the number at `[path]`.
`{p:[path,idx], li:obj}`               | inserts the object `obj` before the item at `idx` in the list at `[path]`.
`{p:[path,idx], ld:obj}`               | deletes the object `obj` from the index `idx` in the list at `[path]`.
`{p:[path,idx], ld:before, li:after}`  | replaces the object `before` at the index `idx` in the list at `[path]` with the object `after`.
`{p:[path,idx1], lm:idx2}`             | moves the object at `idx1` such that the object will be at index `idx2` in the list at `[path]`.
`{p:[path,key], oi:obj}`               | inserts the object `obj` into the object at `[path]` with key `key`.
`{p:[path,key], od:obj}`               | deletes the object `obj` with key `key` from the object at `[path]`.
`{p:[path,key], od:before, oi:after}`  | replaces the object `before` with the object `after` at key `key` in the object at `[path]`.
`{p:[path], t:subtype, o:subtypeOp}`   | applies the subtype op `o` of type `t` to the object at `[path]`
`{p:[path,offset], si:s}`              | inserts the string `s` at offset `offset` into the string at `[path]` (uses subtypes internally).
`{p:[path,offset], sd:s}`              | deletes the string `s` at offset `offset` from the string at `[path]` (uses subtypes internally).
