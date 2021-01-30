import React from 'react';
import { View, Text } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';

const Tarefas = () => {

    return (
        <CalendarList
            horizontal={true}
            onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
            pastScrollRange={50}
            futureScrollRange={50}
            scrollEnabled={true}
            showScrollIndicator={true}
            theme={{
                calendarBackground: '#4F7DDF',
                monthTextColor: '#fff',
                dayTextColor: '#fff',
                backgroundColor: '#ffffff',
            }}
        />
    );
}

export default Tarefas;