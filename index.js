a = 'global'

function myFn() {
    //a = 'myFn'
    function innerFn() {
        a = 'innerFn'
        console.log(a) // 
    }
    innerFn()
}

myFn()