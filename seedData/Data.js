const data = [
    {
        title: 'Details of the Object Model',
        filter: '2017/jan',  // contains month and year
        day: '15',
        subtxt: `<p>JavaScript is an object-based language based on prototypes, rather than being class-based. Because of this different basis, it can be less apparent how JavaScript allows you to create hierarchies of objects and to have inheritance of properties and their values. This post and subsequent posts attempts to clarify the situation.</p><p>This chapter assumes that you are already somewhat familiar with JavaScript and that you have used JavaScript functions to create simple objects.</p>`,
        fulltxt: `<p>JavaScript is an object-based language based on prototypes, rather than being class-based. 
                Because of this different basis, it can be less apparent how JavaScript allows you to create hierarchies 
                of objects and to have inheritance of properties and their values. This post and subsequent posts attempts to clarify the situation.</p>
                <p>This chapter assumes that you are already somewhat familiar with JavaScript and that you have used JavaScript functions to create simple objects.</p>`,
    },
    {
        title: 'Values, Variables, and Literals',
        filter: '2017/jan',  // contains month and year
        day: '20',
        subtxt: `<p>This post discusses values that JavaScript recognizes and describes the fundamental building blocks of JavaScript expressions: variables and literals.</p><p>This post contains the following sections:</p><ul><li>Values</li><li>Variables</li><li>Literals</li><li>Unicode</li></ul>`,
        fulltxt: `<p>JavaScript supports a compact set of statements that you can use to incorporate a great deal of interactivity 
                 in Web pages. This post provides an overview of the Conditional statements.</p>
                 <p>A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports 
                 two conditional statements: if...else and switch.</p>`,
    },
    {
        title: 'Conditional Statements',
        filter: '2016/jun',  // contains month and year
        day: '8',
        subtxt: `<p>JavaScript supports a compact set of statements that you can use to incorporate a great deal of interactivity in Web pages. This post provides an overview of the Conditional statements.</p><p>A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports two conditional statements: if...else and switch.</p>`,
        fulltxt: ''
    },
    {
        title: 'Loop Statements',
        filter: '2015/mar',  // contains month and year
        day: '3',
        subtxt: `<p>JavaScript supports a compact set of statements that you can use to incorporate a great deal of interactivity in Web pages. This post provides an overview of the Loop statements.</p><p>A loop is a set of commands that executes repeatedly until a specified condition is met. JavaScript supports the for, do while, while, and label loop statements (label is not itself a looping statement, but is frequently used with these statements). In addition, you can use the break and continue statements within loop statements.</p><p>Another statement, for...in, executes statements repeatedly but is used for object manipulation. </p>`,
        fulltxt: `<h3>for Statement</h3>
<p>A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop. A for statement looks as follows:</p>
[codejs]
for ([initialExpression]; [condition]; [incrementExpression]) {
   statements
}
[/codejs]
<p>When a for loop executes, the following occurs:</p>
<ol>
    <li>The initializing expression initial-expression, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity.</li>
    <li>The condition expression is evaluated. If the value of condition is true, the loop statements execute. If the value of condition is false, the for loop terminates.</li>
    <li>The statements execute.</li>
    <li>The update expression incrementExpression executes, and control returns to Step 2.</li>
</ol>
<p><strong>Example.</strong> The following function contains a for statement that counts the number of selected options in a scrolling list (a Select object that allows multiple selections). The for statement declares the variable i and initializes it to zero. It checks that i is less than the number of options in the Select object, performs the succeeding if statement, and increments i by one after each pass through the loop.</p>
[codejs]
<SCRIPT>
function howMany(selectObject) {
   var numberSelected=0
   for (var i=0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected==true)
         numberSelected++
   }
   return numberSelected
}
</SCRIPT>
[/codejs]
[code]
<FORM NAME="selectForm">
    <P><B>Choose some music types, then click the button below:</B>
    <BR><SELECT NAME="musicTypes" MULTIPLE>
    <OPTION SELECTED> R&B
    <OPTION> Jazz
    <OPTION> Blues
    <OPTION> New Age
    <OPTION> Classical
    <OPTION> Opera
    </SELECT>
    <P><INPUT TYPE="button" VALUE="How many are selected?"
    onClick="alert ('Number of options selected: ' + howMany(document.selectForm.musicTypes))">
</FORM>
[/code]`,
    },
    {
        title: 'Defining Functions',
        filter: '2017/mar',  // contains month and year
        day: '3',
        subtxt: `<p>A function definition consists of the function keyword, followed by:</p><ul><li>The name of the function.</li><li>A list of arguments to the function, enclosed in parentheses and separated by commas.</li><li>The JavaScript statements that define the function, enclosed in curly braces, { }. The statements in a function can include calls to other functions defined in the current application.</li></ul><p>For example, the following code defines a simple function named square:</p>
[codejs]
function square(number) {
   return number * number;
}
[/codejs]`,
        fulltxt: `<p>The function square takes one argument, called number. The function consists of one statement that indicates to return the argument of the function multiplied by itself. The return statement specifies the value returned by the function.</p>
[codejs]
return number * number
[/codejs]
<p>All parameters are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function. However, if you pass an object as a parameter to a function and the function changes the object's properties, that change is visible outside the function, as shown in the following example:</p>
[codejs]
function myFunc(theObject) {
   theObject.make="Toyota"
}

mycar = {make:"Honda", model:"Accord", year:1998}
x=mycar.make     // returns Honda
myFunc(mycar)    // pass object mycar to the function
y=mycar.make     // returns Toyota (prop was changed by the function)
[/codejs]
<p>In addition to defining functions as described here, you can also define Function objects.</p>
<p>A method is a function associated with an object. There will be more about objects and methods in a later post.</p>`,
    },
    {
        title: 'Calling Functions',
        filter: '2019/jan',  // contains month and year
        day: '15',
        subtxt: `<p>Defining a function does not execute it. Defining the function simply names the function and specifies what to do when the function is called. Calling the function actually performs the specified actions with the indicated parameters. For example, if you define the function square, you could call it as follows.</p>
[codejs]
square(5)
[/codejs]
<p>The preceding statement calls the function with an argument of five. The function executes its statements and returns the value twenty-five.</p>
<p>The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function, too.</p>`,
        fulltxt: `<p>A function can even be recursive, that is, it can call itself. For example, here is a function that computes factorials:</p>
[codejs]
function factorial(n) {
   if ((n == 0) || (n == 1))
      return 1
   else {
      result = (n * factorial(n-1) )
   return result
   }
}
[/codejs]
<p>You could then compute the factorials of one through five as follows:</p>
[codejs]
a=factorial(1) // returns 1
b=factorial(2) // returns 2
c=factorial(3) // returns 6
d=factorial(4) // returns 24
e=factorial(5) // returns 120
[/codejs]`,
    },
    {
        title: 'Using the Arguments Array',
        filter: '2019/feb',  // contains month and year
        day: '25',
        subtxt: `<p>The arguments of a function are maintained in an array. Within a function, you can address the parameters passed to it as follows:</p>
[codejs]
arguments[i]
[/codejs]
<p>where i is the ordinal number of the argument, starting at zero. So, the first argument passed to a function would be arguments[0]. The total number of arguments is indicated by arguments.length.</p>
<p>Using the arguments array, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function. You can use arguments.length to determine the number of arguments actually passed to the function, and then treat each argument using the arguments array.</p>`,
        fulltxt: `<p>For example, consider a function that concatenates several strings. The only formal argument for the function is a string that specifies the characters that separate the items to concatenate. The function is defined as follows:</p>
[codejs]
function myConcat(separator) {
   result="" // initialize list
   // iterate through arguments
   for (var i=1; i<arguments.length; i++) {
      result += arguments[i] + separator
   }
   return result
}
[/codejs]
<p>You can pass any number of arguments to this function, and it creates a list using each argument as an item in the list.</p>
[codejs]
// returns "red, orange, blue, "
myConcat(", ","red","orange","blue")
// returns "elephant; giraffe; lion; cheetah;"
myConcat("; ","elephant","giraffe","lion", "cheetah")
// returns "sage. basil. oregano. pepper. parsley. "
myConcat(". ","sage","basil","oregano", "pepper", "parsley")
[/codejs]
`,
    },
];

module.exports = { data };
