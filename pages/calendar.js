import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import axios from 'axios'; // Import axios for making HTTP requests
// https://fullcalendar.io/docs/react
export default function Calendar() {

  const [events, setEvents] = useState([]);
  var username = 'rs13';

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.post('http://localhost:4200/getforuser',{username});
        const eventData = response.data.data.map(subtask => ({
          title: subtask.subtaskname,
          date: new Date(subtask.subtaskdate).toISOString().split('T')[0] // Convert date to ISO format
        }));
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <FullCalendar
    plugins={[ dayGridPlugin ]}
    initialView="dayGridMonth"
    weekends={false}
    events={events}
/>
  )
}