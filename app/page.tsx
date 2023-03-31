import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="font-bold">Homepage</div>

      <div>
        <Link href={'/todos'}>Go to Todo</Link>
      </div>

      <div>
        <Link href={'/search'}>Go to Search</Link>
      </div>
    </div>
  )
}
