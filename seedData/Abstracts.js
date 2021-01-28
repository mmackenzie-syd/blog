const abstracts = [
    {
        title: 'Details of the Object Model',
        filter: '2017/jan',  // contains month and year
        day: '15',
        sortIdx: 37, // index for sorting abstracts into chronological order. It is defined as the number of months since 2014.
        subtxt: `<p>JavaScript is an object-based language based on prototypes, rather than being class-based. Because of this different basis, it can be less apparent how JavaScript allows you to create hierarchies of objects and to have inheritance of properties and their values. This post and subsequent posts attempts to clarify the situation.</p><p>This chapter assumes that you are already somewhat familiar with JavaScript and that you have used JavaScript functions to create simple objects.</p>`,
        articleId: '1'
    },
    {
        title: 'Values, Variables, and Literals',
        filter: '2017/jan',  // contains month and year
        day: '20',
        sortIdx: 37, // index for sorting abstracts into chronological order. It is defined as the number of months since 2014.
        subtxt: `<p>This post discusses values that JavaScript recognizes and describes the fundamental building blocks of JavaScript expressions: variables and literals.</p><p>This post contains the following sections:</p><ul><li>Values</li><li>Variables</li><li>Literals</li><li>Unicode</li></ul>`,
        articleId: '2'
    },
    {
        title: 'Conditional Statements',
        filter: '2016/jun',  // contains month and year
        day: '8',
        sortIdx: 30, // index for sorting abstracts into chronological order. It is defined as the number of months since 2014.
        subtxt: `<p>JavaScript supports a compact set of statements that you can use to incorporate a great deal of interactivity in Web pages. This post provides an overview of the Conditional statements.</p><p>A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports two conditional statements: if...else and switch.</p>`,
        articleId: '3'
    },
    {
        title: 'Loop Statements',
        filter: '2015/mar',  // contains month and year
        day: '3',
        sortIdx: 15, // index for sorting abstracts into chronological order. It is defined as the number of months since 2014.
        subtxt: `<p>JavaScript supports a compact set of statements that you can use to incorporate a great deal of interactivity in Web pages. This post provides an overview of the Loop statements.</p><p>A loop is a set of commands that executes repeatedly until a specified condition is met. JavaScript supports the for, do while, while, and label loop statements (label is not itself a looping statement, but is frequently used with these statements). In addition, you can use the break and continue statements within loop statements.</p><p>Another statement, for...in, executes statements repeatedly but is used for object manipulation. </p>`,
        articleId: '4'
    },
    {
        title: 'Defining Functions',
        filter: '2017/mar',  // contains month and year
        day: '3',
        sortIdx: 15, // index for sorting abstracts into chronological order. It is defined as the number of months since 2014.
        subtxt: `<p>A function definition consists of the function keyword, followed by:</p><ul><li>The name of the function.</li><li>A list of arguments to the function, enclosed in parentheses and separated by commas.</li><li>The JavaScript statements that define the function, enclosed in curly braces, { }. The statements in a function can include calls to other functions defined in the current application.</li></ul><p>For example, the following code defines a simple function named square:</p>
[codejs]
function square(number) {
   return number * number;
}
[/codejs]`,
        articleId: '5'
    },
    {
        title: 'Calling Functions',
        filter: '2019/jan',  // contains month and year
        day: '15',
        sortIdx: 37, // index for sorting abstracts into chronological order. It is defined as the number of months since 2014.
        subtxt: `<p>Defining a function does not execute it. Defining the function simply names the function and specifies what to do when the function is called. Calling the function actually performs the specified actions with the indicated parameters. For example, if you define the function square, you could call it as follows.</p>
[codejs]
square(5)
[/codejs]
<p>The preceding statement calls the function with an argument of five. The function executes its statements and returns the value twenty-five.</p>
<p>The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function, too.</p>`,
        articleId: '6'
    },
    {
        title: 'Using the Arguments Array',
        filter: '2019/feb',  // contains month and year
        day: '25',
        sortIdx: 37, // index for sorting abstracts into chronological order. It is defined as the number of months since 2014.
        subtxt: `<p>The arguments of a function are maintained in an array. Within a function, you can address the parameters passed to it as follows:</p>
[codejs]
arguments[i]
[/codejs]
<p>where i is the ordinal number of the argument, starting at zero. So, the first argument passed to a function would be arguments[0]. The total number of arguments is indicated by arguments.length.</p>
<p>Using the arguments array, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function. You can use arguments.length to determine the number of arguments actually passed to the function, and then treat each argument using the arguments array.</p>`,
        articleId: '7'
    },
];

module.exports = { abstracts };
