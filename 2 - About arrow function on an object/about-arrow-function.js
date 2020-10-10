


// Arrow function and the this Keyword
// In regular function expressions, the this keyword is bound to different value based on the context in which the function is called:

// A new object in case of a constructor.
// undefined in strict mode function calls.
// The parent object if the function is called as an object method.
// For example, Here is a person object which has fullName() function:

const person = {
    firstName: 'Mike',
    lastName: 'Lilly',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

person.fullName(); // Mike Lilly


// Calling fullName() method of person object returns the full name of the person.

// However, an arrow function does not have the own this and is lexically bound. It essentially means that the this scope is inherited from the code that contains the arrow function. So while looking up for this which is not present in the current scope, the ES6 arrow function will use the value of this in the scope in which it was defined. That is why the call to fullName() will not work and will return an undefined value:

const person = {
    firstName: 'Mike',
    lastName: 'Lilly',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`;
    }
};

person.fullName(); // undefined undefined


// Become of this arrow functions are not suited to object methods. You should also not use them as constructors either to avoid errors.

// DOM Event Handling
// Arrow functions can be a problem while handling events. DOM event listeners set this to be the target element. Now, if you use arrow function for callbacks, the this keyword won't be bound to the target element, but rather bound to its parent scope.

const button = document.getElementsByTagName('button')
button.addEventListener('click', () => {
  this.classList.toggle('blur');
});

// Now if you click the button, you will get a TypeError because this refers to window in this scope. If you need a dynamic context for callback function, a regular function expression is required:

const button = document.getElementsByTagName('button')
button.addEventListener('click', function() {
  this.classList.toggle('blur');
});

// Conclusion
// Arrow functions provide a new way of writing concise functions in ES6. They are shorter, have no binding of this keyword, implicitly return a value (when the concise body is used), and are widely used in modern codebases. Arrow functions are inappropriate as object methods, and cannot be used as constructors.