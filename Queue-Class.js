const Node = require('./Node');

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(data) {
		const node = new Node(data);

		if (this.first === null) {
			this.first = node;
		}

		if (this.last) {
			this.last.next = node;
		}

		// make the new node the last item on the queue
		this.last = node;
		this.size++;
	}

	dequeue() {
		// if queue is empty, there is nothing to remove
		if (this.first === null) {
			return;
		}
		const node = this.first;
		this.first = this.first.next;

		// if this is the last item in the queue
		if (node === this.last) {
			this.last = null;
		}
		this.size--;
		return node.value;
	}

  getSize() {
    console.log(`Size of queue: ${this.size}`);
  }
}

const peek = queue => {
	console.log(`First value: ${queue.first.data}`);
	return queue.first.data;
};

const isEmpty = queue => {
  if (queue.size === 0) {
    console.log(`Queue is empty`);
    return null;
  }
  console.log(`Queue size: ${queue.size}`);
  return queue.size;
};

const display = queue => {
  console.log(queue);
}

const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
// starTrekQ.getSize();
// isEmpty(starTrekQ);
starTrekQ.dequeue();
display(starTrekQ);

// peek(starTrekQ);

// console.log(starTrekQ);
