import "./Info.scss";
import { createTimestamp } from "../../utility/utils";

function Info({ currentVideo }) {
    return (
        <section className="info">
            <h1 className="info__title">{currentVideo.title}</h1>
            <div className="info__details">
                <div className="info__divider">
                    <h2 className="info__channel ">By {currentVideo.channel}</h2>
                    <span className="info__timestamp">{createTimestamp(currentVideo.timestamp)}</span>
                </div>
                <div className="info__divider">
                    <div className="info__stat">
                        <span className="info__icon info__icon--views"></span>
                        <span className="info__views ">{currentVideo.views}</span>
                    </div>
                    <div className="info__stat">
                        <span className="info__icon info__icon--likes"></span>
                        <span className="info__likes">{currentVideo.likes}</span>
                    </div>
                </div>
            </div>
            <p className="info__description">{currentVideo.description}</p>
        </section>
    )
}

export default Info;

