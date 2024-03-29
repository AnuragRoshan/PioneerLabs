import React, { useEffect, useState } from "react";

const Card = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await response.json();
    setdata(data.bpi);
    console.log(data.bpi);
  };

  return (
    <div className="card-top">
      <div className="card-rank">
        # 1 <span className="rank-text"> ranked cryptocurrency</span>
      </div>
      <div className="card-head">
        <div className="bitcoin-image">
          <img
            src="https://static.crypto.com/token/icons/bitcoin/color_icon.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="bitcoin-symbol">BTC</div>
        <div className="bitcoin-name">Bitcoin</div>
        <hr style={{ marginBlockStart: "1rem" }} />
      </div>
      {data ? (
        <div className="price-currency">
          <>
            {Object.keys(data).map((key) => {
              return (
                <div className="card-inner-top" key={key}>
                  <div className="coin-sym">{data[key].code}</div>
                  <div className="coin-rate">{data[key].rate}</div>
                </div>
              );
            })}
          </>
        </div>
      ) : (
        <>Loading . . .</>
      )}
    </div>
  );
};

export default Card;
