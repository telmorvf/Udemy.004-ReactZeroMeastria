// 116. change context
import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

import React from 'react'

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter
      </button>
      {/* 116. change context */}

    </div>
  )
}

export default ChangeCounter
