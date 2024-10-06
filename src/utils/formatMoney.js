const numberWithCommas = (number) => {
    if (number == null || isNaN(number)) {
        console.error('Invalid number:', number);
        return '';
    }
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export { numberWithCommas }