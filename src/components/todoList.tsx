import { FC, useEffect } from "react"
import { UseActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"


const TodoList: FC = () => {
    const {todos, page, error, limit, loading} = useTypedSelector(state => state.todos)
    const {fetchTodos, setTodoPage} = UseActions()
    const pages =  [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return  <h1>loading...</h1>
    }

    if (error) {
        return <h1>error!</h1>
    }
    console.log(todos)

    return (
        <>
            {todos.map(todo =>
                 <div key={todo.id}>{todo.id} - {todo.title}</div>)}
            <div style={{display: 'flex'}}>
                {pages.map(p =>
                    <div key={p} onClick={() => setTodoPage(p)} style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}>
                        {p}
                    </div>)}
            </div>

        </>
    )
}

export default TodoList