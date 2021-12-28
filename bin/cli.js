#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/yoda-libs/create-glaze-ui-react ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;
const changePackageNameCommand = `cd ${repoName} && node_modules/.bin/json -I -f package.json -e 'this.name="${repoName}"'`;
const renameRootFileCommand = `cd ${repoName} && mv src/root.js src/${repoName}.js`;
const removeBinFolderCommand = `cd ${repoName} && rm -rf bin`;

console.log(`Cloning the repository with name ${repoName}`);
const  checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

const changedPackageName = runCommand(changePackageNameCommand);
if (!changedPackageName) process.exit(-1);

const changedRootFileName = runCommand(renameRootFileCommand);
if (!changedRootFileName) process.exit(-1);

const removedBinFolder = runCommand(removeBinFolderCommand);
if (!removedBinFolder) process.exit(-1);

console.log("Congratulations! You are ready. Follow these commands to start.");
console.log(`cd ${repoName}`);
console.log("yarn start");


