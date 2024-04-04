//import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai'
//import  OpenAI  from 'openai'
//import { SUPPORT_LANGUAGES } from '../constants'
import { postData } from '../helper/helpHttp'
import { type FromLanguage, type Language } from '../types/types.d'

//const apiKey = import.meta.env.VITE_OPENAI_API_KEY

//creamos el cliente de openai pasando la kei
//const openai = new OpenAI({apiKey, dangerouslyAllowBrowser: true })
/*const configuration = new Configuration({ apiKey })
const openai = new OpenAIApi(configuration)*/

//hacemos una funcion asincrona q va a recibir tres elementos
export async function translate({
  fromLanguage,
  toLanguage,
  text,
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  //let http = helpHttp()
  let url = 'https://api.textcortex.com/v1/texts/translations'

  const fromCode = fromLanguage === 'auto' ? 'auto' : fromLanguage
  const toCode = toLanguage

  const data = {
    formality: 'default',
    source_lang: fromCode,
    target_lang: toCode,
    text: text,
  }

  try {
    const responseData = await postData(url, data)
    //console.log(responseData)
    //console.log(responseData.data.outputs[0].text)
    return responseData.data.outputs[0].text
  } catch (error) {
    console.error(error)
    // Manejar el error aquí si es necesario
  }

  /* try {
     const response = await http.post(url, {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'token gAAAAABl07x3O_FuE-L8vKFgoMKun1R_SsNryMZWgTpFQ7joZiqZr5xTGWI-rVpcG-z5Z82C5NWxmddQpInvwCTbtAV2hRQDimOIeGEIZxs9BZKiRHSThuwiv99h6ehNmWsLtw9siHpd'
       },
       body:JSON.stringify({
           "formality": "default",
           "source_lang": fromCode,
           "target_lang": toCode,
           "text": text
         })
       
     });
 
     console.log(response);
     
   } catch (error) {
     console.log(error);
   }*/
}
