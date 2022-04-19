import './Auth.scss';
import {useState} from 'react';
function Auth() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    let user_data = {
        username: username,
        password: password,
    };

    const options = {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_data)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        fetch("http://157.230.107.52/Auth/Login", options);
    }
    return (
            <>
                <form onSubmit={handleSubmit}>
                <input type="text"
                    className="fadeIn second"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Login" />
                    
                    <input type="text"
                    className="fadeIn third"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                    <input type="submit" className="fadeIn fourth" value="Log In"/>
                </form>

                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </>
    );
}
export default Auth;