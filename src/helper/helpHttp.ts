
export async function postData(url: string, data: any) {
    const token = "gAAAAABl07x3O_FuE-L8vKFgoMKun1R_SsNryMZWgTpFQ7joZiqZr5xTGWI-rVpcG-z5Z82C5NWxmddQpInvwCTbtAV2hRQDimOIeGEIZxs9BZKiRHSThuwiv99h6ehNmWsLtw9siHpd"

    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${token}` 
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Error en la solicitud POST');
    }
    
    const responseData = await response.json();
    return responseData;
  }