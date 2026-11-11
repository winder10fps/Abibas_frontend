import { Input, Text } from "@/shared/ui"

export const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <Text size="micro" color="foreground">text</Text>
      <Input id="input" label="Инпут" placeholder="г. Москва" type="password"/>
    </>
  )
}