import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Content from './components/Content';
import Pagination from './components/Pagination';
import Filter from './components/Filter';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [allCategories, setAllCategories] = useState([]);
  const [allGroups, setAllGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const URL = "https://emojihub.yurace.pro/api/all";

  const fetchData = async () => {
    try {
      const res = await axios.get(URL)
      console.log(res);
      const { data } = res;
      if (data) {
        setLoading(false);
        setData(data)
        setFilteredData(data);
        setAllCategories(["All", ...new Set(data.map(obj => obj.category))]);
        setAllGroups(["All", ...new Set(data.map(obj => obj.group))]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  useEffect(() => {
    console.log("cat:", selectedCategory);
    console.log("grp", selectedGroup);
    const filtered = data.filter(item => {
      let categoryMatch = selectedCategory === "All" ? true : selectedCategory === item.category;
      let groupmatch = selectedGroup === "All" ? true : selectedGroup === item.group;
      return categoryMatch && groupmatch;
    });
    setFilteredData(filtered);
  }, [data, selectedCategory, selectedGroup])

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
          { <Filter
            allCategories={ allCategories }
            allGroups={ allGroups }
            setSelectedCategory={ setSelectedCategory }
            setSelectedGroup={ setSelectedGroup } /> }
          {
            filteredData.length === 0 ? <span>No Emoji Available...</span> :
              <Content data={ filteredData.slice(currPage * 10 - 10, currPage * 10) } />
          }
          {
            filteredData.length > 10 &&
            < Pagination
              selectPageHandler={ selectPageHandler }
              currPage={ currPage }
              totalEmojis={ filteredData?.length } />
          }
        </>
      ) }

    </div>
  );
}

export default App;