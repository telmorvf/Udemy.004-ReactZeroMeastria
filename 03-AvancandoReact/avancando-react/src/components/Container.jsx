import React from 'react'

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h3>Este é o título do container</h3>
      {children}
      <p>O valor é: {myValue}</p>
    </div>

  )
}

export default Container
