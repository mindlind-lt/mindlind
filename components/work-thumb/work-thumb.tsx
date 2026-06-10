import './work-thumb.css'

export default function WorkThumb(){
    return (
        <a className="work-thumb" href="#">

            <div className="work-thumb-figure">
                <img
                src="https://framerusercontent.com/images/sGS84bWyltfeRQTkd9e954KItjQ.jpg"
                alt=""
                className="work-thumb-pic"
                />
                {/* <img
                src="https://framerusercontent.com/images/Gp71a55WWD0asrAvP4akufH6S4c.jpg"
                alt=""
                /> */}
            </div>

            <div className="work-thumb-content">
                <h6 className="work-thumb-title">White Gate Hotel</h6>
                <div className="pills">
                    <div className="pills-item">Website</div>
                    <div className="pills-item">Content</div>
                    <div className="pills-item">Mobile App</div>
                </div>
            </div>

        </a>
    )
}