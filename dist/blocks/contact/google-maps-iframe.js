import { jsx as _jsx } from "react/jsx-runtime";
const GoogleMapsIframe = ({ googlePlaceId }) => {
    if (!googlePlaceId)
        return _jsx("p", { className: "italic", children: "Missing Map" });
    return (_jsx("div", { style: { maxWidth: "100%", overflow: "hidden" }, children: _jsx("div", { dangerouslySetInnerHTML: {
                __html: googlePlaceId,
            } }) }));
};
export default GoogleMapsIframe;
