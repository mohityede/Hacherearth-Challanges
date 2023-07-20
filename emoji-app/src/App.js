import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Content from './components/Content';
import Pagination from './components/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);

  const URL = "https://emojihub.yurace.pro/api/all";

  const fetchData = async () => {
    try {
      const res = await axios.get(URL)
      console.log(res);
      const { data } = res;
      if (data) {
        setLoading(false);
        setData(data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const selectPageHandler = (selectedPage) => {
    console.log("len", selectedPage)
    if (selectedPage >= 1 && selectedPage <= (data?.length || 1) / 10 && selectedPage !== currPage) {
      setCurrPage(selectedPage)
    }
  }

  return (
    <div className="App">
      <h1>Emoji App</h1>
      { loading && <h2 className='loader'>Loading...</h2> }
      { !loading && (
        <>
          <Content data={ data.slice(currPage * 10 - 10, currPage * 10) } />
          < Pagination selectPageHandler={ selectPageHandler } currPage={ currPage } totalEmojis={ data?.length } />
        </>
      ) }

    </div>
  );
}

export default App;