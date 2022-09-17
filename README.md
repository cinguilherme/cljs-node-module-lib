# cljs-node-module-lib

## How is this useful? Hopefuly it will be a way of leaveraging Clojurescript and Typescript together to build complex nodeJS apps (CLI, Services, workers, etc)

### This repo sits as an example of how to build a Node app with Clojurescript module dependence, allowing for levarege of Clojure features in the node app world

### How is this setup?
- The cljs holds all the cljs sources, which is built using shadow-cljs build setup to have js native code available in compiled/js/module.js
- The JS code is available in its Typescript shape in src/ but both the TS for dev and the production build look for the compiled/js in the same manner. [IDK if this is really a good idea. I'm experimenting]

![alt text](https://github.com/cinguilherme/cljs-node-module-lib/blob/main/documentation/CLJS_Typescript.png?raw=true)

### Testing
wip

### Building
wip

### Deploying
wip