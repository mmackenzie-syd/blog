
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
        id: '4'
    }
];

module.exports = { articles };
