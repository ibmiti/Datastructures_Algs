// O(1) = constant time - it will take the same time every time to perform this action of x
// O(n) = Linear time - the time it takes to run is dependant on the size of input 

function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
    // Big O(2)

    // loops will run at O(n)
    for (let i = 0; i < input.length; i++) { //O(n)
        anotherFunction(); //O(4n) / Big O(2 +  4N)
        let stranger = true; // O(n)
        a++; // O(n) - will run n amount of times 
    }
    return a; //O(1)  - will run once.
}

function anotherFunction(){
    b = 1; // O(1)
    c = 2; // O(1)
    d = 4; // O(1)
    return b,c,d // O(1)
    // Big O(4n)
}

// each O(1) === 1 step 

// so the above alg run time eval or Big(O) notation
// BIG O(3 + 4n)
// Big O (20n)
// the above notation can be reduced to BIG O(n)
// because some contest the notion of evaluating variable instantiation / setting with value as something needing considered
// as they believe the memory allocation and subsequent action of storing bares no overall weight 
// e.g that the thing being considered matters very little - too-little to actually be considered.

