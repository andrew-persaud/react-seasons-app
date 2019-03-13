import React from 'react';

const Error = (props) => {
    return (
        <div>
            <h1 class='error-display-text'>{props.message}</h1>
            <i className={`frown outline icon massive error-display` } />
        </div>
    )
}

Error.defaultProps = {
    message: 'An error occurred.'
}
export default Error;