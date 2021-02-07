const data = [
    {
        title: 'Exception Handling Statements',
        filter: '2020/oct',  // contains month and year
        day: '7',
        subtxt: `<p>JavaScript supports a compact set of statements that you can use to incorporate a great deal of interactivity in Web pages. This post provides an overview of the Exception handling statements.</p>
        <p>You can throw and catch exceptions using the throw and try...catch statements.</p>`,
        fulltxt: `<h3>The throw Statement</h3>
<p>Use the throw statement to throw an exception. When you throw an exception, you specify an expression containing the value of the exception:</p>
[codejs]
throw expression
[/codejs]
<p>The following code throws several exceptions.</p>
[codejs]
throw "Error2"    // generates an exception with a string value
throw 42          // generates an exception with the value 42
throw true        // generates an exception with the value true
[/codejs]
<p>You can specify an object when you throw an exception. You can then reference the object's properties in the catch block. The following example creates an object myUserException of type UserException and uses it in a throw statement.</p>
[codejs]
// Create an object type UserException
function UserException (message) {
   this.message=message
   this.name="UserException"
}
// Create an instance of the object type and throw it
myUserException=new UserException("Value too high")
throw myUserException
[/codejs]
<h3>The try...catch Statement</h3>
<p>The try...catch statement marks a block of statements to try, and specifies a response should an exception be thrown. If an exception is thrown, the try...catch statement catches it.</p>
<p>The try...catch statement consists of a try block, which contains one or more statements, and a catch block, containing statements that specify what to do if an exception is thrown in the try block. That is, you want the try block to succeed, and if it does not succeed, you want control to pass to the catch block. If any statement within the try block (or in a function called from within the try block) throws an exception, control immediately shifts to the catch block. If no exception is thrown in the try block succeed, the catch block is skipped. The finally block executes after the try and catch blocks execute but before the statements following the try...catch statement.</p>
<p>The following example uses a try...catch statement. The example calls a function that retrieves a month name from an array based on the value passed to the function. If the value does not correspond to a month number (1-12), an exception is thrown with the value "InvalidMonthNo" and the statements in the catch block set the monthName variable to "unknown".</p>
[codejs]
function getMonthName (mo) {
   mo=mo-1 // Adjust month number for array index (1=Jan, 12=Dec)
   var months=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul",
      "Aug","Sep","Oct","Nov","Dec")
   if (months[mo] != null) {
      return months[mo]
   } else {
      throw "InvalidMonthNo"
   }
}
try {
   // statements to try
   monthName=getMonthName(myMonth) // function could throw exception
}
catch (e) {
   monthName="unknown"
      logMyErrors(e) // pass exception object to error handler
}
[/codejs]
<h4>The catch Block</h4>
<p>Use the try...catch statement's catch block (recovery block) to execute error-handling code.</p>
<p>A catch block looks as follows:</p>
[codejs]
catch (catchID) {
   statements
}
[/codejs]
<p>Every catch block specifies an identifier (catchID in the preceding syntax) that holds the value specified by the throw statement; you can use this identifier to get information about the exception that was thrown. JavaScript creates this identifier when the catch block is entered; the identifier lasts only for the duration of the catch block; after the catch block finishes executing, the identifier is no longer available.</p>
<p>For example, the following code throws an exception. When the exception occurs, control transfers to the catch block.</p>
[codejs]
try {
   throw "myException" // generates an exception
}
catch (e) {
   // statements to handle any exceptions
   logMyErrors(e) // pass exception object to error handler
}
[/codejs]
<h4>The finally Block</h4>
<p>The finally block contains statements to execute after the try and catch blocks execute but before the statements following the try...catch statement. The finally block executes whether or not an exception is thrown. If an exception is thrown, the statements in the finally block execute even if no catch block handles the exception.</p>
<p>You can use the finally block to make your script fail gracefully when an exception occurs; for example, you may need to release a resource that your script has tied up. The following example opens a file and then executes statements that use the file (server-side JavaScript allows you to access files). If an exception is thrown while the file is open, the finally block closes the file before the script fails.</p>
[codejs]
try {
   openMyFile()  // tie up a resource
   writeMyFile(theData)
}
finally {
   closeMyFile() // always close the resource
}
[/codejs]
<h4>Nesting try...catch Statements</h4>
<p>You can nest one or more try...catch statements. If an inner try...catch statement does not have a catch block, the enclosing try...catch statement's catch block is checked for a match.</p>
`,
    },
    {
        title: 'Object Manipulation Statements',
        filter: '2019/jun',  // contains month and year
        day: '6',
        subtxt: `JavaScript supports a compact set of statements that you can use to incorporate a great deal of interactivity in Web pages. This post provides an overview of the Object manipulation statements.
        JavaScript uses the for...in and with statements to manipulate objects.`,
        fulltxt: `<h3>for...in Statement</h3>
<p>The for...in statement iterates a specified variable over all the properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:</p>
[codejs]
for (variable in object) {
   statements }
[/codejs]
<p><strong>Example.</strong> The following function takes as its argument an object and the object's name. It then iterates over all the object's properties and returns a string that lists the property names and their values.</p>
[codejs]
function dump_props(obj, obj_name) {
   var result = ""
   for (var i in obj) {
      result += obj_name + "." + i + " = " + obj[i] + "<BR>"
   }
   result += "<HR>"
   return result
}
[/codejs]
<p>For an object car with properties make and model, result would be:</p>
[codejs]
car.make = Ford
car.model = Mustang
[/codejs]
<h3>with Statement</h3>
<p>The with statement establishes the default object for a set of statements. JavaScript looks up any unqualified names within the set of statements to determine if the names are properties of the default object. If an unqualified name matches a property, then the property is used in the statement; otherwise, a local or global variable is used.</p>
<p>A with statement looks as follows:</p>
[codejs]
with (object){
   statements
}
[/codejs]
<p><strong>Example.</strong> The following with statement specifies that the Math object is the default object. The statements following the with statement refer to the PI property and the cos and sin methods, without specifying an object. JavaScript assumes the Math object for these references.</p>
[codejs]
var a, x, y
var r=10
with (Math) {
   a = PI * r * r
   x = r * cos(PI)
   y = r * sin(PI/2)
}
[/codejs]
`,
    },
    {
        title: 'Variables',
        filter: '2019/jun',  // contains month and year
        day: '14',
        subtxt: `<p>You use variables as symbolic names for values in your application. You give variables names by which you refer to them and which must conform to certain rules.</p>
<p>A JavaScript identifier, or name, must start with a letter or underscore ("_"); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).</p>
<p>Some examples of legal names are Number_hits, temp99, and _name.</p>`,
        fulltxt: `<h3>Declaring Variables</h3>
<p>You can declare a variable in two ways:</p>
<ul>
<li>By simply assigning it a value. For example, x = 42</li>
<li>With the keyword var. For example, var x = 42</li>
</ul>
<h3>Evaluating Variables</h3>
<p>A variable or array element that has not been assigned a value has the value undefined. The result of evaluating an unassigned variable depends on how it was declared:</p>
<ul>
<li>If the unassigned variable was declared without var, the evaluation results in a runtime error.</li>
<li>If the unassigned variable was declared with var, the evaluation results in the undefined value, or NaN in numeric contexts.</li>
</ul>
<p>The following code demonstrates evaluating unassigned variables.</p>
[codejs]
function f1() {
   return y - 2;
}
f1() //Causes runtime error
function f2() {
   return var y - 2;
}
f2() //returns NaN
[/codejs]
<p>You can use undefined to determine whether a variable has a value. In the following code, the variable input is not assigned a value, and the if statement evaluates to true.</p>
[codejs]
var input;
if(input === undefined){
   doThis();
} else {
   doThat();
}
[/codejs]
<p>The undefined value behaves as false when used as a Boolean value. For example, the following code executes the function myFunction because the array element is not defined:</p>
[codejs]
myArray=new Array()
if (!myArray[0])
   myFunction()
[/codejs]
<p>When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in Boolean contexts. For example:</p>
[codejs]
var n = null
n * 32 //returns 0
[/codejs]
<h3>Variable Scope</h3>
<p>When you set a variable identifier by assignment outside of a function, it is called a global variable, because it is available everywhere in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within the function.</p>
<p>Using var to declare a global variable is optional. However, you must use var to declare a variable inside a function.</p>
<p>You can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable called phoneNumber is declared in a FRAMESET document, you can refer to this variable from a child frame as parent.phoneNumber.</p>`,
    },
    {
        title: 'Working with Objects',
        filter: '2019/jun',  // contains month and year
        day: '15',
        subtxt: `<p>JavaScript is designed on a simple object-based paradigm. An object is a construct with properties that are JavaScript variables or other objects. An object also has functions associated with it that are known as the object's methods. In addition to objects that are predefined in the Navigator client and the server, you can define your own objects.</p>
<p>This post describes how to use objects, properties, functions, and methods, and how to create your own objects.</p>
<p>This post contains the following sections:</p>
<ul>
<li>Objects and Properties</li>
<li>Creating New Objects</li>
</ul>`,
        fulltxt: `<h3>Objects and Properties</h3>
<p>A JavaScript object has properties associated with it. You access the properties of an object with a simple notation:</p>
[codejs]
objectName.propertyName
[/codejs]
<p>Both the object name and property name are case sensitive. You define a property by assigning it a value. For example, suppose there is an object named myCar (for now, just assume the object already exists). You can give it properties named make, model, and year as follows:</p>
[codejs]
myCar.make = "Ford"
myCar.model = "Mustang"
myCar.year = 1969;
[/codejs]
<p>An array is an ordered set of values associated with a single variable name. Properties and arrays in JavaScript are intimately related; in fact, they are different interfaces to the same data structure. So, for example, you could access the properties of the myCar object as follows:</p>
[codejs]
myCar["make"] = "Ford"
myCar["model"] = "Mustang"
myCar["year"] = 1967
[/codejs]
<p>This type of array is known as an associative array, because each index element is also associated with a string value. To illustrate how this works, the following function displays the properties of the object when you pass the object and the object's name as arguments to the function:</p>
[codejs]
function show_props(obj, obj_name) {
   var result = ""
   for (var i in obj)
      result += obj_name + "." + i + " = " + obj[i] + "\\n"
   return result
}
[/codejs]
<p>So, the function call show_props(myCar, "myCar") would return the following:</p>
[codejs]
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1967
[/codejs]
<h3>Creating New Objects</h3>
<p>JavaScript has a number of predefined objects. In addition, you can create your own objects. In JavaScript 1.2, you can create an object using an object initializer. Alternatively, you can first create a constructor function and then instantiate an object using that function and the new operator.</p>
<h4>Using Object Initializers</h4>
<p>In addition to creating objects using a constructor function, you can create objects using an object initializer. Using object initializers is sometimes referred to as creating objects with literal notation. "Object initializer" is consistent with the terminology used by C++.</p>
<p>The syntax for an object using an object initializer is:</p>
[codejs]
objectName = {property1:value1, property2:value2,..., propertyN:valueN}
[/codejs]
<p>where objectName is the name of the new object, each propertyI is an identifier (either a name, a number, or a string literal), and each valueI is an expression whose value is assigned to the propertyI. The objectName and assignment is optional. If you do not need to refer to this object elsewhere, you do not need to assign it to a variable.</p>
<p>If an object is created with an object initializer in a top-level script, JavaScript interprets the object each time it evaluates the expression containing the object literal. In addition, an initializer used in a function is created each time the function is called.</p>
<p>The following statement creates an object and assigns it to the variable x if and only if the expression cond is true.</p>
[codejs]
if (cond) x = {hi:"there"}
[/codejs]
<p>The following example creates myHonda with three properties. Note that the engine property is also an object with its own properties.</p>
[codejs]
myHonda = {color:"red",wheels:4,engine:{cylinders:4,size:2.2}}
[/codejs]
<p>You can also use object initializers to create arrays.</p>
<h4>Using a Constructor Function</h4>
<p>Alternatively, you can create an object with these two steps:</p>
<ol>
<li>Define the object type by writing a constructor function.</li>
<li>Create an instance of the object with new.</li>
</ol>
<p>To define an object type, create a function for the object type that specifies its name, properties, and methods. For example, suppose you want to create an object type for cars. You want this type of object to be called car, and you want it to have properties for make, model, year, and color. To do this, you would write the following function:</p>
[codejs]
function car(make, model, year) {
   this.make = make
   this.model = model
   this.year = year
}
[/codejs]
<p>Notice the use of this to assign values to the object's properties based on the values passed to the function.</p>
<p>Now you can create an object called mycar as follows:
[codejs]
mycar = new car("Eagle", "Talon TSi", 1993)
[/codejs]
<p>This statement creates mycar and assigns it the specified values for its properties. Then the value of mycar.make is the string "Eagle", mycar.year is the integer 1993, and so on.</p>
<p>You can create any number of car objects by calls to new. For example,</p>
[codejs]
kenscar = new car("Nissan", "300ZX", 1992)
vpgscar = new car("Mazda", "Miata", 1990)
[/codejs]
<p>An object can have a property that is itself another object. For example, suppose you define an object called person as follows:</p>
[codejs]
function person(name, age, sex) {
   this.name = name
   this.age = age
   this.sex = sex
}
[/codejs]
<p>and then instantiate two new person objects as follows:</p>
[codejs]
rand = new person("Rand McKinnon", 33, "M")
ken = new person("Ken Jones", 39, "M")
[/codejs]
<p>Then you can rewrite the definition of car to include an owner property that takes a person object, as follows:</p>
[codejs]
function car(make, model, year, owner) {
   this.make = make
   this.model = model
   this.year = year
   this.owner = owner
}
[/codejs]
<p>To instantiate the new objects, you then use the following:</p>
[codejs]
car1 = new car("Eagle", "Talon TSi", 1993, rand)
car2 = new car("Nissan", "300ZX", 1992, ken)
[/codejs]
<p>Notice that instead of passing a literal string or integer value when creating the new objects, the above statements pass the objects rand and ken as the arguments for the owners. Then if you want to find out the name of the owner of car2, you can access the following property:</p>
[codejs]
car2.owner.name
[/codejs]
<p>Note that you can always add a property to a previously defined object. For example, the statement</p>
[codejs]
car1.color = "black"
[/codejs]
<p>adds a property color to car1, and assigns it a value of "black." However, this does not affect any other objects. To add the new property to all objects of the same type, you have to add the property to the definition of the car object type.</p>
<h4>Indexing Object Properties</h4>
<p>In JavaScript 1.0, you can refer to an object's properties by their property name or by their ordinal index. In JavaScript 1.1 or later, however, if you initially define a property by its name, you must always refer to it by its name, and if you initially define a property by an index, you must always refer to it by its index.</p>
<p>This applies when you create an object and its properties with a constructor function, as in the above example of the Car object type, and when you define individual properties explicitly (for example, myCar.color = "red"). So if you define object properties initially with an index, such as myCar[5] = "25 mpg", you can subsequently refer to the property as myCar[5].</p>
<p>The exception to this rule is objects reflected from HTML, such as the forms array. You can always refer to objects in these arrays by either their ordinal number (based on where they appear in the document) or their name (if defined). For example, if the second <FORM> tag in a document has a NAME attribute of "myForm", you can refer to the form as document.forms[1] or document.forms["myForm"] or document.myForm.</p>
<h4>Defining Properties for an Object Type</h4>
<p>You can add a property to a previously defined object type by using the prototype property. This defines a property that is shared by all objects of the specified type, rather than by just one instance of the object. The following code adds a color property to all objects of type car, and then assigns a value to the color property of the object car1.</p>
[codejs]
Car.prototype.color=null
car1.color="black"
[/codejs]
<h4>Defining Methods</h4>
<p>A <i>method</i> is a function associated with an object. You define a method the same way you define a standard function. Then you use the following syntax to associate the function with an existing object:</p>
[codejs]
object.methodname = function_name
[/codejs]
<p>where object is an existing object, methodname is the name you are assigning to the method, and function_name is the name of the function.</p>
<p>You can then call the method in the context of the object as follows:</p>
object.methodname(params);
<p>You can define methods for an object type by including a method definition in the object constructor function. For example, you could define a function that would format and display the properties of the previously-defined car objects; for example,
[codejs]
function displayCar() {
   var result = "A Beautiful " + this.year + " " + this.make 
      + " " + this.model
   pretty_print(result)
}
[/codejs]
<p>where pretty_print is function to display a horizontal rule and a string. Notice the use of this to refer to the object to which the method belongs.</p>
<p>You can make this function a method of car by adding the statement</p>
[codejs]
this.displayCar = displayCar;
[/codejs]
<p>to the object definition. So, the full definition of car would now look like</p>
[codejs]
function car(make, model, year, owner) {
   this.make = make
   this.model = model
   this.year = year
   this.owner = owner
   this.displayCar = displayCar
}
[/codejs]
<p>Then you can call the displayCar method for each of the objects as follows:</p>
[codejs]
car1.displayCar()
car2.displayCar()
[/codejs]
<h4>Using this for Object References</h4>
<p>JavaScript has a special keyword, this, that you can use within a method to refer to the current object. For example, suppose you have a function called validate that validates an object's value property, given the object and the high and low values:</p>
[codejs]
function validate(obj, lowval, hival) {
   if ((obj.value < lowval) || (obj.value > hival))
      alert("Invalid Value!")
}
[/codejs]
<p>Then, you could call validate in each form element's onChange event handler, using this to pass it the form element, as in the following example:</p>
[code]
<INPUT TYPE="text" NAME="age" SIZE=3 onChange="validate(this, 18, 99)">
[/code]
<p>In general, this refers to the calling object in a method.</p>
<p>When combined with the form property, this can refer to the current object's parent form. In the following example, the form myForm contains a Text object and a button. When the user clicks the button, the value of the Text object is set to the form's name. The button's onClick event handler uses this.form to refer to the parent form, myForm.</p>
[code]
<FORM NAME="myForm">
Form name:<INPUT TYPE="text" NAME="text1" VALUE="Beluga">
<P>
<INPUT NAME="button1" TYPE="button" VALUE="Show Form Name" onClick="this.form.text1.value=this.form.name">
</FORM>
[/code]
<h4>Deleting Objects</h4>
<p>You can remove an object by using the delete operator. The following code shows how to remove an object.</p>
[codejs]
myobj=new Number()
delete myobj   // removes the object and returns true
[/codejs]`,
    },
    {
        title: 'Literals',
        filter: '2018/feb',  // contains month and year
        day: '20',
        subtxt: `<p>You use literals to represent values in JavaScript. These are fixed values, not variables, that you literally provide in your script. 
This section describes the following types of literals:</p><ul><li>Array Literals</li><li>Boolean Literals</li><li>Floating-Point Literals</li><li>Integers</li><li>Object Literals</li><li>String Literals</li></ul>`,
        fulltxt: `<h3>Array Literals</h3>
<p>An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets ([]). When you create an array using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.</p>
<p>The following example creates the coffees array with three elements and a length of three:</p>
[codejs]
coffees = ["French Roast", "Columbian", "Kona"]
[/codejs]
<p><strong>NOTE:</strong>An array literal is a type of object initializer.</p>
<p>If an array is created using a literal in a top-level script, JavaScript interprets the array each time it evaluates the expression containing the array literal. In addition, a literal used in a function is created each time the function is called.</p>
<p>Array literals are also Array objects. See "Array Object" on page 101 for details on Array objects.</p>
<h4>Extra Commas in Array Literals</h4>
<p>You do not have to specify all elements in an array literal. If you put two commas in a row, the array is created with spaces for the unspecified elements. The following example creates the fish array:</p>
[codejs]
fish = ["Lion", , "Angel"]
[/codejs]
<p>This array has two elements with values and one empty element (fish[0] is "Lion", fish[1] is undefined, and fish[2] is "Angel"):</p>
<p>If you include a trailing comma at the end of the list of elements, the comma is ignored. In the following example, the length of the array is three. There is no myList[3]. All other commas in the list indicate a new element.</p>
[codejs]
myList = ['home', , 'school', ];
[/codejs]
<p>In the following example, the length of the array is four, and myList[0] is missing.</p>
[codejs]
myList = [ , 'home', , 'school'];
[/codejs]
<p>In the following example, the length of the array is four, and myList[3] is missing. Only the last comma is ignored. This trailing comma is optional.</p>
[codejs]
myList = ['home', , 'school', , ];
[/codejs]
<h3>Boolean Literals</h3>
<p>The Boolean type has two literal values: true and false.</p>
<p>Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object. The Boolean object is a wrapper around the primitive Boolean data type. See "Boolean Object" on page 104 for more information.</p>
<h3>Floating-Point Literals</h3>
<p>A floating-point literal can have the following parts:</p>
<ul>
<li>A decimal integer</li>
<li>A decimal point (".")</li>
<li>A fraction (another decimal number)</li>
<li>An exponent</li>
</ul>
<p>The exponent part is an "e" or "E" followed by an integer, which can be signed (preceded by "+" or "-"). A floating-point literal must have at least one digit and either a decimal point or "e" (or "E").</p>
<p>Some examples of floating-point literals are 3.1415, -3.1E12, .1e12, and 2E-12</p>
<h3>Integers</h3>
<p>Integers can be expressed in decimal (base 10), hexadecimal (base 16), and octal (base 8). A decimal integer literal consists of a sequence of digits without a leading 0 (zero). A leading 0 (zero) on an integer literal indicates it is in octal; a leading 0x (or 0X) indicates hexadecimal. Hexadecimal integers can include digits (0-9) and the letters a-f and A-F. Octal integers can include only the digits 0-7.</p>
<p>Some examples of integer literals are: 42, 0xFFF, and -345.</p>
<h3>Object Literals</h3>
<p>An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}). You should not use an object literal at the beginning of a statement. This will lead to an error.</p>
<p>The following is an example of an object literal. The first element of the car object defines a property, myCar; the second element, the getCar property, invokes a function (Cars("honda")); the third element, the special property, uses an existing variable (Sales).</p>
[codejs]
var Sales = "Toyota";
function CarTypes(name) {
   if(name == "Honda")
      return name;
   else
      return "Sorry, we don't sell " + name + ".";
}
car = {myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales}
document.write(car.myCar); // Saturn
document.write(car.getCar); // Honda
document.write(car.special); // Toyota
[/codejs]
<p>Additionally, you can use an index for the object, the index property (for example, 7), or nest an object inside another. The following example uses these options. These features, however, may not be supported by other ECMA-compliant browsers.</p>
[codejs]
car = {manyCars: {a: "Saab", b: "Jeep"}, 7: "Mazda"}
document.write(car.manyCars.b); // Jeep
document.write(car[7]); // Mazda
[/codejs]
<h3>String Literals</h3>
<p>A string literal is zero or more characters enclosed in double (") or single (') quotation marks. A string must be delimited by quotation marks of the same type; that is, either both single quotation marks or both double quotation marks. The following are examples of string literals:</p>
<ul>
<li>"blah"</li>
<li>'blah'</li>
<li>"1234"</li>
<li>"one line \\n another line"</li>
</ul>
<p>You can call any of the methods of the String object on a string literal value--JavaScript automatically converts the string literal to a temporary String object, calls the method, then discards the temporary String object. You can also use the String.length property with a string literal.</p>
`,
    },
    {
        title: 'Conditional Statements',
        filter: '2018/feb',  // contains month and year
        day: '9',
        subtxt: `<p>JavaScript supports a compact set of statements that you can use to incorporate a great deal of interactivity in Web pages. This post provides an overview of the Conditional statements.</p><p>A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports two conditional statements: if...else and switch.</p>`,
        fulltxt: `
<h3>if...else Statement</h3>
<p>Use the if statement to perform certain statements if a logical condition is true; use the optional else clause to perform other statements if the condition is false. An if statement looks as follows:</p>
[codejs]
if (condition) {
   statements1 
}
[else {
   statements2 
} ]
[/codejs]
<p>The condition can be any JavaScript expression that evaluates to true or false. The statements to be executed can be any JavaScript statements, including further nested if statements. If you want to use more than one statement after an if or else statement, you must enclose the statements in curly braces, {}.
Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object. Any object whose value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement. For example:</p>
[codejs]
var b = new Boolean(false);
if (b) // this condition evaluates to true
[/codejs]
<p><strong>Example.</strong>In the following example, the function checkData returns true if the number of characters in a Text object is three; otherwise, it displays an alert and returns false.</p>
[codejs]
function checkData () {
   if (document.form1.threeChar.value.length == 3) {
      return true
   } else {
      alert("Enter exactly three characters. " +       
      document.form1.threeChar.value + " is not valid.")
      return false
   }
}
[/codejs]
<h3>switch Statement</h3>
<p>A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement. A switch statement looks as follows:</p>
[codejs]
switch (expression){
   case label : 
      statement;
      break;
   case label : 
      statement;
      break;
   ...
   default : statement;
}
[/codejs]
<p>The program first looks for a label matching the value of expression and then executes the associated statement. If no matching label is found, the program looks for the optional default statement, and if found, executes the associated statement. If no default statement is found, the program continues execution at the statement following the end of switch.
The optional break statement associated with each case label ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch. If break is omitted, the program continues execution at the next statement in the switch statement.</p>
<p><strong>Example.</strong> In the following example, if expr evaluates to "Bananas", the program matches the value with case "Bananas" and executes the associated statement. When break is encountered, the program terminates switch and executes the statement following switch. If break were omitted, the statement for case "Cherries" would also be executed.</p>
[codejs]
switch (expr) {
   case "Oranges" : 
      document.write("Oranges are $0.59 a pound.<BR>"); 
      break; 
   case "Apples" :
      document.write("Apples are $0.32 a pound.<BR>");
      break;
   case "Bananas" : 
      document.write("Bananas are $0.48 a pound.<BR>"); 
      break; 
   case "Cherries" :
      document.write("Cherries are $3.00 a pound.<BR>");
      break; 
   default :
      document.write("Sorry, we are out of " + i + ".<BR>"); 
}
document.write("Is there anything else you'd like?<BR>");
[/codejs]`
    },
    {
        title: 'Loop Statements',
        filter: '2016/mar',  // contains month and year
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
        filter: '2015/aug',  // contains month and year
        day: '21',
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
        filter: '2015/aug',  // contains month and year
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
        filter: '2020/oct',  // contains month and year
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
