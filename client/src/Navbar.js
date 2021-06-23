import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {

    const history = useHistory();
    const storage = window.localStorage;

    const [loginData, setLoginData] = useState(
        JSON.parse(storage.getItem('login-data') || "[{}]")
    );

    function logOut() {
        storage.setItem('login-data', JSON.stringify({
            logged: false,
            username: null,
            accessToken: null
        }));

        history.go(-1);
    }

    return (
        <nav>

            <Link className="nav-button" to="/">Home</Link>

            <div className="flex-separator"></div>

            { loginData && loginData.logged
                ? <p>Logged as <Link to={`/user/${loginData.username}`}>{loginData.username}</Link></p>
                : <p>[Not logged in]</p>
            }

            { loginData && loginData.logged
                ? <Link className="nav-button" to="/" onClick={logOut}>Log out</Link>
                : <Link className="nav-button" to="/login">Log in</Link>
            }
            <Link className="nav-button" to="/signup">Sign up</Link>

        </nav>
    );
};

export default Navbar;
