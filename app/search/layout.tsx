import Search from '@/components/Search'
import { PropsWithChildren } from 'react'

export default function SearchLayout({ children }: PropsWithChildren) {
  return (
    <main className="p-5 flex space-x-4 divide-x-2">
      <div>
        <h1>Search</h1>
      </div>

      <div className="flex-1 pl-5">
        <Search />

        <div>{children}</div>
      </div>
    </main>
  )
}
