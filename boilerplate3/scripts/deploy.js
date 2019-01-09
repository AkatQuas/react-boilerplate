const ghpages = require('gh-pages');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const fs = require('fs-extra');
const resolve = require('path').resolve;
const version = require('../package.json').version;
const execSync = require('child_process').execSync;
const red = chalk.red;

const paths = {
    build: resolve(__dirname, '../build'),
    root: resolve(__dirname, '..')
}

main();

function main() {
    const gitStatus = getGitStatus();
    if (gitStatus) {
        return console.error(
            red('This git repository has untracked files or uncommitted changes:') +
            '\n\n' +
            gitStatus
                .split('\n')
                .map(line => line.match(/ .*/g)[0].trim())
                .join('\n') +
            '\n\n' +
            red('Remove untracked files, stash or commit any changes, and try again.')
        )
    }

    console.log(chalk.yellow(`Prepareing to deploy project, version ${version}`));

    buildStatic();

    deploy2remote();
}

function getGitStatus() {
    try {
        return execSync(`git status --porcelain`, {
            stdio: ['pipe', 'pipe', 'ignore']
        }).toString().trim();
    } catch (e) {
        return '';
    }
}
function prefix0(number) {
    return number < 10 ? '0' + number : number
}

function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = prefix0(today.getMonth() + 1);
    const day = prefix0(today.getDate());
    return `${year}-${month}-${day}`
}

function buildStatic() {
    const spinner = ora('Start build static files');
    spinner.start();
    try {
        execSync('npm run build', {
            cwd: paths.root
        });
        spinner.succeed();
    } catch (e) {
        spinner.fail();
        console.log(red('Failed to build:'));
        console.error(e)
        process.exit(1);
    }
}

async function deploy2remote() {
    const commitMessageDefault = 'Auto-deploy🚀 on '.concat(getToday());

    const { repo, commitMessage } = await inquirer.prompt([
        {
            name: 'commitMessage',
            message: 'Add the commit message',
            default: commitMessageDefault
        },
        {
            name: 'repo',
            message: 'Double check the remote repository',
            default: 'https://github.com/AkatQuas/ghpage-test.git'
        }
    ]);


    const spinner = ora(`Deploying static files to ${repo}`);

    spinner.start();
    ghpages.publish(
        paths.build,
        {
            repo,
            message: commitMessage,
            user: {
                name: 'AkatQuas',
                email: '295140755@qq.com'
            }
        },
        function (err) {
            if (err) {
                spinner.fail();
                console.log(red('Auto deploy failed:'));
                console.error(err);
                return fs.remove(paths.build);
            }
            spinner.succeed();
        }
    );
}