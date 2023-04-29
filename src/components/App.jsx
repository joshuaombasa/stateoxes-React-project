
import React from 'react'
import '../styles/App.css'

import { boxes } from '../../public/boxes'
import Box from './Box'


function App() {

  const [boxData, setBoxData] = React.useState(boxes)

  const boxesJsx = boxData.map((box) => {
    return <Box
      id={box.id}
      key={box.id}
      on={box.on}
      handleClick={toggle}
    />
  })

  function toggle(id) {
    setBoxData((prevBoxData) => {
      return prevBoxData.map((box) => {
        return box.id === id? {...box, on: !box.on} : box
      })
    })
  }


  return (
    <div className='boxes--container'>
      {boxesJsx}
    </div>
  )
}

export default App
