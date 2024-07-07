import React from 'react';
import "./Article.css"
import { useContext } from 'react';
import AppContext from '../../store/app-context';
import Loader from '../../UI/Loader';
const Article = () => {
  
  const {data,isLoading}=useContext(AppContext);
  if(isLoading){
    return (<Loader/>);
  }
  return (
    <div className="Article">
      {Object.keys(data).map((k) => (
        <div className="card" key={data[k].id}>
          <p className="card-title">{data[k].author}</p>
          <p className="small-desc">{data[k].article}</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
