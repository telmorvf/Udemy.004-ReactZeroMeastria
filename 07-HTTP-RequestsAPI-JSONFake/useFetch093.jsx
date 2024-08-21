import { useState, useEffect } from "react";

// 092. - Create custom hooks
export const useFetch = (url) => {

  const [data, setData] = useState(null)

  // 093. Refatorando o POST
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)

  const httpConfig = (data, method) => {
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
  // 093. Refatorando o POST

  // retorno o valor que foi inserido no POST
  useEffect(() => {

    const fetch = async () => {
      const res = await fetch(url)
      const json = await res.json()
      setData(json)

    }
    fetch()

  }, [url, callFetch])

  // 093. Refatorando o POST
  useEffect(() => {
    const httpRequest = async () => {
      if (method === 'POST') {
        let fetchOptions = [url, config]
        const res = await fetch(...fetchOptions)
        const json = await res.json()
        setCallFetch(json)
      }
    }
    httpRequest()

  }, [config, method, url])

  return {
    data,
    httpConfig
  }
}