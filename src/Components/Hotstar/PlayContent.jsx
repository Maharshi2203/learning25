import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayContent = () => {
 
//     varname = useParams().id -->id??? because
//   <Route path='/watch/:id' element = {<PlayContent/>}></Route>

    const data = useParams().id

    return (
    <div style={{textAlign:'center'}}>
        <h1>Watching...{data}</h1>
    </div>
  )
}
