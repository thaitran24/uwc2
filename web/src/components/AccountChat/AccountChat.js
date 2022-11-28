import React from 'react'
import './AccountChat.css'
const AccountChat = (props) => {
  return (
    <div className='account_container'>
      <div className='imgg'>
        
        <img src={props.img} alt='' />
      </div>
        <div className='mess'>
            <h3>{props.name}</h3>
            <p>{props.lastMess}</p>
        </div>
        <div className='status'>
            <p>{props.timeLastMess}</p>
            <div className={`numberNotify ${props.numNotify == 0? 'hide' : ''}`}>{props.numNotify}</div>
        </div>
    </div>
  )
}

export default AccountChat