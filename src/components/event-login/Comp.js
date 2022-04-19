import './Auth.scss';
import Auth from './Auth';
import Reg from './Reg'
function Comp({ type, handleType }) {
    return (
        <>
        <div className="wrapper fadeInDown">
            <div id="formContent">
   
                <h2 className='active' onClick={() => handleType(true)}>Sign In</h2>
                <h2 className='inactive underlineHover' onClick={() => handleType(false)}>Sign Up</h2>

                {
                    type ? (
                        <Auth />
                    ) : (
                        <Reg />
                    )
                }

                {}
            </div>
        </div>
        </>
    );
}
export default Comp;