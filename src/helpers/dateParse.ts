export const  formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;

}
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;