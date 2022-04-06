import './search-bar.css';

interface SearchBarProps {
    placeholder: string
}

export default ({ placeholder }: SearchBarProps ) => {
    return (
        <div className='search-box'>
            <div className='search-container'>
                <div className="search-form">

                    <input
                        className="search-input"
                        type="text"
                        placeholder={placeholder}
                    />

                    <button className="btn search-settings-btn">
                        <i className="ri-list-settings-line" />
                    </button>

                </div>
            </div>
        </div>
    );
}