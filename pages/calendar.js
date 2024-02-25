import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// https://fullcalendar.io/docs/react
export default function Calendar() {
  return (
    <FullCalendar
    plugins={[ dayGridPlugin ]}
    initialView="dayGridMonth"
    weekends={false}
    events={[
    { title: 'Maths', date: '2024-02-12' },
    { title: 'Physics', date: '2024-04-02' }
  ]}
/>
  )
}