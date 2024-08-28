import React from 'react'
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const About = () => {

  const { contextValue } = useContext(SomeContext)

  return (
    <div>
      About

      <hr />
      <h2>useContext</h2>
      <p>Valor do useContext: {contextValue}</p>
      <hr />
    </div>
  )
}

export default About
