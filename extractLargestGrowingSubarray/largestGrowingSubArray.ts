export default (array: number[]) : number[] => {
    let result: number[] = [];
    let temp: number[] = [];

    for(let i=0, j=i+1; i<array.length; i++, j++) {
        if(typeof array[j] === 'undefined' || array[j] <= array[i])
        {
            temp.length >= result.length ? result = [...temp] : null;
            temp = [];
            continue;
        }
        
        temp.indexOf(array[i]) === -1 ? temp.push(array[i]) : null;
        temp.push(array[j]);
    }

    return result;
};