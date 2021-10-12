export default class DatesUtil {

    static monthDays(): Array<number> {
        const days = [];

        for (let i = 1; i <= 31; i++) {
            days.push(i);
        }

        return days;
    }

    static hours(): Array<number> {
        const hours = [];

        for (let i = 0; i <= 23; i++) {
            hours.push(i);
        }

        return hours;
    }

    static minutes(): Array<number> {
        const min = [];

        for (let i = 0; i <= 59; i++) {
            min.push(i);
        }

        return min;
    }

    // Index 0 para todos para acompanhar o indice posicional do vetor
    static months: Array<any> = [
        { value: 0, name: 'Todos' },
        { value: 1, name: 'Janeiro' },
        { value: 2, name: 'Fevereiro' },
        { value: 3, name: 'Março' },
        { value: 4, name: 'Abril' },
        { value: 5, name: 'Maio' },
        { value: 6, name: 'Junho' },
        { value: 7, name: 'Julho' },
        { value: 8, name: 'Agosto' },
        { value: 9, name: 'Setembro' },
        { value: 10, name: 'Outubro' },
        { value: 11, name: 'Novembro' },
        { value: 12, name: 'Dezembro' }
    ];
    static weekDays: Array<any> = [
        { value: -1, name: 'Todos' },
        { value: 0, name: 'Domingo' },
        { value: 1, name: 'Segunda-feira' },
        { value: 2, name: 'Terça-feira' },
        { value: 3, name: 'Quarta-feira' },
        { value: 4, name: 'Quinta-feira' },
        { value: 5, name: 'Sexta-feira' },
        { value: 6, name: 'Sábado' },
    ];
}
