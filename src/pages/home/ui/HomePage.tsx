import { Button, Checkbox, Input, Logo, Radio, RangeSlider, SearchInput, SizeSelector, Stepper, Text } from "@/shared/ui"
import { useRef, useState } from "react"

export const HomePage = () => {
  const ref = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('');
  const [sizeSelected, setSizeSelected] = useState(false)
  const [count, setCount] = useState(1)
  const [range, setRange] = useState({ min: 0, max: 20000 });

  return (
    <>
      <h1>Home</h1>
      <Text size="micro" color="foreground">text</Text>
      <Input id="input" label="Инпут" placeholder="г. Москва" type="password" errorMessage="dwce" />
      <SearchInput ref={ref} value={query} onChange={(e) => setQuery(e.target.value)} onClear={() => setQuery('')} />
      <Checkbox label="checkbox" />
      <Radio label="radio" />
      <SizeSelector
        size="s"
        checked={sizeSelected}
        onChange={() => setSizeSelected(!sizeSelected)}
      />
      <div></div>
      <Stepper
        quantity={count}
        maxQuantity={32}
        onIncrease={() => setCount((prev) => prev + 1)}
        onDecrease={() => setCount((prev) => prev - 1)}
      />
      <RangeSlider
        min={range.min}
        max={range.max}
        step={100}
        minGap={500}
        onChange={setRange}
      />
      <Button type="button" variant="text" onClick={() => {}}>button</Button>
      <Logo/>
      <div></div>
    </>
  )
}