import { useEffect, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Task(props) {
    const date = new Date(props.due_date);
    let [state, setState] = useState("");
    let [error, setError] = useState("");
    let navigate = useNavigate();


    return <details className={state} open={props.open} >
        
    <summary>
        <span>{date.toLocaleString()}</span>
    </summary>
    <h2>{props.title}</h2>
    <div>
        <p>{props.detail}</p>
        <p className="error">{error}</p>
    </div>
</details>;
}

export default Task;