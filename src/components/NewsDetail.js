import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Comments from './Comments';
import './NewsDetail.css'; // Import the CSS file

const NewsDetail = () => {
  const { id } = useParams();
  const news = useSelector((state) =>
    state.news.newsList.find((n) => n.id === parseInt(id))
  );
  const navigate = useNavigate();

  if (!news) {
    return <div>News not found</div>;
  }

  return (
    <div className="news-detail-container">
      <button onClick={() => navigate('/')}>Back to News List</button>
      <h1>{news.title}</h1>
      <img src={news.img} alt={news.title} />
      <p>{news.description}</p>
      <small>{news.author}</small>
      <small>{news.date}</small>
      <h3>Comments ({news.comments.length})</h3>
      <Comments newsId={news.id} />
    </div>
  );
};

export default NewsDetail;