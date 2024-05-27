
export default {

    checkIsEmpty(...args) {
        return args.some(arg => arg.trim() === '');
    },

    formatCurrency(value) {
        const parts = value.toFixed(2).split('.');
        const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const decimalPart = parts[1];
        return `$${integerPart}.${decimalPart}`;
    },

    formatDateTime(timestamp){
        const date = new Date(timestamp);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const year = date.getFullYear();

        return `${hours}:${minutes}, ${day}.${month}.${year}`;
    }
};