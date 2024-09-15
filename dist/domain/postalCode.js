class PostalCode {
    constructor(value) {
        this.value = value;
        if (!/^\d{7}$/.test(value)) {
            throw new Error(`Value(=${value}) must be a 7-digit number.`);
        }
    }
}
