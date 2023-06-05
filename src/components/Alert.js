import React from 'react'

function Alert(props) {

  const cap=(word)=>
  {
    const upper=word.toUpperCase(word)+ "!"
    return upper
  }

  return (
    props.Alert && 
     <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
  <strong>{cap(props.Alert.type)}</strong> {props.Alert.msg}
  
</div>
   
  )
}

export default Alert
