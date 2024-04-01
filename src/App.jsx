import { useState } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const comapreByDate = (a, b) => {
    let date1 = new Date(a.date);
    let date2 = new Date(b.date);
    return date2 - date1;
  };

  const sortByDate = () => {
    let sortedData = [...data];
    sortedData.sort(comapreByDate);
    setData(sortedData);
  };

  const sortByViews = () => {
    let sortedData = [...data];
    sortedData.sort((a, b) => b.views - a.views);
    setData(sortedData);
  };

  return (
    <main>
      <h1>Date and Views Table</h1>
      <div style={{ display: "flex" }}>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {data?.map((item) => {
          return (
            <tr>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          );
        })}
      </table>
    </main>
  );
}
