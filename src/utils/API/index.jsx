import { useFetch } from "../hooks"

export function useHomeAPI(userId) {
    const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${userId}`)

    return { isLoading, data, error }
}

export function useActivityAPI(userId) {
    const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${userId}/activity`)

    return { isLoading, data, error }
}

export function useAverageTimeAPI(userId) {
    const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${userId}/average-sessions`)

    return { isLoading, data, error }
}

export function useActivitiesScoreAPI(userId) {
    const { data, error } = useFetch(`http://localhost:3000/user/${userId}/activities`)

    return { data, error }
}
