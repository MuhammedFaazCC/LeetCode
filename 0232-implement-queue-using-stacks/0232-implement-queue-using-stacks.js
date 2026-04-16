
var MyQueue = function() {
    this.stack = []
    this.a = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.a.length){
        while(this.stack.length){
            this.a.push(this.stack.pop());
        }
    }
    if(!this.a.length){
        console.log("queue is empty")
        return null;
    }
    return this.a.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.a.length){
        return this.a[this.a.length-1]
    }
    return this.stack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.a.length === 0 && this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */