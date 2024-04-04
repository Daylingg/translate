//se pone type.d.ts pq es un fichero de definiciones no va a tener typescript

import { type SUPPORT_LANGUAGES, type AUTO_LANGUAGE } from '../constants'

//...el typeof quiere decir todo el obj
export type Language = keyof typeof SUPPORT_LANGUAGES //vamos a tener un typo q se va a llamar lenguage q tiene la llave de supportLanguage
export type AutoLanguage = typeof AUTO_LANGUAGE //tenemos un typo q va a tener el typeof del auto language
export type FromLanguage = Language | AutoLanguage //o es language o es autolanguage...de esta manera se concatena

export const typeAction = {
  INTERCHANGE_LANGUAGES: 'INTERCHANGE_LANGUAGES',
  SET_FROM_LANGUAGE: 'SET_FROM_LANGUAGE',
  SET_TO_LANGUAGE: 'SET_TO_LANGUAGE',
  SET_FROM_TEXT: 'SET_FROM_TEXT',
  SET_RESULT: 'SET_RESULT',
}

//se usa una interfaz en vez de type pq es mas facil de extender
//este es el tipado para el estado inicial
export interface State {
  fromLanguage: FromLanguage | undefine
  toLanguage: Language | undefine
  fromText: string | undefine
  result: string | undefine
  loading: boolean
}

//se concatena las acciones y segun el tipo cambia segun el tipo de accion, cambia el payload
//se hace el tipado de las acciones
export type Action =
  | { type: 'SET_FROM_LANGUAGE'; payload: FromLanguage }
  | {
      type: 'INTERCHANGE_LANGUAGES'
      payload?: never
    } /*Al agregar 'payload?: never' en el tipo 'INTERCHANGE_LANGUAGES', 
  estás indicando que no se debe proporcionar un valor para 'payload' en ese caso.*/
  | { type: 'SET_TO_LANGUAGE'; payload: Language }
  | { type: 'SET_FROM_TEXT'; payload: string }
  | { type: 'SET_RESULT'; payload: string }

//el enum es la forma en q podemos tener un obj como un diccionario al q nos podmos referir y va a ser constante
//se usa muchas veces para no tener q usar los string directamente
export enum SectionType {
  From = 'from',
  To = 'to',
}
