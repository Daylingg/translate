export async function postData(url: string, data: any) {
  const token = import.meta.env.TOKEN

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Error en la solicitud POST')
  }

  const responseData = await response.json()
  return responseData
}
