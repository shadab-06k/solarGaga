import React, { useState } from 'react';
import './News.css';
import img75Image from '../../assets/Rectangle 3875.png';
import img76Image from '../../assets/Rectangle 3875 (1).png';
import img77Image from '../../assets/Rectangle 3875 (2).png';

const allNewsItems = [
  {
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    para:"Wind Energy",
    date: "August 20, 2022",
    image: img75Image
  },
  {
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    para:"Wind Energy",
    date: "August 20, 2022",
    image: img76Image
  },
  {
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    para:"Wind Energy",
    date: "August 20, 2022",
    image: img77Image
  },
  {
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    para:"Wind Energy",
    date: "August 20, 2022",
    image: img76Image
  },
  {
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    para:"Wind Energy",
    date: "August 20, 2022",
    image: img77Image
  },
  {
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    para:"Wind Energy",
    date: "August 20, 2022",
    image: img75Image
  },
  {
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    para:"Wind Energy",
    date: "August 20, 2022",
    image: img75Image
  },
  {
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    para:"Wind Energy",
    date: "August 20, 2022",
    image: img75Image
  },
  {
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    para:"Wind Energy",
    date: "August 20, 2022",
    image: img75Image
  }
];

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(allNewsItems.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const currentNewsItems = allNewsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="news-section">
      <h1><svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
<path d="M0 2H140" stroke="#222831" stroke-width="3"/>
</svg>OUR NEWS<svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
<path d="M0 2H140" stroke="#222831" stroke-width="3"/>
</svg></h1>
      <p>We've formatted SOLAREXSA into the GAIA Exchange and GAIAX Portals in order to organized work load into single tasks</p>
      <div className="news-grid">
        {currentNewsItems.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
             
              <h2>{item.title}</h2>
              <h5><span>{item.para}</span> {item.date}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}><i className="bi bi-chevron-left"></i></button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}><i className="bi bi-chevron-right"></i></button>
      </div>
    </div>
  );
};

export default News;
