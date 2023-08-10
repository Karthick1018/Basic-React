/*import React from 'react'

 const Event = () => {
    const alertHandle =()=>alert("hai")

  return (
    <div>
        <button type='button' onClick={alertHandle}>click</button>
    </div>
  )
}
export default Event;*/

import React from 'react'

export const Event = () => {
    const alertHandle=()=>alert("You enter the key")
  return (
    <div>
        <label for="text">Emter the value:</label>
        <input type='text'placeholder='Press any key' onKeyPress={alertHandle}></input>
    </div>
  )
}
export default Event;





