import { notFound } from 'next/navigation'
import { Todo, TodoList } from '@/types/Todo.type'

// default: true
// forces only SSG (see -> generateStaticParams() below)
export const dynamicParams = true

interface PageProps {
  params: {
    todoId: string
  }
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    // invalidate server cache after 60s
    // (SSR: {cache: 'no-cache'})
    // (Static: {cache: 'force-cache'})
    { next: { revalidate: 60 } },
  )

  const todo: Todo = await res.json()
  return todo
}

export default async function TodoItem({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId)

  if (!todo.id) return notFound()

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>

      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>

      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  )
}

// Needed for SSG (static HTML + JSON (uses getStaticProps))
export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    next: { revalidate: 60 },
  })
  const todos: TodoList = await res.json()

  // limit number of requests for this example (otherwise typicode blocks it)
  // the remaining ones will be SSRd as per usual (only if 'dynamicParams' is kept true!)
  const trimmedTodos = todos.splice(0, 10)

  return trimmedTodos.map((todo) => ({ todoId: todo.id.toString() }))
}
