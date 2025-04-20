import fs from 'fs'
import path from 'path'

export async function getMessages(locale: string) {
  const filePath = path.join(process.cwd(), 'messages', `${locale}.json`)

  if (!fs.existsSync(filePath)) {
    throw new Error(`No se encontró el archivo de traducciones: ${locale}`)
  }

  const jsonData = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(jsonData)
}
