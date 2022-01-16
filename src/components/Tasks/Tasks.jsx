import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { autoComplitTasksDispatch, searchTasksDispatch, tasksDispatch } from "../../redux/tasks/tasksDispatch";
import { Task } from "./Task";

const style = {
    table: { borderCollapse: 'collapse' },
    input: { width: '300px', height: '30px', },
    form: { margin: '20px 0', position: 'relative', width: 'max-content' },
    button: { height: '36px', width: '100px', cursor: 'pointer' },
    div: { position: 'absolute', backgroundColor: 'white', border: '1px solid', width: '100%', minHeight: '100px' },
}

export function Tasks() {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasksReducer.tasks)
    const autoComplitTasks = useSelector(state => state.tasksReducer.autoComplitTasks)
    const [valueSearch, setValueSearch] = useState('')
    const [showAutoComplit, setShowAutoComplit] = useState(false)

    useEffect(() => {
        dispatch(tasksDispatch)
    }, [])

    function searchTasks(searchValue) {
        dispatch((dispatch) => { searchTasksDispatch({ dispatch, searchValue }) })
        setShowAutoComplit(false)
    }

    function submitForm(e) {
        e.preventDefault()
        searchTasks(valueSearch)
    }

    function changeValueSearch(e) {
        setValueSearch(e.target.value)
        if (e.target.value.length < 3) {
            setShowAutoComplit(false)
            return
        } else if (e.target.value.length >= 3) {
            setShowAutoComplit(true)
        }
        const searchValue = e.target.value.replace(/\s+/g, '')
        dispatch((dispatch) => { autoComplitTasksDispatch({ dispatch, searchValue }) })
    }

    function autoComplit(value) {
        setValueSearch(value)
        value = value.replace(/\s+/g, '')
        searchTasks(value)
    }

    function renderAutoComplit() {
        if (!showAutoComplit) return
        return (
            <div style={style.div}>
                {autoComplitTasks.map(task => {
                    return (
                        <div onClick={() => { autoComplit(task.project.name) }} style={{ cursor: 'pointer' }} key={task.id}>{task.project.name}</div>
                    )
                })}
            </div>
        )
    }

    return (
        <>
            <form style={style.form} onSubmit={submitForm} >
                <input value={valueSearch} onChange={changeValueSearch} style={style.input} type="text" placeholder='поиск' />
                <button style={style.button}>найти</button>
                {renderAutoComplit()}
            </form>
            <table border='1' style={style.table}>
                <thead>
                    <tr>
                        <th width='100'>ID</th>
                        <th>SUMMARY</th>
                        <th>PROJECT NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => {
                        return <Task key={task.id} task={task}></Task>
                    })}
                </tbody>
            </table>
        </>
    );
}
