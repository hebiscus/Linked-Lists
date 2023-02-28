export class Node {
    constructor(value, nextNode) {
      this.value = value || null;
      this.nextNode = nextNode || null;
    }
  }

  export class LinkedList {
    constructor(head, length) {
      this.head = null;
      this.length = 0;
    }
    
     prepend(value) {
      if (this.head == null) {
        let newNode = new Node(value, null);
        this.head = newNode;
        this.length++;
      } else {
      let newNode = new Node(value, this.head);
      this.head = newNode;
      this.length++;
      }
    }
    
    append(value) {
      if (firstList.head == null) {
        firstList.prepend(value);
      } else {
        let currentNode = this.head;
        while (currentNode.nextNode != null) {
          currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = new Node(value, null);
        this.length++;
      }
    }
  
    size() {
      return this.length;
    }
  
    firstNode() {
      return this.head;
    }
  
    tail() {
      let currentNode = this.head;
        while (currentNode.nextNode != null) {
          currentNode = currentNode.nextNode;
        }
      return currentNode;
    }
  
    at(index) {
      let currentNode = this.head;
      for (let counter = 0; counter < index; counter++) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  
    pop() {
      let previousNode = this.head;
      while (previousNode.nextNode.nextNode != null) {
          previousNode = previousNode.nextNode;
        }
      previousNode.nextNode = null;
      this.length--;
    }
  
    contains(value) {
        let currentNode = this.head;
          while (currentNode != null) {
            if (currentNode.value == value) {
              return true;
            }
            currentNode = currentNode.nextNode;
          }
        return false;
      }
  
    find(value) {
      let currentNode = this.head;
      let indexCounter = 0;
        while (currentNode != null) {
          if (currentNode.value == value) {
            return indexCounter; 
          }
          currentNode = currentNode.nextNode;
          indexCounter++;
        }
      return "no value found";
    }
  
    toString() {
      let currentNode = this.head;
      let string = "";
      while (currentNode != null) {
        string += `(${currentNode.value}) -> `;
        currentNode = currentNode.nextNode;
      }
      return string + "null";
    }
  }
  
