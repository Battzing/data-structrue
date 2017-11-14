(function () {
    //生成列表内部元素节点(generate inner data)
    function Element (val) {
        this.element = val;
        this.next = null;
    }

    //循环链表数据结构(circle linked-list data structrue)
    function ElementsList () {
        this.head = new Element('head');
        this.head.next = this.head;
        this.find = find;
        this.prev = prev;
        this.insertAfter = insertAfter;
        this.remove = remove;
        this.display = display;
        this.back = back;
        this.programQuestion = programQuestion;
    }

    //log 内部数据 (print inner data)
    function display () {
        var result = this.head.next;
        let strLog = '';
        while (result && result !== this.find('head')) {
            strLog += (result.element + '->');
            result = result.next;
        }
        console.log(strLog);
    }

    // 查找当前数据 (search current element)
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

    //查找前一个数据 (search prev element)
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
    
    //删除传入数据 (delete element)
    function remove (element) {
        const prevElement = this.prev(element);
        let currentElement = prevElement.next;
        if (prevElement === '_nothingness_') {
            return '_nothingness_';
        };
        prevElement.next = currentElement.next;
        currentElement = null;
    }
    
    //动态插入数据 (dynamic insert element)
    function insertAfter (element, current) {
        const currentElement = this.find(current);
        const nextElement = currentElement.next;
        currentElement.next = new Element(element);
        currentElement.next.next = nextElement;
        return this;
    }

    // 向后移动 (move to after several step)
    function back (current, step) {
        let currentElement = this.find(current);
        for (var i = 0; i < step; i += 1) {
            currentElement = currentElement.next;
            if (currentElement === this.find('head')) {
                currentElement = currentElement.next;
            }
        }
        return currentElement;
    }

    //如题 (practical question)
    function programQuestion (n, m) {
        for (let i = 0; i < n; i += 1 ) {
            if (i !== 0) {
                this.insertAfter(i+1 ,i);
            } else {
                this.insertAfter(1, 'head');
            }
        }
        this.display();
        let current = 1;
        let currentSikp = null;
        while (currentSikp !== this.find('head')) {
            let removeElement = this.back(current, m - 1);
            current = removeElement.next.element;
            this.remove(removeElement.element);
            this.display();

            for (let i = 0; i < m; i += 1) {
                if (i === 0) {
                    currentSikp = this.head.next;
                } else {
                    currentSikp = currentSikp.next;
                }
            }
        }
    }

    //测试代码 (test code)
    const list = new ElementsList();
    list.programQuestion(40, 3);
})()