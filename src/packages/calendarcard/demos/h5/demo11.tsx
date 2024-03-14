import React, { useRef } from 'react'
import { Space, Button, CalendarCard } from '@nutui/nutui-react'

const Demo11 = () => {
  const CalendarCardRef = useRef(null)
  return (
    <>
      <Space>
        <Button onClick={() => CalendarCardRef.current?.jump(1)}>+ 1</Button>
        <Button onClick={() => CalendarCardRef.current?.jump(12)}>+ 12</Button>
        <Button onClick={() => CalendarCardRef.current?.jump(-12)}>- 12</Button>
        <Button onClick={() => CalendarCardRef.current?.jumpTo(2023, 1)}>
          2023 01
        </Button>
      </Space>
      <CalendarCard ref={CalendarCardRef} />
    </>
  )
}
export default Demo11
