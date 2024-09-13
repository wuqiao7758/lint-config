// module.exports = require("./packages/stylelint-config");
module.exports = {
  extends: ["./packages/stylelint-config"],
  overrides: [
    {
      files: ["examples/*.scss"],
      rules: {
        // "rule-empty-line-before": "always-multi-line"
      }
    }
  ]
};
