import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import DailyEmployeeSchedule from './DailyEmployeeSchedule';

export default function ScheduleLayout() {
    return (
        <div className='p-2'>
            <DailyEmployeeSchedule/>
        </div>
    );
};