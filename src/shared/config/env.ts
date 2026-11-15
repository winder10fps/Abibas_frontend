const getEnvVariable = (key: string): string => {
  const value = import.meta.env[key]
  if (value === undefined) {
    throw new Error(`Env variable ${key} not founded`)
  }
  
  return value
}


export const BASE_URL = getEnvVariable('VITE_API_BASE_URL')