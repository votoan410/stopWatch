import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TimerClass from "./components/TimerClass";
import TimerFn from "./components/TimerFn";
import Stock from "./components/Stock";
import Counter from "./components/Counter";

function App() {
  const pageInfo = [
    { page: "counter", component: <Counter /> },
    { page: "stock", component: <Stock /> },
    { page: "timer Function", component: <TimerFn /> },
    { page: "timer Class", component: <TimerClass /> },
  ];

  const [currentPage, setCurrentPage] = React.useState(pageInfo[0]);

  const renderPage = () => {
    return currentPage.component;
  };

  const handlePageSwitch = (page) => {
    return (e) => {
      e.preventDefault();
      setCurrentPage(page);
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {pageInfo.map((item) => (
          <button
            key={item.page}
            href={`./${item.page}`}
            onClick={handlePageSwitch(item)}
          >
            {item.page}
          </button>
        ))}

        <h1>Current Page: {currentPage.page}</h1>
        {renderPage()}
      </header>
    </div>
  );
}

export default App;
