(function () {
    function Dictionary () {
        this.add = add;
        this.datastore = [];
        this.find = find;
        this.remove = remove;
        this.showAll = showAll;
        this.count = count;
        this.clear = clear;
    }
    function add (key, value) {
        this.datastore[key] = value;
    }
    function find (key) {
        return this.datastore[key];
    }
    function remove (key) {
        delete this.datastore[key];
    }
    function showAll () {
        Object.keys(this.datastore).sort().map(e => {
            console.log(e + ' -> ' + this.datastore[e]);
        })
    } 
    function count () {
        var n = 0;
        for (let key in Object.keys(this.datastore)) {
            ++n;
        }
        return n;
    }  
    function clear () {
        Object.keys(this.datastore).forEach( key => {
            delete this.datastore[key];
        }, this);
    }

    //test code

    const book = new Dictionary();
    book.add('raymond', '123');
    book.add('David', '345');
    book.add('Cynthia', '456');
    book.add('Mike', '723');
    book.add('Jennifer', '987');
    book.add('danny', '012');
    book.add('Jonathan', '666');
    book.showAll ();
})()