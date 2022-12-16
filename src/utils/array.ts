export const sort = (array: number[]) => array.sort((a, b) => a - b);

export const lastIndex = <T>(array: T[]): number => array.length - 1;
export const lastItem = <T>(array: T[]): T => array[lastIndex(array)];
