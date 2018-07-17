// JavaScript source code
var list = {
    value: undefined,
    count: 0,
    rest: null,
    prepend: function (value) {
        this.add(value, this);
    },
    add: function (value, curNode) {
        if (curNode.value == undefined) {
            curNode.value = value;
            this.count++;
            return;
        }
        if (curNode.rest == null) {
            curNode.rest = {
                value: value,
                rest: null
            }
            this.count++;
            return;
        }
        if (curNode.rest != null) {
            this.add(value, curNode.rest);
        }
    },
    nth: function (index) {
        var resultVal = undefined;
        var tempList = this;
        if (index == 0) {
            return tempList.value;
        }
        var count = 0;
        for (var node = this; node; node = node.rest) {
            if (count == index) {
                return node.value;
            }
            count++;
        }
    }
}

list.prepend(1);
list.prepend(4);
list.prepend(7);
list.prepend(9);
list.prepend(3);
console.log(list.nth(2));
