import PropTypes from 'prop-types';
import React from "react";


/**
 * Minimal Overlay/Backdrop React Component.
 *
 * @author [Amol Meshram](https://github.com/j4jinx)
 */
const Overlay = (props) => {
    const { opened = false, onClose = () => { }, color = '#e0e0e0', style = {}, ...rest } = props;

    React.useEffect(() => {
        const rootTag = document.getElementsByTagName("html")[0];
        if (opened) {
            rootTag.style.overflow = "hidden";
        } else {
            rootTag.style.overflow = null;
        }

        return function cleanup() {
            rootTag.style.overflow = null;
        };
    }, [opened]);

    return (
        <div
            style={{
                position: `fixed`,
                width: `100%`,
                height: `100%`,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: `hidden`,
                cursor: `pointer`,
                transition: `opacity 0.3s, visibility 0.3s`,
                zIndex: 1008,
                WebkitTapHighlightColor: 'transparent',
                userSelect: `none`,
                backgroundColor: `${color}`,
                opacity: (opened ? 0.75 : 0),
                visibility: (opened ? `visible` : `hidden`),
                ...style,
            }}
            onClick={onClose}
            {...rest}
        />
    );
};

Overlay.propTypes = {
    /**
     * If true, the overlay is open   
     */
    opened: PropTypes.bool,
    /**
     * Callback fired when the component requests to be closed
     */
    onClose: PropTypes.func,
    /**
   * Overlay Color   
   */
    color: PropTypes.string,
    /**
     *@ignore
     */
    className: PropTypes.string,
    /**
     *@ignore
     */
    style: PropTypes.object,
};

Overlay.defaultProps = {
    opened: false,
    onClose: () => { },
    color: '#e0e0e0'
};

export default Overlay;