import React from 'react'

const Alert = ({type,text}) => {
  return <div className={'alert alert-{type}ETB'}>{text}</div>
}

export default Alert