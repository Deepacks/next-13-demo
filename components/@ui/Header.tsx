import LinkButton from './LinkButton'

export default function Header() {
  return (
    <header className={'p-10 flex gap-6 bg-blue-500'}>
      <LinkButton href={'/'}>Home</LinkButton>
      <LinkButton href={'/todos'}>Todos</LinkButton>
    </header>
  )
}
