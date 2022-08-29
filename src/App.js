import "./App.css";
import BuyStockFn from "./components/BuyStock/BuyStockFn";
import BuyStockClass from "./components/BuyStock/BuyStockClass";
import StockAmount from "./components/StockAmount/StockAmount";
import React from "react";
import { useDispatch } from "react-redux";

const pageInfo = [
  {
    pageName: "BuyStockFn",
    pageComponent: BuyStockFn,
  },
  // {
  //   pageName: "BuyStockClass",
  //   pageComponent: BuyStockClass,
  // },
];

function App() {
  const [curPage, setCurPage] = React.useState(pageInfo[0]);

  const renderPage = () => {
    const CurrentPageComponent = curPage.pageComponent;
    return <CurrentPageComponent test='patrick' />;
  };

  const handleChangePage = (event, nextPage) => {
    event.preventDefault();
    setCurPage(nextPage);
  };

  return (
    <div className='App'>
      <header className='App__header'>
        <nav>
          <div>
            "Stock":
            <StockAmount />
          </div>

          {pageInfo.map((page, index) => (
            <a
              href={`./${page.pageName}`}
              onClick={(e) => handleChangePage(e, page)}
              key={page.pageName}
            >
              {page.pageName}
            </a>
          ))}
        </nav>
      </header>
      {renderPage()}
    </div>
  );
}

export default App;
