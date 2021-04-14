const Node = require('./Node');

class Stack {
	constructor() {
		this.top = null;
		this.size = 0;
	}

	push(data) {
		// if stack is empty, node will be top
		if (this.top === null) {
			this.top = new Node(data, null);
			this.size++;
			return this.top;
		}
		// if stack already has something, create new node, add data to new node, have pointer point to the top
		const node = new Node(data, this.top);
		this.top = node;
		this.size++;
	}

	pop() {
		// remove the top of the stack; point the pointer to the next item, next item becomes top of stack
		const node = this.top;
		this.top = node.next;
		this.size--;
    console.log(`Removed ${node.data}`);
		return node.data;
	}
}

// displays the top value of the stack
const peek = stack => {
	console.log(`Top value: ${stack.top.data}`);
	return stack.top.data;
};

// checks if stack is empty
const isEmpty = stack => {
  if (stack.size === 0) {
    console.log('Stack is empty');
    return null;
  } else {
    console.log(`Stack size: ${stack.size}`);
    return stack.size;
  }
};

const display = stack => {
  console.log(stack);
}

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
starTrek.pop();
starTrek.pop();
// console.log(starTrek.size);
// console.log(starTrek);

// peek(starTrek);
// isEmpty(starTrek);
