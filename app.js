#! usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const questions = [
    {
        type: 'list',
        name: 'q1',
        message: 'What is the type of `null` in TypeScript?',
        choices: ['object', 'null', 'undefined', 'number'],
        correctAnswer: 'object',
    },
    {
        type: 'list',
        name: 'q2',
        message: 'Which keyword is used to define a constant in TypeScript?',
        choices: ['var', 'let', 'const', 'static'],
        correctAnswer: 'const',
    },
    {
        type: 'list',
        name: 'q3',
        message: 'Which of the following is the correct syntax for defining an interface in TypeScript?',
        choices: ['interface MyInterface {}', 'class MyInterface {}', 'type MyInterface = {}', 'MyInterface {}'],
        correctAnswer: 'interface MyInterface {}',
    },
    {
        type: 'list',
        name: 'q4',
        message: 'How do you specify the type of an array of strings in TypeScript?',
        choices: ['string[]', 'Array<string>', 'string[] or Array<string>', 'All of the above'],
        correctAnswer: 'All of the above',
    },
    {
        type: 'list',
        name: 'q5',
        message: 'What is the output of `console.log(typeof NaN)` in TypeScript?',
        choices: ['number', 'NaN', 'undefined', 'object'],
        correctAnswer: 'number',
    },
    {
        type: 'list',
        name: 'q6',
        message: 'Which of the following is not a primitive type in TypeScript?',
        choices: ['string', 'number', 'boolean', 'object'],
        correctAnswer: 'object',
    },
    {
        type: 'list',
        name: 'q7',
        message: 'How can you create an enum in TypeScript?',
        choices: ['enum Color {Red, Green, Blue}', 'enum Color = {Red, Green, Blue}', 'enum Color: {Red, Green, Blue}', 'enum Color {Red = 1, Green = 2, Blue = 3}'],
        correctAnswer: 'enum Color {Red, Green, Blue}',
    },
    {
        type: 'list',
        name: 'q8',
        message: 'What does the `readonly` keyword do in TypeScript?',
        choices: ['Defines a variable that cannot be reassigned', 'Defines a property that cannot be changed after the initial assignment', 'Defines a constant variable', 'Defines a static variable'],
        correctAnswer: 'Defines a property that cannot be changed after the initial assignment',
    },
    {
        type: 'list',
        name: 'q9',
        message: 'Which of the following is the correct way to define a function in TypeScript?',
        choices: ['function myFunc(a: number, b: number): number', 'function myFunc(a, b): number', 'myFunc(a: number, b: number): number', 'function myFunc(a: number, b: number)'],
        correctAnswer: 'function myFunc(a: number, b: number): number',
    },
    {
        type: 'list',
        name: 'q10',
        message: 'How do you define an optional parameter in a TypeScript function?',
        choices: ['param?: type', 'param: type?', 'param: type = undefined', 'param: type | undefined'],
        correctAnswer: 'param?: type',
    },
];
async function runQuiz() {
    console.log(chalk.blue('Welcome to the TypeScript Quiz!'));
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    let score = 0;
    for (const question of questions) {
        const answer = await inquirer.prompt([
            {
                type: question.type,
                name: question.name,
                message: question.message,
                choices: question.choices,
            },
        ]);
        if (answer[question.name] === question.correctAnswer) {
            console.log(chalk.green('Correct!'));
            score++;
        }
        else {
            console.log(chalk.red('Wrong!'));
        }
    }
    console.log(chalk.blue('Calculating your score...'));
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay for score calculation
    console.log(chalk.blue(`Your score is ${score} out of ${questions.length}`));
}
runQuiz().catch((error) => {
    console.error('An error occurred:', error);
});
