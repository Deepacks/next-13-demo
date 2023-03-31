import { PropsWithChildren } from 'react'

import TodosList from '@/components/TodosList'

export default async function TodosLayout({ children }: PropsWithChildren) {
  const asyncTodoList = await TodosList()

  return (
    <main className="flex">
      <div>{asyncTodoList}</div>

      <div className="flex-1">{children}</div>
    </main>
  )
}
