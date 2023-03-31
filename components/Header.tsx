import LinkButton from './@ui/LinkButton'

const routes = [
  { href: '/', placeholder: 'Home' },
  { href: '/todos', placeholder: 'Todos' },
  { href: '/search', placeholder: 'Search' },
  { href: '/developer', placeholder: 'Developer' },
]

export default function Header() {
  return (
    <header className={'p-10 flex gap-6 bg-blue-500'}>
      {routes.map(({ href, placeholder }, idx) => (
        <LinkButton key={idx} href={href}>
          {placeholder}
        </LinkButton>
      ))}
    </header>
  )
}
