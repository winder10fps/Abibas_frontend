import type { ComponentPropsWithRef } from "react"
import { Text } from "@/shared/ui"
import './AuthLayout.css'

type Props = ComponentPropsWithRef<'div'> & {
  heading: string,
  subheading: string,
  caption: string,
}

export const AuthLayout = ({
  heading,
  subheading,
  caption,
  children
}: Props) => {
  return (
    <div className="auth-layout">
      <Text size="mini" color="accent">{subheading}</Text>
      <h3>{heading}</h3>
      <Text color="foreground">{caption}</Text>
      {children}
    </div>
  )
}