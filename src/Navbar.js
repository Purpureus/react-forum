import { LoginDataContext } from './LoginDataContext';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';

const Navbar = () => {

    const history = useHistory();

    const { loginData, setLoginData } = useContext(LoginDataContext);

    function logOut() {
	setLoginData({
	    username: "",
	    logged: false
	});
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
