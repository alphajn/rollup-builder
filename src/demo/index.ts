import { a } from '@/demo/text.ts';
import { name } from '../../package.json';

export const log = (arg: string): string => {
    console.log(arg, name);
    return name;
};

export const haha = () => {
    console.warn('haha');

    return 'haha';
};

export const logA = () => {
    console.log(a());
    return a();
};

const arr: number[] = [1, 2, 3, 4, 5];

arr.forEach((item) => {
    console.log(item);
});

console.log(arr.includes(2));
