export const dateStringToDate = (dateString: string): Date => {
    //20/12/2018
    let dateParts = dateString.split('/').map((value: string): number => {
        return parseInt(value);
    })
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

}