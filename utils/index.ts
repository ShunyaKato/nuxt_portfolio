export const fetchApi = async (artistId: any): Promise<any> => {
  let data
  const apiKey: string = process.env.apiKey || ''
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.set('x-rapidapi-host', 'genius.p.rapidapi.com')
  requestHeaders.set('x-rapidapi-key', apiKey)

  await fetch(
    `https://genius.p.rapidapi.com/artists/${artistId}/songs?page=1&per_page=50`,
    {
      headers: requestHeaders
    }
  )
    .then((response: any) => {
      data = response.json()
      console.log(data)
    })
    .catch(function (error: any) {
      console.log(error)
    });
  return data
}