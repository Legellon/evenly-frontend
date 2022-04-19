import { useState } from 'react';
import './Auth.scss';

function Reg() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    let user_data = {
        username: username,
        password: password,
        email: email,
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
        fetch("http://157.230.107.52/Auth/Register", options);
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
                    className="fadeIn second"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" />

                <input type="text"
                    className="fadeIn third"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />

                <input type="submit" className="fadeIn fourth" value="Reg In" />
            </form>

            <div id="formFooter">
            </div>

        </>
    );
}

export default Reg;