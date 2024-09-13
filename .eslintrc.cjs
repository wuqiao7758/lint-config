module.exports = {
  extends: ["./packages/eslint-config/dist/index.cjs"],
  overrides: [
    {
      files: ["examples/*.ts"],
      rules: {
        // "no-var": "warn"
      }
    }
  ]
};
