import React, { useEffect, useState } from 'react';
import AppContext from './app-context';

const AppContextProvider = ({ children }) => {
  const [showArticle, setShowArticle] = useState(false);
  const [data, setData] = useState({});
  const [isLoading,setisLoading]=useState(false);

  const handleSubmitData = (name, article) => {
    const newArticle = {
      id: data.length + 1,
      author: name,
      article: article,
    };
    setData((prevData) =>({...prevData,[Object.keys(prevData).length+1]:newArticle}));

    const sendpost= async()=>{
        const response= await fetch("URL of API end point ",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newArticle)
        });
        const data= await response.json();
        console.log(data);
    };
    sendpost(); 
  };

  const closeAddArticle = () => {
    setShowArticle(false);
  };

  const handleShowArticle = () => {
    setShowArticle(true);
  };

  const AppContextValue = {
    showArticle,
    data,
    isLoading,
    handleSubmitData,
    closeAddArticle,
    handleShowArticle,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setisLoading(true);
        const response = await fetch('URL of API end Point');
        const result = await response.json(); 
        setData(result);
        setisLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
