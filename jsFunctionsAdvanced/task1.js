function handleNum (number, onEvenNumber, onOddNumber) {
    if (!Number.isInteger(number)) {
        throw new Error("Invalid argument 'number'. It should be integer.")
    }

    number % 2 === 0 ? onEvenNumber() : onOddNumber()
}

function handleEven () {
    console.log("number is even")
}

function handleOdd () {
    console.log("number is odd")
}

try {
    handleNum(100, handleEven, handleOdd)
} catch (e) {
    console.log("Error:", e.message)
}