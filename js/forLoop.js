const declareWithVar = () => {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 2000);
    }
}

const declareWithlet = () => {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 2000);
    }
}

declareWithVar(); // 3 3 3
declareWithlet(); // 0 1 2
