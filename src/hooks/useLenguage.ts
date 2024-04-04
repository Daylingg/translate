import { useReducer } from 'react'
import { translateReducer } from '../reducer/reducer'
import { FromLanguage, Language, State, type Action } from '../types/types.d'

type Dispatch = React.Dispatch<Action>

//1-crear estado inicial
const initialState: State = {
  fromLanguage: 'auto', //lenguage de inicio...en auto
  toLanguage: 'en', //el primeo sera ingles
  fromText: '', //donde escribimos
  result: '', //el texto resultante
  loading: false, //en lo q va cargando
}

//creamos un hook q sea el q llame al reducer translateReducer
export const useLenguage = () => {
  //3-usar useReducer
  // estos elementos  { fromLanguage, toLanguage, fromText, result, loading } se desestructuran del estado
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer<React.Reducer<State, Action>>(
      translateReducer,
      initialState
    ) as [State, Dispatch]

  //de esta forma no es necesa rio devolver el dispatch directamente en el hook
  const interchangeLanguage = () => {
    dispatch({
      type: 'INTERCHANGE_LANGUAGES',
    })
  }

  //solo se puede cambiar a los lenguages establecidos en language
  const setToLanguage = (payload: Language) => {
    dispatch({
      type: 'SET_TO_LANGUAGE',
      payload,
    })
  }

  const setFromText = (payload: string) => {
    dispatch({
      type: 'SET_FROM_TEXT',
      payload,
    })
  }

  const setResult = (payload: string) => {
    dispatch({
      type: 'SET_RESULT',
      payload,
    })
  }

  //el payload es fromlanguage ya q puede tener idioma auto o cualquiera de los q se le permita seleccionar
  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({
      type: 'SET_FROM_LANGUAGE',
      payload,
    })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguage,
    setFromLanguage,
    setFromText,
    setResult,
    setToLanguage,
  }
}
