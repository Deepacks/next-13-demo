'use client'
// turns components into 'Client side' component

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import ActionButton from './@ui/ActionButton'

export default function Search() {
  const router = useRouter()

  const [search, setSearch] = useState('')

  const handleResearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search === '') return

    setSearch('')
    router.push(`/search/${search}`)
  }

  const handleSearchChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setSearch(value),
    [],
  )

  return (
    <form onSubmit={handleResearch}>
      <input
        type="text"
        placeholder="Enter the Search term"
        value={search}
        onChange={handleSearchChange}
      />

      <ActionButton type="submit">Search</ActionButton>
    </form>
  )
}
