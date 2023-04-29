
import React from 'react'
import '../styles/App.css'

import { boxes } from '../../public/boxes'
import Box from './Box'


function App() {

  const [boxData, setBoxData] = React.useState(boxes)

const boxesJsx = boxData.map((box) => {
  return <Box />
})


  return (
    <>
      <p>Joshua is here</p>
      {boxesJsx}
    </>
  )
}

export default App