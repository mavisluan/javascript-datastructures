const a = function() {
    console.log("a", this); // global/window

    const b = {
        func1: function () {
            console.log("b", this);// object b
        }
    }

    const c = {
        func2: () => {
            console.log("c", this) // global/window
        }
    }

    b.func1();
    c.func2();
}

a();

