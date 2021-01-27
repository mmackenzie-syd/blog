
//title: { type: String, unique: true},  // title must be unique.
//fulltxt: String

const articles = [
    {
        title: 'Details of the Object Model',
        fulltxt: `<p>JavaScript is an object-based language based on prototypes, rather than being class-based. 
                Because of this different basis, it can be less apparent how JavaScript allows you to create hierarchies 
                of objects and to have inheritance of properties and their values. This post and subsequent posts attempts to clarify the situation.</p>
                <p>This chapter assumes that you are already somewhat familiar with JavaScript and that you have used JavaScript functions to create simple objects.</p>`,
        id: '1'
    },
    {
        title: 'Values, Variables, and Literals',
        fulltxt: `<p>This post discusses values that JavaScript recognizes and describes the fundamental building blocks of JavaScript expressions: variables and literals.</p>
                 <p>This post contains the following sections:</p>
                 <ul>
                    <li>Values</li>
                    <li>Variables</li>
                    <li>Literals</li>
                    <li>Unicode</li>
                 </ul>`,
        id: '2'
    },
    {
        title: 'Conditional Statements',
        fulltxt: `<p>JavaScript supports a compact set of statements that you can use to incorporate a great deal of interactivity 
                 in Web pages. This post provides an overview of the Conditional statements.</p>
                 <p>A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports 
                 two conditional statements: if...else and switch.</p>`,
        id: '3'
    },
    {
        title: 'Loop Statements',
        fulltxt: `<p>JavaScript supports a compact set of statements that you can use to incorporate a great deal of interactivity 
                 in Web pages. This post provides an overview of the Loop statements.</p>
                 <p>A loop is a set of commands that executes repeatedly until a specified condition is met. JavaScript supports 
                 the for, do while, while, and label loop statements (label is not itself a looping statement, but is frequently 
                 used with these statements). In addition, you can use the break and continue statements within loop statements.</p>`,
        id: '4'
    }
];

module.exports = { articles };
