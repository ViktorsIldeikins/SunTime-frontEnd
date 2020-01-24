import React, {useEffect, useState} from "react";
import {InputPicker} from "rsuite";
import {getAllCities} from "../api/CityLocationApi";

const CitySelector = ({
    city,
    setCity
}) => {

    const [cityOptions, setCityOptions] = useState([]);

    useEffect(() => {
        getAllCities()
            .then(res => {
                setCityOptions(res.data.map(val => {
                    return {label: val, value: val};
                }));
            })
            .catch(err => console.log(err));
    }, []);

    return (
      <>
          <InputPicker data={cityOptions} value={city} onSelect={setCity}
                       cleanable={false} maxHeight={250} style={{ width: 224 }}/>
      </>
    );
};

export default CitySelector;