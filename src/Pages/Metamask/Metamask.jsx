import React, { useState } from "react";
import Web3 from "web3";

const Metamask = () => {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        console.log("Connected with account:", accounts);
        setConnected(true);
      } catch (error) {
        setErrorMessage("Failed to connect to MetaMask.");
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      setErrorMessage(
        "MetaMask not detected. Please install MetaMask extension."
      );
    }
  };

  const disconnectWallet = () => {
    setConnected(false);
    setAccount(null);
    setErrorMessage("");
  };

  return (
    <div className="metamask-top">
      <div className="metamask-inner-top">
        <div>
          <h1>MetaMask Integration</h1>
        </div>
        <div className="meta-image">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png"
            alt=""
            srcset=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="meta-connect">
          {connected ? (
            <>
              <p>Connected with account: {account}</p>
              <button onClick={disconnectWallet}>Disconnect Wallet</button>
            </>
          ) : (
            <>
              <button onClick={connectWallet}>Connect Wallet</button>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Metamask;
