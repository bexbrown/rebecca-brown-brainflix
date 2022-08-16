import "./Info.scss";




function Info(props) {

    console.log("this is props:", props);


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
            <h1 className="info__title">{props.title}</h1>
            <div className="info__details">
                <div className="info__divider">
                    <h2 className="info__channel ">By {props.channel}</h2>
                    <span className="info__timestamp info__item--grey">{createTimestamp(props.timestamp)}</span>
                </div>
                <div className="info__divider">
                    <span className="info__views info__item--grey">
                        <span className="info__icon info__icon--views"></span>
                        {props.views}
                    </span>
                    <span className="info__likes info__item--grey">
                        <span className="info__icon info__icon--likes"></span>
                        {props.likes}
                    </span>
                </div>
            </div>
            <p className="info__description">{props.description}</p>
        </section>
    )

}

export default Info;

