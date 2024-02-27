import { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import RNPickerSelect from "react-native-picker-select";


export const CalendarApp = () => {
    LocaleConfig.locales['br'] = {
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ],
        monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abril', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
        dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'],
        dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
        today: "Hoje"
    };
    LocaleConfig.defaultLocale = 'br';


    const [selected, setSelected] = useState('');

    return (
        <>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
            />

            {/* <RNPickerSelect/> */}
        </>
    )
}