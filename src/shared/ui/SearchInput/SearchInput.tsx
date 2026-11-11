import { type ComponentPropsWithRef } from "react"
import './SearchInput.css'

type SearchInputProps = ComponentPropsWithRef<'input'> & {
  onClear?: () => void
}

export const SearchInput = ({
  id,
  value,
  className,
  onClear,
  onChange,
  ref,
  ...props
}: SearchInputProps) => {
  const textStyle = 'text default light'
  const hasValue = Boolean(value)

  return (
    <div className="search-input-wrapper">
      <img src="/icons/search.svg" alt="🔍" className="search-input-icon" />
      <input
        id={id}
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder="Найти одежду"
        className={`search-input-field ${className} ${textStyle}`}
        type="search"
        {...props}
      />
      {hasValue &&
        <button type="button" onClick={onClear} className="search-input-close">
          <img src="/icons/close-cross.svg" alt="×" />
        </button>
      }
    </div>
  )
}