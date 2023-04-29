
import React from 'react'
import '../styles/App.css'

import { boxes } from '../../public/boxes'
import Box from './Box'


function App() {

  const [boxData, setBoxData] = React.useState(boxes)

const boxesJsx = boxData.map((box) => {
  return <Box key={box.id} on={box.on}/>
})


  return (
    <div className='boxes--container'>
      {boxesJsx}
    </div>
  )
}

export default App
