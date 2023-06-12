const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description for your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use your project'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Add credits for collaborators and any third-party assets'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['APACHE_2.0', 'GPL_3.0', 'MIT', 'BSD_3', 'None']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can other users contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How would another user test your project?',
        default: 'npm test'
    },
]

module.exports = questions