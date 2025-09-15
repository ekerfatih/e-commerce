import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [stored, setStored] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item !== null ? safeParse(item) : initialValue
        } catch {
            return initialValue
        }
    })

    const setValue = (value) => {
        try {
            const val = value instanceof Function ? value(stored) : value
            setStored(val)
            window.localStorage.setItem(key, JSON.stringify(val))
        } catch {}
    }

    const removeValue = () => {
        try {
            window.localStorage.removeItem(key)
            setStored(initialValue)
        } catch {}
    }

    return [stored, setValue, removeValue]
}

function safeParse(value) {
    try {
        return JSON.parse(value)
    } catch {
        return value
    }
}
