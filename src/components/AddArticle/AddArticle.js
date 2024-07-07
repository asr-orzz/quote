import React, { useState } from 'react';
import "./AddArticle.css";
import { useContext } from 'react';
import AppContext from '../../store/app-context';

const AddArticle = () => {

    const {showArticle,handleSubmitData,closeAddArticle }=useContext(AppContext);
  const [author, setAuthor] = useState("");
  const [article, setArticle] = useState("");
  const [articleValid, setArticleValid] = useState(false);

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleArticle = (e) => {
    const { value } = e.target;
    setArticle(value);
    if (value.length > 50) {
      setArticleValid(true);
    } else {
      setArticleValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitData(author, article);
    closeAddArticle();
    setAuthor("");
    setArticle("");
    setArticleValid(false); // Reset validation state after submission
  };

  const closeAddArticlee = () => {
    closeAddArticle();
    setAuthor("");
    setArticle("");
    setArticleValid(false); // Reset validation state on close
  };

  if (!showArticle) {
    return null;
  }

  return (
    <div className="back-drop" onClick={closeAddArticlee}>
      <div className="add-article" onClick={(event) => event.stopPropagation()}>
        <div className="add-article-heading">Add Article</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="authorName">Author Name: </label>
            <input
              id="authorName"
              value={author}
              onChange={handleAuthor}
              className="input-Author"
            />
            <label htmlFor="articleContent">Article: </label>
            <input
              id="articleContent"
              value={article}
              onChange={handleArticle}
              className="input-Article"
            />
            <button
              type="submit"
              className={articleValid ? "Submit-button" : "disabled"}
              disabled={!articleValid}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;
