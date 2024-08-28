import { createContext } from 'react'

export const SomeContext = createContext()

export const HookUseContext = ({ children }) => {

  const contextValue = 'O meu valor geral'

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  )
}