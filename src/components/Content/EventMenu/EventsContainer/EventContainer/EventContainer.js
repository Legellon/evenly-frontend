export default function({ image, title, date, time }) {
    return (
        <div className="article featured-article event-menu-listlink">

            <img src={image} className="article-image" />
            {/* <span className="article-category">Technology</span> */}

            <div className="article-data-container">

                <div className="article-data">
                    <span>{date}</span>
                </div>

                <h3 className="title article-title">{title}</h3>

            </div>

        </div>
    );
}