- while true
  - get next iteration
  - if not resolved
    - return iteration resolveWith
      - excute iteratee on iteration
      - put returned iteration into channel
  - else, excute iteratee on iteration
    - put returned iteration into channel


