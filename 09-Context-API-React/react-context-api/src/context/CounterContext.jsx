// 114. criar context
import { createContext, useState } from "react"

export const CounterContext = createContext()


// 115. criar provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5)

  return (
    <CounterContext.Provider value={{ counter, setCounter }} >
      {children}
    </CounterContext.Provider>
  )
}
