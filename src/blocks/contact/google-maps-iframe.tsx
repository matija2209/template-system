const GoogleMapsIframe = ({ googlePlaceId }: {
    googlePlaceId?: string
}) => {
    if (!googlePlaceId) return <p className="italic">Missing Map</p>
    return (
        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
            <div
                dangerouslySetInnerHTML={{
                    __html: googlePlaceId,
                }}
            ></div>
        </div>
    )
}

export default GoogleMapsIframe