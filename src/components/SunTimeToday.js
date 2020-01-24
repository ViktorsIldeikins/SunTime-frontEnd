import React, {useEffect, useState} from "react";
import {Col, FlexboxGrid, Panel} from "rsuite";
import './index.css';
import {getSunTime} from "../api/SunTimesApi";
import {getCityCoordinates} from "../api/CityLocationApi";

const SunTimeToday = ({city}) => {

    const [times, setTimes] = useState({sunRise:'', sunSet:''});

    useEffect(() => {
        getCityCoordinates(city)
            .then(res => {
                console.log(res);
                return getSunTime({latitude: res.data.latitude, longitude: res.data.longitude});
            })
            .then(res => {
                setTimes({sunRise:res.data.sunRise, sunSet: res.data.sunSet});
            })
            .catch(err => console.log(err));
    }, [city]);

    return (
        <FlexboxGrid className="margin-top" justify="center">
            <FlexboxGrid.Item componentClass={Col} md={5}>
                <Panel header='SunRise' bordered>
                    Sun rise today: {times.sunRise}
                </Panel>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item componentClass={Col} md={5}>
                <Panel header='SunRise' bordered>
                    Sun set today: {times.sunSet}
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    )
};

export default SunTimeToday;