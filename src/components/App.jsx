
import React from 'react'
import '../styles/App.css'

import { boxes } from '../../public/boxes'
import Box from './Box'


function App() {

  const [boxData, setBoxData] = React.useState(boxes)

  const boxesJsx = boxData.map((box) => {
    return <Box
               box={box}
               key={box.id}
               handleClick={toggle}
               toggle={() => toggle(box.id)}
           />
  })

  React.useEffect(() => {
    console.log('effect happened')
    return () => {console.log('watch this')}
    
  }, [])

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
