import React, { useState } from 'react'
import { Cell, Popup, Button, CalendarCard } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState(null)
  return (
    <>
      <Cell
        title="点击选择日期"
        description={String(date)}
        onClick={() => setVisible(true)}
      />
      <Popup
        title="选择日期"
        visible={visible}
        position="bottom"
        closeable
        onClose={() => setVisible(false)}
      >
        <CalendarCard value={date} onChange={(d) => setDate(d)} />
        <div style={{ padding: '10px' }}>
          <Button block type="danger" onClick={() => setVisible(false)}>
            确定
          </Button>
        </div>
      </Popup>
    </>
  )
}
export default Demo10
