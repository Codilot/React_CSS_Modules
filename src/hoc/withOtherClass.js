import React from 'react';

const withOtherClass = (WrappedComponent, className) => {
    return (props) => {
        return (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
        );
    };
}


export default withOtherClass;