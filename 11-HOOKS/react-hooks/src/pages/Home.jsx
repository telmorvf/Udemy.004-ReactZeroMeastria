// Hooks
import HookUseState from '../components/HookUseState'
import HookReducer from '../components/HookReducer'
import HoookUseEffect from '../components/HoookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseEffectLayout from '../components/HookUseEffectLayout'
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookCustom from '../components/HookCustom'

//useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'


const Home = () => {

  const { contextValue } = useContext(SomeContext)

  return (
    <div>
      {/* 164-4 useState: usado para quando necessitamos de alterar um valor e renderizar o componente para que esse valor seja exiido valor no ecrã */}
      <HookUseState />

      {/* 166-7 useReducer com actions (alterar vários valores)*/}
      <HookReducer />

      {/* 168-169-170 useeEfect - alterar na DOM e equisições http, cuidado loop infinito, condicionando a um array de dependencias     */}
      {/*171. useCleanup  */}
      <HoookUseEffect />

      {/* 172 useStateContext - Variáveis globais */}
      <hr />
      <h2>useContext: valores Globais da aplicação</h2>
      <p>Valor do useContext: {contextValue}</p>
      <hr />

      {/* 173 useRef */}
      <HookUseRef />
      {/* 175 useCallback */}
      <HookUseCallback />
      {/* 176 useMemo */}
      <HookUseMemo />
      {/* 177 useLayoutEffect */}
      <HookUseEffectLayout />
      {/* 177 useImperativeHandle */}
      <HookUseImperativeHandle />


      <HookCustom />

    </div>
  )
}

export default Home
