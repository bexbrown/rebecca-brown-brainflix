import "./Info.scss";

function Info({ currentVideo }) {

    function createTimestamp(timestamp) {
        let newDate = new Date(timestamp);
        let month = newDate.getMonth() + 1;
        let day = newDate.getDate();
        let year = newDate.getFullYear();

        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }

        return month + "/" + day + "/" + year;
    }

    return (
        <section className="info">
            <h1 className="info__title">{currentVideo.title}</h1>
            <div className="info__details">
                <div className="info__divider">
                    <h2 className="info__channel ">By {currentVideo.channel}</h2>
                    <span className="info__timestamp info__item--grey">{createTimestamp(currentVideo.timestamp)}</span>
                </div>
                <div className="info__divider">
                    <span className="info__views info__item--grey">
                        <span className="info__icon info__icon--views"></span>
                        {currentVideo.views}
                    </span>
                    <span className="info__likes info__item--grey">
                        <span className="info__icon info__icon--likes"></span>
                        {currentVideo.likes}
                    </span>
                </div>
            </div>
            <p className="info__description">{currentVideo.description}</p>
        </section>
    )
}

export default Info;

