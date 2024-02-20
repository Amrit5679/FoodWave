import { useEffect, useState } from "react";

const useLocalStorage = (key) =>{
    const resp = localStorage.getItem(key);
    let localStorageValue = null;
    if (resp) {
        try {
            localStorageValue = JSON.parse(resp);
        } catch (e) {null}
    }
    const [getLocalStorage,setLocalStorageValue]=useState(localStorageValue || null);
    // const localStorageValue = localStorage.getItem(key);
    // const [getLocalStorage, setLocalStorageValue] = useState(localStorageValue ? JSON.parse(localStorageValue) : null);

    useEffect(() => {
        if (localStorageValue) {
            setLocalStorageValue(localStorageValue);
        } else {
            setLocalStorageValue(null)
        }
    },[])

    const setLocalStorage = (value) =>{
        localStorage.setItem(key,JSON.stringify(value));
    }
    const clearLocalStorage = () =>{
        localStorage.clear();
    }
    return [getLocalStorage,setLocalStorage,clearLocalStorage];
}
export default useLocalStorage;
    
