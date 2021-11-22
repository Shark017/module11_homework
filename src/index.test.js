import { getPercents } from "./index01.js";

describe ('test for getPercents function', () => {

    const percent = 30;
    const number = 200;

    it ('get correct number', () => {
        expect(getPercents(percent, number)).toBe(60); // Функция отработает правильно
    });
});

describe ('test for getPercents function', () => {

    const number = 150;

    it ('missed function parameters', () => {
        expect(getPercents(percent, number)).toBe(150); // Не введен параметр функции
    });
});

describe ('test for getPercents function', () => {

    const percent = 0;
    const number = 200;

    it ('percents equals null', () => {
        expect(getPercents(percent, number)).toBe(0); // На ноль делить нельзя
    });
});

describe ('test for getPercents function', () => {

    const percent = -10;
    const number = 500;

    it ('missed function parameters', () => {
        expect(getPercents(percent, number)).toBe(-50); // Проценты со знаком минус
    });
});

describe ('test for getPercents function', () => {

    const percent01 = 25;
    const number01 = 100;
    const percent02 = 30;
    const number02 = 700;
    const percent03 = 73;
    const number03 = 200;
    const percent04 = 11;
    const number04 = 300;
    const percent05 = 1000;
    const number05 = 56;

    it ('missed function parameters', () => {
        expect(getPercents(percent01, number01)).toBe(25);
        expect(getPercents(percent02, number02)).toBe(210);
        expect(getPercents(percent03, number03)).toBe(146);
        expect(getPercents(percent04, number04)).toBe(33);
        expect(getPercents(percent05, number05)).toBe(560);
    });
});