import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { workItemsDispatch } from "../../redux/workItems/workItemsDispatch";
import { WorkItem } from "./WorkItem";


const style = {
    table: { borderCollapse: 'collapse' },
}

export function WorkItems() {
    const { id } = useParams();
    const workItems = useSelector(state => state.workItemsReducer.workItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch((dispatch) => {
            workItemsDispatch({ dispatch, id })
        })
    }, [])

    return (
        <>
            <table border='1' style={style.table}>
                <thead>
                    <tr>
                        <th width='200'>Username</th>
                        <th width='200'>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {workItems.map((workItem, index) => {
                        return (<WorkItem key={index} workItem={workItem} />)
                    })}
                </tbody>
            </table>
        </>
    );
}
