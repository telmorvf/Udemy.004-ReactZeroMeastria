import { useState, useEffect } from "react";

// 092. - Create custom hooks
export const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)    // get data from api
      const json = await res.json()   // converte json to jsx
      setData(json)                   // coloca os dados no data <- setdata(json)
    }
    fetchData()

  }, [url])

  return { data }
}