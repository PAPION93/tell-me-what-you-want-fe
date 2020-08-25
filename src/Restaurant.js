import React from 'react';
import PropTypes from 'prop-types';

function Restaurant({id, title}) {
    return <h1>{title}</h1>;
}

DeviceMotionEvent.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default Restaurant;