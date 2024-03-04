import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, currencyChange] = useState(currency);
    const setCurrency = (event) => {
        currencyChange(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
    }

return (
<div className='input-group-text' style={{backgroundcolor: 'green'}}>
<label htmlFor="inputGroupSelect01">Currency {newCurrency}</label>
                  <select className="custom-select" id="inputGroupSelect01" onChange={setCurrency} >
                <option defaultValue value="$" >Dollar</option>
                <option value="£" name="Pound">Pound</option>
                <option value="€" name="Euro">Euro</option>
                <option value="₹" name="Ruppee">Ruppee</option>
                </select>
                </div>
                  
)
};
export default Currency