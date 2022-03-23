import { a } from '@/demo/text';
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
