Reproduction for sass loader bug https://github.com/webpack-contrib/sass-loader/issues/1252.
Sass with `@use` importing with extension doesn't work. See [main.scss](https://github.com/MirKml/sass-loader-bug/blob/main/src/main.scss) file content.


```
> npm i
> npm run build
```

Result 
```
asset main.js 5.61 KiB [emitted] (name: main)
orphan modules 39 bytes [orphan] 1 module
./main.scss 39 bytes [built] [code generated] [1 error]

ERROR in ./main.scss (./main.scss.webpack[javascript/auto]!=!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./main.scss)
Module build failed (from ../node_modules/sass-loader/dist/cjs.js):
Can't find stylesheet to import.
  ╷
1 │ @use "react-datepicker/dist/react-datepicker.css"
  │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  ..\..\..\..\src\main.scss 1:1  root stylesheet
...
```

It work without extension, try to remove css extension from `@use` -> `@use "react-datepicker/dist/react-datepicker", then `npm run build` works without error.
