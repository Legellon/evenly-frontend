import './event-card.css';

export default function({ image, title, date, time }) {
    return (
        <div className="event-card">

            <img src={image} className="event-card-image" />
            {/* <span className="article-category">Technology</span> */}

            <div className="event-card-data-container">

                <div className="event-card-data">
                    <span>{date}</span>
                </div>

                <h3 className="title event-card-title">{title}</h3>

            </div>

        </div>
    );
}