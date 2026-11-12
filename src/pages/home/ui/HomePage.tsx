import { Checkbox, Input, Radio, SearchInput, Text } from "@/shared/ui"
import { useRef, useState } from "react"

export const HomePage = () => {
  const ref = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('');

  return (
    <>
      <h1>Home</h1>
      <Text size="micro" color="foreground">text</Text>
      <Input id="input" label="Инпут" placeholder="г. Москва" type="password" errorMessage="dwce" />
      <SearchInput ref={ref} value={query} onChange={(e) => setQuery(e.target.value)} onClear={() => setQuery('')} />
      <Checkbox label="checkbox"/>
      <Radio label="radio"/>
    </>
  )
}