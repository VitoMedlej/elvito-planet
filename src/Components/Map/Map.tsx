const Map = ({location} : {
    location: string
}) => {
    return (
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe
                    
                    width="100%"
                    height="500"
                    id="gmap_canvas"
                    src={location || "https://maps.google.com/maps?q=seattle&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                    frame-border="0"
                    scrolling="no"
                    margin-height="0"
                    margin-width="0"></iframe>
                <a href="https://putlocker-is.org"></a>

            </div>
        </div>
    )
}

export default Map