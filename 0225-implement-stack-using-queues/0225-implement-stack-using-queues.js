
var MyStack = function() {
    this.queue = [];
    this.a = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.empty()){
        console.log("stack is empty;");
        return
    }
    while(this.queue.length > 1){
        this.a.push(this.queue.shift());
    }
    let poppedEl = this.queue.shift();
    while(this.a.length){
        this.queue.push(this.a.shift());
    }
    return poppedEl;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[this.queue.length-1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */