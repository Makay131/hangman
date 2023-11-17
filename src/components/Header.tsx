import { ReactNode } from "react"

type HeaderProps = {
    children: ReactNode,
}
export default function Header({children}: HeaderProps) {
  return (
    <header className="header-result">{children}</header>
  )
}
