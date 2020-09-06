
import * as path from 'path';
import { Configuration } from 'webpack';

const webpackConfig: Configuration = {
  mode: 'production',
  entry: {
    example_lambda: './lambdas/example-lambda.js'
  },

  // [name] resolves to the left hand side of your entry
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/main.js',
    library: '[name]',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: {
    'aws-sdk': 'aws-sdk',
    'aws-lambda': 'aws-lambda',
  },
};

export default webpackConfig;