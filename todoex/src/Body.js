import React, { useState, useEffect } from 'react'
import Moment from 'moment';
import './Body.css'

function Body() {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
        
    });
    return (
        <div class ="body">
                <span className="body__today">Today</span>
                {/* <span className="body__date">{Moment(date.toLocaleDateString()).format('LL')}</span> */}
                <small className = "body__date1">{Moment(date.toLocaleDateString()).format('LL')}</small>
        </div>
    )
}

export default Body
