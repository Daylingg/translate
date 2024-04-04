
//el debounce es para esperar un tiempo antes de ser cambiado...esto es para evitar q se busque al escribir sino q busque cuando pase un tiempo x

import { useEffect, useState } from "react"

//recibe el valor q queremos obserbar si cambia y un delay q seria el tiempo..en este caso por defecto pusimos 500 milisegundos
export function useDebounce <T>(value:T,delay=500) {//se pone de tipo T ...recibe el tipo por parametro
  
  const [debounceValue, setDebounceValue] = useState(value)
  
  useEffect(() => {
    const time=setTimeout(() => {
      setDebounceValue(value) //se ejecuta hasta q pase el tiempo q se pasa
    }, delay);
  
    return () => {
      clearTimeout(time) //a medida q se va escribiendo se va limpiando el time hasta q se pone la ultima letra
    }
  }, [value,delay])

  return debounceValue
  
}
