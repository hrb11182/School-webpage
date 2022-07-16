import React from 'react';
import './admin.css';
import Card from '../../sub-component/admin-card/Card';
import Text from '../../sub-component/admin-text/Text';


function Admin() {
  return (
    <div className="secc" id='vision'>
      <div className="contnr">
        <div className="boxxx"><Text /></div>
        <div className="boxxx"><Card /></div>
      </div>
    </div>
  )
}

export default Admin