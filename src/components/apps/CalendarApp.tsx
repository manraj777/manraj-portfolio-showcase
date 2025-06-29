
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface CalendarAppProps {
  onClose: () => void;
}

const CalendarApp: React.FC<CalendarAppProps> = ({ onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const days = getDaysInMonth(currentDate);
  const today = new Date();
  const isToday = (day: number | null) => {
    if (!day) return false;
    return today.getDate() === day && 
           today.getMonth() === currentDate.getMonth() && 
           today.getFullYear() === currentDate.getFullYear();
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-red-500 text-white p-4 flex items-center justify-between">
        <button onClick={() => navigateMonth('prev')} className="p-2 hover:bg-red-600 rounded">
          <ChevronLeft size={20} />
        </button>
        
        <h1 className="text-xl font-semibold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h1>
        
        <button onClick={() => navigateMonth('next')} className="p-2 hover:bg-red-600 rounded">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 p-4">
        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-sm font-semibold text-gray-600 p-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div
              key={index}
              className={`aspect-square flex items-center justify-center text-sm border border-gray-100 hover:bg-gray-50 cursor-pointer ${
                day ? 'text-gray-900' : ''
              } ${
                isToday(day) ? 'bg-red-500 text-white rounded-full font-semibold' : ''
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Events section */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Upcoming Events</h2>
            <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 flex items-center gap-1">
              <Plus size={14} />
              Add Event
            </button>
          </div>
          
          <div className="space-y-2">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
              <div className="font-medium text-blue-900">Portfolio Review Meeting</div>
              <div className="text-sm text-blue-700">Today at 2:00 PM</div>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
              <div className="font-medium text-green-900">Client Presentation</div>
              <div className="text-sm text-green-700">Tomorrow at 10:00 AM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
