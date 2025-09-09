import React from 'react';

const Limiter = (Component) => {
    return function WrappedComponent(props) {
        return (
            <div className={`w-full ${props.bg || ""}`}>
                <div className={`${props.width || "w-8/12"} mx-auto`}>
                    <Component {...props} />
                </div>
            </div>
        );
    };
};

export default Limiter;