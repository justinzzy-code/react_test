import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Task from '../../components/Task';
import './style.css';

function Landing() {
    const navigate = useNavigate();
    const [ params, ] = useSearchParams();
    const [ tasks, setTasks ] = useState([]);
    const open_task = parseInt(params.get('open'));

    return <>
        <h1>View Tasks</h1>
        {tasks.map(task => <Task {...task} key={task.id} open={task.id === open_task} />)}
    </>;
}

export default Landing;