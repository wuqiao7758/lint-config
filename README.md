<h1 align="center">Cnap Lint Config</h1>

## Usage

Install:

```sh
# commitlint
pnpm add -D @commitlint/cli @vwfive/commitlint-config

# eslint
pnpm add -D eslint @vwfive/eslint-config

# prettier
pnpm add -D prettier @vwfive/prettier-config

# stylelint
pnpm add -D stylelint @vwfive/stylelint-config
```

Then in your `xxxlintrc.cjs`:

```js
module.exports = {
  extends: ["@vwfive/xxxlint-config"]
};
```

For `prettierrc.cjs` just a little defferent:

```js
module.exports = require("@vwfive/prettier-config");
```

## License

[MIT License](./LICENSE.md)
