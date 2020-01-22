import React, {useEffect, useState} from "react";
import axios from 'axios';
import {FlexboxGrid, Panel, Col} from "rsuite";
import './index.css';

const View = () => {

    const [times, setTimes] = useState({sunRise:'', sunSet:''});

    useEffect(() => {
        axios.get("http://localhost:8080/sunset-sunrise/today")
            .then(res => {
                setTimes({sunRise:res.data.sunRise, sunSet: res.data.sunSet});
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <FlexboxGrid className="margin-top" justify="center">
            <FlexboxGrid.Item componentClass={Col} colspan={6} md={6}>
                <Panel header='SunRise' bordered>
                    Sun rise today: {times.sunRise}
                </Panel>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item componentClass={Col} colspan={6} md={6}>
                <Panel header='SunRise' bordered>
                    Sun set today: {times.sunSet}
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>
    )
};

export default View;