import { useContext } from "react";
import { AppContext } from "../../App";

export default function () {
    const { showSearch, closeSearch } = useContext(AppContext);
    return (
        <div className={
            `search-form-container container ${ showSearch ? 'activated' : '' }`
        }>

            <div className="form-container-inner">

                <form action="" className="form">

                    <input
                        className="form-input" 
                        type="text"
                        placeholder="What are looking for?"
                    />
                    
                    <button className="btn form-btn" type="submit">
                        <i className="ri-search-line" />
                    </button>
                    
                </form>
                {/* <span className="form-note">Or press ESC to close.</span> */}

            </div>

            <button 
                className="btn form-close-btn place-items-center"
                onClick={() => closeSearch()}
            >
                <i className="ri-close-line"></i>
            </button>

        </div>
    );
} 