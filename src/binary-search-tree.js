const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  root() {
   return this.root;
  }

  add(value) {
    this.root = addW(this.root, value);

    function addW(node, value) {
      if (!node){
        return new Node(value);
      }
      if (node.list === value){
        return node;
      }
      if (value < node.value) {
        node.left = addW(node.left, value);
      } else{
        node.right = addW(node.right, value);
      }
      return node;
    } 
  }

  has(value) {
    return searchW (this.root, value);

    function searchW(node, value) {
       if (!node){
        return false;
      } 
      if (node.value === value){
        return true;
      }
      return value < node.value ?
        searchW(node.left, value):
        searchW(node.right, value);
    }
  }

  find(value) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    let found = false;
    while (current && !found){
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }else{
        found = current;
      }
    }  
  }

  remove(value) {
    this.root = removeNode(this.root, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
      }
        if (!node.left) {
          node = node.right;
          return node;
      }
        if (!node.right) {
          node = node.left;
          return node;
      }
      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.value = minFromRight.value;

      node.right = removeNode(node.right, minFromRight.value);

      return node; 
      } 
    } 
  }

  min() {
    if(!this.root){
      return;
    }

    let node = this.root;
    while(node.left) {
      node = node.left;
    }
    return node.value;
  }

  max() {
    if(!this.root){
      return;
    }

    let node = this.root;
    while(node.right) {
      node = node.right;
    }
    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};