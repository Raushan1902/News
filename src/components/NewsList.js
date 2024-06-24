// src/components/NewsList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNewsList } from '../store/newsSlice';
import './NewsList.css'; // Import the CSS file

const NewsList = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news.newsList);

  const fetchNews = () => {
    // Fetch news from API or use dummy data
    const fetchedNews = [
      {
        id: 1,
        img: '/img/dollar.jpg', // Ensure this path is correct
        title: 'В Казахстане подорожал доллар',
        description: 'Курс продемонстрировал максимальный за последние 9 месяцев внутридневной рост (+5,09 тенге). Сегодня официальный курс Нацбанка составляет 457,98 тенге за доллар.',
        author: 'Tengrinews.kz',
        date: '2024-06-19',
        comments: [],
      },
      {
        id: 2,
        img: '/img/football.jpg', // Ensure this path is correct
        title: 'Сегодня стартует чемпионат Европы по футболу.',
        description: 'Вот расписание на ближайшие дни (в понедельник обновим на другие даты). Время указали наше, казахстанское.',
        author: 'QazSport',
        date: '2024-06-14',
        comments: [],
      },
      {
        id: 3,
        img: '/img/vape.jpg', // Ensure this path is correct
        title: 'Вот и настал вейпэнд. Закон официально вступил в силу сегодня.',
        description: 'За продажу и распространение — штраф до 200 МРП (738 400 тенге), либо общественные работы на срок до 200 часов или арест до 50 суток. За ввоз и производство накажут лишением свободы на два года или штрафом в десять раз больше — 2000 МРП. Ну, а что касается покупки и хранения вейпа, то наказание за это не предусмотрено. Ответственность нести не придется. Довольно интересно получается. Об этом нашей редакции рассказал заместитель председателя КАП МВД Ренат Зулхаиров.',
        author: 'Qumash',
        date: '2024-06-20',
        comments: [],
      },
    ];
    dispatch(setNewsList(fetchedNews));
  };

  useEffect(() => {
    fetchNews();
  }, [dispatch]);

  const sortedNewsList = [...newsList].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="news-list-container">
      <div class="topnav">
        <p class="active" href="#home">News List</p>
        <button onClick={fetchNews}>Refresh News</button>
      </div>
      <ul>
        {sortedNewsList.map((news) => (
          <li key={news.id}>
            <Link to={`/news/${news.id}`}>
              <div className='row'>
                <img src={news.img} alt={news.title} />
              </div>
              <div className="text-container">
                <h2>{news.title}</h2>
                <p>Подробнее...</p>
                <small>{news.author}</small>
                <small>{news.date}</small>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
