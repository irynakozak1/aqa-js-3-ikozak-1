function divide (numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator can not be null.")
    } else if ((isNaN(numerator) || isNaN(denominator))) {
        throw new Error("Invalid argument. All arguments should be numbers.")
    }

    return numerator / denominator
}

try {
    console.log(divide(5,5))
} catch (e) {
    console.log("Error:", e.message)
} finally {
    console.log("Робота завершена")
}

console.log("------------------------------")

try {
    console.log(divide(5,0))
} catch (e) {
    console.log("Error:", e.message)
} finally {
    console.log("Робота завершена")
}