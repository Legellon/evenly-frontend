import { useContext } from "react";
import { HeaderContext } from "./Header";

export default function() {
    const { showMenu } = useContext(HeaderContext);
    return (
        <div className={
            `menu ${ showMenu ? 'activated' : '' }`
        }>
            <ul className='list'>
                <li>
                    <a href="#" className='list-link current'>Home</a>
                </li>
                <li>
                    <a href="#" className='list-link'>Categories</a>
                </li>
                <li>
                    <a href="#" className='list-link'>Reviews</a>
                </li>
                <li>
                    <a href="#" className='list-link'>News</a>
                </li>
                <li>
                    <a href="#" className='list-link'>Membership</a>
                </li>
                <li>
                    <a href="#" className='list-link'>Contact</a>
                </li>
                <li className='screen-lg-hidden'>
                    <a href="#" className='list-link'>Sign In</a>
                </li>
                <li className='screen-lg-hidden'>
                    <a href="#" className='list-link'>Sign Up</a>
                </li>
            </ul>
        </div>
    );
};