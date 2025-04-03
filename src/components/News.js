import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

const NewsN = () => {
  const newsItems = [
    { title: "Trends on SGX nifty indicate cautious opening", time: "2h ago", readers: "468 readers" },
    { title: "Playtech share price on the up with Americas expansion planned", time: "5h ago", readers: "563 readers" },
    { title: "Uber share price surges 11.5% on prospect of first profit", time: "1d ago", readers: "1068 readers" },
    { title: "Oil prices rise on global natural gas crunch", time: "3d ago", readers: "3468 readers" }
  ];

  return (
    <div className="card mt-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-center"> Top News</h5>
        <ul className="list-group list-group-flush">
          {newsItems.map((news, index) => (
            <li key={index} className="list-group-item">
              <p className="mb-1 fw-bold">{news.title}</p>
              <small className="text-muted">{news.time} • {news.readers}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsN;