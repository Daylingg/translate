//import * as React from 'react'
import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORT_LANGUAGES } from '../constants'
import { SectionType, type FromLanguage, type Language } from '../types/types.d'

//tipamos las props y decimos q va a ser de tipo lenguage
/*interface Props {
  onChange: (language: Language) => void
}*/
//parametrizando los tipos
type Props =
  //tenemos un tipo q es from q va a tener como value fromlanguage y al hacer onchange recibe el fromlenguaje q no devuleve nada
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void } //tenemos un tipo q es to q va a tener como value language y al hacer onchange recibe el lenguaje q no devuleve nada

export const LanguageSelector = ({ onChange, type, value }: Props) => {

  //e: React.ChangeEvent<HTMLSelectElement> esto es un evento de  cambio de evento de react y se saca del elemento HTMLSelectElement
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Language) //llamamos al onchange pasandole el valor...le decimos q el estring q espera es de tipo lenguage
    //console.log(e.target.value)
  }

  //console.log(Object.entries(SUPPORT_LANGUAGES))
  return (
    <Form.Select aria-label="Select language" onChange={handleChange} value={value}>

      {//si el tipo es from en el option q aparezca el detectar idioma con el value de auto
        type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar Idioma</option>
      }
      {
        //vamos a trabajar con un obj q tiene los lenguages por lo q sacamos las entries para poder hacer un map
        Object.entries(SUPPORT_LANGUAGES).map(([key, literal]) => (
          <option key={key} value={key}>
            {literal}
          </option>
        ))
      }
    </Form.Select>
  )
}
