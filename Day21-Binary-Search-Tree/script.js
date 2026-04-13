class bstNode {
  constructor (value){
    this.value = value,
    this.left = null,
    this.right = null
  }

  insert(value){
    if(value === this.value) return;

    if(value < this.value){
        if(this.left === null){
           this.left = new bstNode(value);
        }else{
            this.left.insert(value);
        }
    }else{
       if(this.right === null){
          this.right = new bstNode(value);
       }else{
        this.right.insert(value);
       }
    }
  }

  search(value){
    if(value < this.value){
        this.left = new bstNode(value);
        console.log(value, new bstNode(value));
    }else{
        this.right = new bstNode(value);
        console.log(value, new bstNode(value));
    }
  }
}

const myBST = new bstNode(8);
myBST.insert(4);
myBST.insert(7);
myBST.insert(8);

console.log(myBST)