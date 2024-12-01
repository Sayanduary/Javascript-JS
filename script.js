class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  remove(data) {
    if (!this.head) {
      alert("The list is empty.");
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    } else {
      alert("Node not found.");
    }
  }

  visualize() {
    const linkedListDiv = document.getElementById("linkedList");
    linkedListDiv.innerHTML = ""; // Clear the existing visualization

    let current = this.head;
    while (current) {
      // Create node element
      const nodeElement = document.createElement("div");
      nodeElement.className = "node";
      nodeElement.textContent = current.data;

      linkedListDiv.appendChild(nodeElement);

      // Add arrow if there's a next node
      if (current.next) {
        const arrowElement = document.createElement("div");
        arrowElement.className = "arrow";
        arrowElement.textContent = "→";
        linkedListDiv.appendChild(arrowElement);
      }

      current = current.next;
    }
  }
}

// Initialize LinkedList
const list = new LinkedList();

// Button handlers
document.getElementById("addButton").addEventListener("click", () => {
  const data = document.getElementById("dataInput").value;
  if (data) {
    list.append(data);
    list.visualize();
    document.getElementById("dataInput").value = ""; // Clear input
  } else {
    alert("Please enter some data.");
  }
});

document.getElementById("removeButton").addEventListener("click", () => {
  const data = document.getElementById("dataInput").value;
  if (data) {
    list.remove(data);
    list.visualize();
    document.getElementById("dataInput").value = ""; // Clear input
  } else {
    alert("Please enter the data to remove.");
  }
});
