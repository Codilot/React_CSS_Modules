import React, {Component} from 'react';

// const withOtherClass = (WrappedComponent, className) => {
//     return (props) => {
//         return (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//         );
//     };
// }

const withOtherClass = (WrappedComponent, className) => {
    return class extends Component {
        render () {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
                );

            }
    };
}


export default withOtherClass;