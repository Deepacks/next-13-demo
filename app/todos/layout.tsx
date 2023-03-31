import TodosList from './TodosList'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const asyncTodoList = await TodosList()

  return (
    <main className="flex">
      <div>{asyncTodoList}</div>

      <div className="flex-1">{children}</div>
    </main>
  )
}
