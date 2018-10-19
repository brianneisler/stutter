module.exports = {
  "extends": "airbnb-base",
  "plugins": [ "import" ],
  "rules": {
    "array-bracket-spacing": [ "error", "always", {
      "objectsInArrays": false,
      "arraysInArrays": false
    }],
    "arrow-parens": [ "error", "always" ],
    "func-names": "off",
    "comma-dangle": [ "error", "never" ],
    "semi": [ "error", "never" ]
  }
}
