//libs from node

const Improv = require('improv');
const yaml = require('js-yaml');
const fs = require('fs-jetpack');

//load data from file
const grammarData = yaml.load(fs.read('grammar.yaml'));

//create gen obj from above data
const generator = new Improv(grammarData, {
  filters: [Improv.filters.mismatchFilter()],
  reincorporate: true
});

//model
const model = {};

//gen text and print out
console.log(generator.gen('root', model));

//inspect
console.log(model);
