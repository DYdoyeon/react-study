import React, { useState, useCallback } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Categories from './components/Categories.js';
import NewsList from './components/NewsList.js';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

const App22 = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => {
    setCategory(category);
    console.log(category);
  }, []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />;
    </>
  );
};

const Appss = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apikey=9eeaed4e3e0e4c23bc8b1de99d09a8f4',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};
export default App;
