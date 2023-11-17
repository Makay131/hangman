type HeaderProps = {
    children: string,
}
export default function Header({children}: HeaderProps) {
  return (
    <header className="header-result">{children}</header>
  )
}
