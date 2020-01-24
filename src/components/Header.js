import React from "react";
import {months} from '../util/constants';
import './index.css';

const Header = ({
    city
}) => {

    const today = new Date();
    const month = months[today.getMonth()];
    const date = today.getDate();

    return (
        <div className='title'>
            <h2 className='title-header'>{city}, {month} {date}, SunRise/SunSet Times</h2>
        </div>
    );
};

export default Header;