import { useState, useEffect } from "react";

// 092. - Create custom hooks
export const useFetch = (url) => {
  const [data, setDataFetch] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch(url)
      const json = await res.json()
      setDataFetch(json)

    }
    fetchData()

  }, [url])

  return { data }
}