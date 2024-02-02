function checkOrder (available, ordered) {
    if (available < ordered) {
        return 'Your order is too large, we don’t have enough goods'
    }

    if (ordered === 0) {
        return 'Your order is empty'
    }

}

console.log(checkOrder(50, 0))