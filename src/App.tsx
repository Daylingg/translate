import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useLenguage } from './hooks/useLenguage'
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from './constants'
import { ArrowIcon, ClipboardIcon, SpeakerIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types/types.d'
import { TextArea } from './components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'
import { useDebounce } from './hooks/useDebounce'

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguage,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  } = useLenguage()

  const debounceFromText = useDebounce(fromText, 300)

  useEffect(() => {
    if (debounceFromText === '') return

    translate({ fromLanguage, toLanguage, text: debounceFromText })
      .then((result) => {
        //console.log(result)
        if (result == null) return //esto compara si es null o undefine

        setResult(result)
      })
      .catch(() => {
        setResult('Error')
      })
  }, [debounceFromText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeak = () => {
    const languageKey = toLanguage as keyof typeof VOICE_FOR_LANGUAGE
    if (languageKey in VOICE_FOR_LANGUAGE) {
      const utterance = new SpeechSynthesisUtterance(result)
      utterance.lang = VOICE_FOR_LANGUAGE[languageKey]
      utterance.rate = 0.9
      speechSynthesis.speak(utterance)
    } else {
      console.error(`Invalid toLanguage: ${toLanguage}`)
    }
  }

  return (
    <Container fluid>
      <h1>Google Translation</h1>
      <Row>
        <Col md={5} lg={5} xs={12}>
          <Stack gap={2}>
            <h2>From</h2>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />

            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs="auto">
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguage}
          >
            <ArrowIcon />
          </Button>
        </Col>

        <Col md={5} lg={5} xs={12}>
          <Stack gap={2}>
            <h2>To</h2>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />

            <div style={{ position: 'relative' }}>
              <TextArea
                type={SectionType.To}
                loading={loading}
                value={result}
                onChange={setResult}
              />

              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  display: 'flex',
                }}
              >
                <Button variant="link" onClick={handleClipboard}>
                  <ClipboardIcon />
                </Button>
                <Button variant="link" onClick={handleSpeak}>
                  <SpeakerIcon />
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
