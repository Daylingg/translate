import { test, expect } from "vitest"
import { render } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event";
import App from './App'

//https://testing-library.com/docs/queries/about
//https://vitest.dev/guide/mocking.html

test('my app works as expected', async () => {

  /*  userEvent.setup() se refiere a iniciar una sesión o una interacción simulada con un dispositivo de entrada, como un teclado o un mouse, 
  utilizando la biblioteca o API llamada userEvent. */
  const user = userEvent.setup() //inicializamos el usuario q simulamos
  const app = render(<App />) //renderizamos la app
  const textareaFrom = app.getByPlaceholderText('Introducir texto') //de ahi recuperamos el placeholder del textarea y tenemos el elemento del textarea

  await user.type(textareaFrom, 'hola mundo')//simulamos q el usuario puso un texto x

  /*de la app recuperamos un elemnto en pantalla q tenga un valor q incluya este texto q se pasa....se pasa como una regex para q no este 
  comparando mayusculas...se le pone un timeout para dar un tiempo a q lo encuentre*/
  const result = await app.findByDisplayValue(/hello world/i, {}, { timeout: 2000 })

  expect(result).toBeTruthy()//esperamos q el resultado sea verdadero
})

//estamos simulando un usuario q llama a la api