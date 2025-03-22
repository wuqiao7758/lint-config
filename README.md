<h1 align="center">Cnap Lint Config</h1>

## Usage

Install:

```sh
# commitlint
pnpm add -D @commitlint/cli @vwnine/commitlint-config

# eslint
pnpm add -D eslint @vwnine/eslint-config

# prettier
pnpm add -D prettier @vwnine/prettier-config

# stylelint
pnpm add -D stylelint @vwnine/stylelint-config
```

Then in your `xxxlintrc.cjs`:

```js
module.exports = {
  extends: ["@vwnine/xxxlint-config"]
};
```

For `prettierrc.cjs` just a little defferent:

```js
module.exports = require("@vwnine/prettier-config");
```

## License

[MIT License](./LICENSE.md)
