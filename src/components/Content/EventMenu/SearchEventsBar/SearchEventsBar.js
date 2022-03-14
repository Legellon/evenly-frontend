export default function () {
    return (
        <div className='search-events-container'>
            <div className="search-form">

                <input
                    className="form-input"
                    type="text"
                    placeholder="Enter event name"
                />

                <button className="btn form-btn">
                    <i className="ri-list-settings-line" />
                </button>

            </div>
        </div>
    );
}