// helper function
function collectOddValues(arr){

    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr);

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9]);

// pure recursion
/**
 * Pure recursion tips:
 *
 * For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
 * Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
 */
function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])




