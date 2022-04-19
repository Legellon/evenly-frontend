import { useState } from 'react';
import Comp from './Comp';
import '../profile/profile.css';

function Login() {
  const [showForm, setShowForm] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <>
      <a href ="#" className='ri-login-box-line login-icon' onClick={() => setShowForm(!showForm)}></a>
      {
        showForm && (
          <Comp type={toggleForm} handleType={setToggleForm} />
        )
      }
      </>

  );
}

export default Login;