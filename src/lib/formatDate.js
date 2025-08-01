export function formatDate(date) {
    if (!date) {
        return '';
    }

    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return y + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
}