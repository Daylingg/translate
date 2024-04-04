import * as React from "react"
import { Form } from "react-bootstrap"
import { SectionType } from "../types/types.d"



interface Props {
  type: SectionType,
  loading?: boolean,
  value: string,
  onChange: (value: string) => void
}

const commonStyle = { border: '1px solid', borderColor: '#80808061', height: '200px' }


const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Cargando...'
  return 'Traduccion'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {

  const styles = type === SectionType.From
    ? commonStyle
    : { ...commonStyle, backgroundColor: '#f5f5f5' }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      disabled={type === SectionType.To}
      autoFocus={type === SectionType.From /*si el type es SectionType.From ahi va el foco*/}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange} />
  )
}
