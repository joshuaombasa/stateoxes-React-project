
import React, {useState, useEffect} from 'react'
import '../styles/App.css'
import { boxes } from '../../public/boxes'
import Box from './Box'

function App() {

  const [boxesData, setBoxesData] = useState(null)


  function toggle(id) {
    setBoxesData(prevBoxesData => {
      return prevBoxesData.map(item => {
        return item.id === id ? {...item, on: !item.on} : item
      } )
    })
  }

  useEffect(() => {
    setBoxesData(boxes)
  },[])

  let boxesJsx 
  if (boxesData) {
    boxesJsx = boxesData.map(box => <Box key={box.id} box={box} toggle={toggle}/>)
  }

  return (
    <div className="boxes--container">
      {boxesData && boxesJsx}
    </div>
  )
  
  }
  


export default App
