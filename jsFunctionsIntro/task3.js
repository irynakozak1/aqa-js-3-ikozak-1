function checkOrder (available, ordered) {
    if (available < ordered) {
        const result1 = 'Your order is too large, we don’t have enough goods'
        return result1
    }

    if (ordered === 0) {
        const result2 = 'Your order is empty'
        return result2
    }

    if (available > ordered) {
        const result3 = 'Your order is accepted'
        return result3
    }
}

console.log(checkOrder(50, 0))