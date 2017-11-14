(function () {
    //  单链表
    function Element (val) {
        this.element = val;
        this.next = null;
    }
    function ElementsList () {
        this.head = new Element('head');
        this.find = find;
        this.prev = prev;
        this.insertAfter = insertAfter;
        this.remove = remove;
        this.add = add;
        this.display = display;
    }
    function add (element) {
        let result = this.head;
        while (result.next !== null) {
            result = result.next;
        }
        result.next = new Element(element);
        return this;
    }
    function display () {
        var result = this.head;
        let strLog = '';
        while (result && (result.next || result.next === null)) {
            strLog += (result.element + '->');
            result = result.next;
        }
        strLog += 'null';
        console.log(strLog);
    }
    function find (element) {
        let result = this.head;
        while (result.element !== element) {
            result = result.next;
            if (result === null) {
                return '_nothingness_';
            }
        };
        return result;
    }
    function prev (element) {
        let result = this.head;
        while (result.next.element !== element) {
            result = result.next;
            if (result === null) {
                return '_nothingness_';
            }
        }
        return result;
    }
    function remove (element) {
        const prevElement = this.prev(element);
        let currentElement = prevElement.next;
        if (prevElement === '_nothingness_') {
            return '_nothingness_';
        };
        prevElement.next = currentElement.next;
        currentElement = null;
    }
    function insertAfter (current, element) {
        const currentElement = this.find(current);
        const nextElement = currentElement.next;
        currentElement.next = new Element(element);
        currentElement.next.next = nextElement;
    }

    const list = new ElementsList();
    list.add('banana').add('orange').add('apple');
    list.remove('orange');
    list.insertAfter('banana', 'pear');
})()