import React from "react";
import Star from "./Star.js";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

export default function Stars({ count }) {
    if (!Number.isInteger(count) || count > 5 || count < 1) return null;

    let stars = [];
    for (let index = 0; index < count; index++) {
        stars.push(
            <li key={uuidv4()}>
                <Star />
            </li>
        );
    }

    return <ul className="card-stars">{stars}</ul>;
};

Stars.defaultProps = {
    count: 0,
};

Stars.propTypes = {
    count: PropTypes.number,
};
