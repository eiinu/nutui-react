import React from 'react'
import { CalendarCard } from '@nutui/nutui-react'

const Demo9 = () => {
  const onChange = (val) => {
    console.log(val)
  }
  return (
    <CalendarCard
      disableDay={(day) => {
        const d = new Date(`${day.year}-${day.month}-${day.date}`).getDay()
        return d === 1 || d === 3
      }}
      onChange={onChange}
    />
  )
}
export default Demo9
