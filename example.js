#!/usr/bin/env node

const fs = require('fs');
const phylotree = require('phylotree');
const commander = require('commander');

commander.option(
    '-n --newick <newick>',
    'Input newick file'
  ).parse(process.argv);

fs.readFile(commander.newick, (err, newick_data) => {

  const tree = new phylotree.phylotree(newick_data.toString());
  console.log(tree.get_tips());

});
