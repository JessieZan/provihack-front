import useGlobal from '../hooks/useGlobal'

const baseURL = (categoria) =>
  `https://api-provihack-equipe05.herokuapp.com/servicos/${categoria}`

async function getServices(categoria) {
  if (!categoria) return

  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM4MTA5NDA0LCJleHAiOjE2MzgxMzgyMDR9.wHSFEjhqtTp2NdimY_XF9WBOUkcMLpSOHinkzv4O49M'

    const response = await fetch(baseURL(categoria), {
      headers: {
        Authorization: token,
      },
    })

    const results = await response.json()

    return results
  } catch (error) {
    console.log(error.message)
  }
}

export default getServices
