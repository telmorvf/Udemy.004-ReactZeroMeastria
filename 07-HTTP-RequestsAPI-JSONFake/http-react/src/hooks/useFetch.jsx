import { useState, useEffect } from "react";

// 092. - Create custom hooks
export const useFetch = (url) => {
  const [data, setData] = useState(null)

  // 093. Reformulando o POST
  const [config, setConfig] = useState(null)          // config method, headrs
  const [method, setMethod] = useState(null)          // method used: GET POST
  const [callFetch, setCallFetch] = useState(false)   // sempre que alterar vou recarregar o método

  // 093. Reformulando o POST
  const httpConfig = (data, method) => {
    //debugger
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      setMethod(method)
    }
  }

  // 092. - Create custom hooks
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)    // get data from api
      const json = await res.json()   // converte json to jsx
      setData(json)                   // coloca os dados no data <- setdata(json)
    }
    fetchData()

  }, [url, callFetch])

  // 093. Reformulando o POST
  useEffect(() => {
    //debugger
    const httpRequest = async () => {
      if (method === 'POST') {
        let fetchOptions = [url, config]           // array com url e configurações
        const res = await fetch(...fetchOptions)
        const json = await res.json()
        setCallFetch(json)
      }
    }
    httpRequest()
  }, [config, method, url])

  return { data, httpConfig, }
}