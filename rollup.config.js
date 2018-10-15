import pkg from './package.json';
import less from 'rollup-plugin-less';
import html from 'rollup-plugin-html';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'

export default [{
  input: 'src/ovh-angular-responsive-popover.js',
  external: [
    "angular-ui-bootstrap",
    "matchmedia-ng",
  ],
  output: [{
    file: './dist/ovh-angular-responsive-popover.js',
    format: 'es'
  }],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    html(),
    postcss(),
  ],
}];
