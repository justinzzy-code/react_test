import { useNavigate, Outlet, Link } from "react-router-dom";
import './style.css';

function Layout() {

    const username = "User"
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/create/'); // Replace with the desired route
    };

    return <>
        <header>
            <nav>
                <p>TODO List</p>
                <Link class="link" to="/">View All</Link>
                <Link class="link" to="/create/">Create</Link>
            </nav>
            <div>
                <p>Hello, {username}</p>
                <button class="link" onClick={handleClick}>New Page</button>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
    </>;
}

export default Layout;