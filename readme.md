

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: 

getElementById : Finds one specific element by its ID.

getElementsByClassName: Finds all elements that share a certain class name.

querySelector / querySelectorAll: Use CSS selectors to find elements super flexible!


2. How do you **create and insert a new element into the DOM**?

Answer: 

Use document.createElement() to make a new HTML element and We can add text, classes, IDs, or any attributes using setAttribute()
we attach it to the page — usually inside an existing element 
example : 
const container = document.getElementById("container");
container.appendChild(newDiv);


3. What is **Event Bubbling** and how does it work?

Answer:

Event bubbling is the default process in a web page's Document Object Model (DOM) where an event that occurs on a specific HTML element first triggers its own event handler and then "bubbles up" or propagates to its parent, grandparent, and all the way up to the root of the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer:
Event delegation is a design pattern in JavaScript used to efficiently manage and handle events on multiple child elements by attaching a single event listener to a common ancestor element.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: 
preventDefault() stops an event's default browser action, such as a link navigating, while stopPropagation() stops the event from being passed to parent elements in the DOM hierarchy. preventDefault() is for canceling what the browser normally does for an event, whereas stopPropagation() is for controlling the flow of an event through the DOM tree

