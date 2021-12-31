#!/usr/bin/env node
const { resolve } = require('path');
const replace = require('replace-in-file');

/**
 * Regex targeting JSDocs comments
 */
const COMMENT_RE = /\/\*\*[\s\S]*?\*\/[\s]*/g;

/**
 * Removes comments from type declaration files
 */
(async function main() {
  const files = `${resolve(__dirname, '../pkg')}/*.d.ts`;
  const options = {
    files,
    from: COMMENT_RE,
    to: '',
  };
  console.log('Removing comments from type declaration files...');
  try {
    const result = await replace(options);
    console.log('DONE!');
    process.exit(0);
  } catch (error) {
    console.error('Error occurred:', error);
    process.exit(1);
  }
}());
