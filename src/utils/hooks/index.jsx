import { useState, useEffect } from "react"

/**
 * Call to the API and returns data, isLoading for waiting data and error if there is one.
 * @param {string} url 
 * @returns { isLoading, data, error } 
 */
export function useFetch(url) {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return
        async function fetchData() {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    const { errorMessage } = await response.json()
                    throw new Error(errorMessage)
                } else {
                    const data = await response.json()
                    setData(data)
                }
            } catch (err) {
                console.log(err.message)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        setLoading(true)
        fetchData()
    }, [url])

    return { isLoading, data, error }
}