
import React, {useState, useEffect} from 'react'
import '../styles/App.css'
import { boxes } from '../../public/boxes'
import Box from './Box'

function App() {

  const [boxesData, setBoxesData] = useState(null)

  useEffect(() => {
    setBoxesData(boxes)
  },[])

  let boxesJsx 
  if (boxesData) {
    boxesJsx = boxesData.map(box => <Box key={box.id} box={box}/>)
  }

  return (
    <div className="boxes--container">
      {boxesData && boxesJsx}
    </div>
  )
  
  }
  


export default App
