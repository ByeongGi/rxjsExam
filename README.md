#Basic Setup
In order to get started with webpack and Typescript, first we must install webpack in our project. If you didn't do so already please check out webpack installation guide.

To start using webpack with Typescript you need a couple of things:

Install the Typescript compiler in your project.
Install a Typescript loader (in this case we're using ts-loader).
Create a tsconfig.json file to contain our TypeScript compilation configuration.
Create webpack.config.js to contain our webpack configuration.
You can install the TypeScript compiler and the TypeScript loader from npm by running: npm install --save-dev typescript ts-loader

tsconfig.json