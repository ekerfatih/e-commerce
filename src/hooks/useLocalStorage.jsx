import { useEffect, useRef, useState } from "react";

function useLocalStorage(key, initialValue) {
    const initRef = useRef(initialValue);

    const base = () =>
        typeof initRef.current === "function" ? initRef.current() : initRef.current;

    const safeParse = (raw) => {
        try { return JSON.parse(raw); } catch { return raw; }
    };

    const read = () => {
        if (typeof window === "undefined") return base();
        const raw = window.localStorage.getItem(key);
        return raw !== null ? safeParse(raw) : base();
    };

    const [value, setValue] = useState(read);

    useEffect(() => {
        setValue(read());
    }, [key]);

    useEffect(() => {
        const onStorage = (e) => {
            if (e.key !== key) return;
            setValue(e.newValue !== null ? safeParse(e.newValue) : base());
        };
        const onLocal = (e) => {
            if (e.detail?.key === key) setValue(e.detail.value);
        };
        window.addEventListener("storage", onStorage);
        window.addEventListener("local-storage", onLocal);
        return () => {
            window.removeEventListener("storage", onStorage);
            window.removeEventListener("local-storage", onLocal);
        };
    }, [key]);

    const setStored = (updater) => {
        const next = typeof updater === "function" ? updater(value) : updater;
        setValue(next);
        try {
            if (next === undefined || next === null) {
                window.localStorage.removeItem(key);
            } else if (typeof next === "string") {
                window.localStorage.setItem(key, next);
            } else {
                window.localStorage.setItem(key, JSON.stringify(next));
            }
            window.dispatchEvent(new CustomEvent("local-storage", { detail: { key, value: next } }));
        } catch {}
    };

    const remove = () => {
        try { window.localStorage.removeItem(key); } catch {}
        const b = base();
        setValue(b);
        window.dispatchEvent(new CustomEvent("local-storage", { detail: { key, value: b } }));
    };

    return [value, setStored, remove];
}

export default useLocalStorage;
