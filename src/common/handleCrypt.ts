import * as bcrypt from 'bcrypt'



export const generateHash = async (passwordText: string): Promise<string> => {
  const saltRound = 10
  const hash = await bcrypt.hash(passwordText, saltRound)
  return hash
}

export const compareHash = async (text: string, hash: string) => {
  const passwordMatch = await bcrypt.compare(text, hash)
  return passwordMatch
}
