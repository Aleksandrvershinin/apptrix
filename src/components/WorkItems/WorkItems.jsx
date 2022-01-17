import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { workItemsDispatch } from "../../redux/workItems/workItemsDispatch";
import { WorkItem } from "./WorkItem";
import Pdf from "react-to-pdf";


export function WorkItems() {
    const { id } = useParams();
    const workItems = useSelector(state => state.workItemsReducer.workItems)
    const dispatch = useDispatch()
    const ref = useRef(null)

    useEffect(() => {
        dispatch((dispatch) => {
            workItemsDispatch({ dispatch, id })
        })
    }, [])

    return (
        <>
            <Pdf targetRef={ref} filename="Timesheets.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <table ref={ref} border='1' >
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
