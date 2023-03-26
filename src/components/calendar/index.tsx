import { format, getDaysInMonth, getMonth, getYear } from 'date-fns'
import React, { useState } from 'react'
import { id } from 'date-fns/locale'

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(2023)

  return (
    <div>
      <div className="text-center mb-8">
        <span
          onClick={() => {
            setCurrentYear((currentYear) => currentYear - 1)
          }}
        >
          Previous
        </span>
        <h1>{currentYear}</h1>
        <span
          onClick={() => {
            setCurrentYear((currentYear) => currentYear + 1)
          }}
        >
          Next
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[...Array(12)].map((_, month) => {
          return (
            <div key={month} className="col-span-1 space-y-4">
              <span>
                {format(new Date(0, month + 1, 0), 'LLLL', { locale: id })}
              </span>
              <div className="grid grid-cols-7">
                {[...Array(getDaysInMonth(new Date(currentYear, month)))].map(
                  (_, date) => {
                    return <span key={date}>{date + 1}</span>
                  }
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar
