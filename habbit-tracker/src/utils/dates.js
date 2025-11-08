export function getTodayFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}

/**
 * Return today's date in French format
 * @param {*} date 
 * @returns string
 */
export function getTodayFrenchFormat(date) {

    const options = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };

    const formattedDate = date.toLocaleDateString('fr-FR', options);

    const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

    const result = capitalize(formattedDate);

    return result;
}