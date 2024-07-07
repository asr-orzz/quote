import React from 'react'
import "./Header.css"
import { useContext } from 'react';
import AppContext from '../../store/app-context';

const Header = () => {

  const {handleShowArticle}=useContext(AppContext);



  return (  
    <div className="Header">
        <div className="Heading">Daily Quotes</div>
        <div className="Add-articles-button">
            <button onClick={handleShowArticle}>Add Quote</button>
        </div>
    </div>
  )
}

export default Header;