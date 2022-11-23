import React from 'react'
import "./UpcomingShift.css"
const UpcomingShift = () => {
    return (
        <div className='myContainer'>
            <div className='bar'></div>
            <div className='date'>
                <h3 className='day'>19</h3>
                <h3 className='month'>June</h3>
            </div>
            <div className='shift'>
                <div className='shift__title'>
                    TASK 1
                </div>
                <div className='shift__time'>
                    10:00 - 12:00
                </div>
                <div className='shift__details'>
                    lorem ipsum dolor sit amet
                </div>
            </div>
        </div>
    )
}

export default UpcomingShift                    