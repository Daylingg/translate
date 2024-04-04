import { AUTO_LANGUAGE } from '../constants'
import { type Action, type State, typeAction } from '../types/types.d'

//2-crear reducer
export const translateReducer = (state: State, action: Action) => {
  const { type: actionType } = action

  switch (actionType) {
    //intercambiar lenguage
    case typeAction.INTERCHANGE_LANGUAGES: {
      if (state.fromLanguage === AUTO_LANGUAGE) return state

      const loading = state.fromText !== ''

      return {
        //devolvemos un nuevo estado donde
        ...state,
        fromLanguage: state.toLanguage, //el from sera el tolenguage
        toLanguage: state.fromLanguage, //y el to sera el fromlenguage
        result: '',
        loading,
      }
    }

    //cambiar el lenguage de origen
    case typeAction.SET_FROM_LANGUAGE: {
      if (state.fromLanguage === action.payload) return state
      const loading = state.fromText !== ''

      return {
        ...state, //devolver el mismo estado pero
        fromLanguage: action.payload, //el fromlenguage viene del payload de la accion
        result: '',
        loading,
      }
    }

    //cambiar el lenguage de destino
    case typeAction.SET_TO_LANGUAGE: {
      if (state.toLanguage === action.payload) return state
      const loading = state.fromText !== '' //loading depende si tiene un fromtext

      return {
        ...state, //devolver el  estado pero
        toLanguage: action.payload, //el toLanguage viene del payload
        result: '',
        loading,
      }
    }

    //escribir el texto q queremos traducir
    case typeAction.SET_FROM_TEXT: {
      const loading = action.payload !== '' //sera true si el action.payload es diferente a un string vacio

      return {
        ...state, //devolver el  estado pero
        loading, //cuando se esta escribiendo el loading pasa a true
        fromText: action.payload, //el fromText viene del payload
        result: '', //cada vez q escribe el usuario el resultado se muestra como una cadena de texto vacia
      }
    }

    //recibir el resultado de la traduccion
    case typeAction.SET_RESULT: {
      return {
        ...state, //devolver el estado pero
        loading: false, //cuando aparece el resultado el loading regresa a false
        result: action.payload, //el resultado viene del payload
      }
    }

    default:
      return state
  }
}

//3-usar useReducer en el lugar q se va a ejecutar
