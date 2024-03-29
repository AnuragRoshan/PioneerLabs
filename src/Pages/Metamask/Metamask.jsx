import React, { useState } from "react";
import Web3 from "web3";

const Metamask = () => {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState("");
  const [balance, setBalance] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        console.log("Connected with account:", accounts);

        // Get network information
        const networkId = await web3.eth.net.getId();
        const networkName = getNetworkName(networkId);

        // Get wallet balance
        const balance = await web3.eth.getBalance(accounts[0]);

        setConnected(true);
        setNetwork(networkName);
        setBalance(web3.utils.fromWei(balance, "ether"));
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
    setNetwork("");
    setBalance("");
    setErrorMessage("");
  };

  const getNetworkName = (networkId) => {
    switch (networkId) {
      case 1:
        return "Mainnet";
      case 3:
        return "Ropsten";
      case 4:
        return "Rinkeby";
      case 42:
        return "Kovan";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="metamask-top">
      <div className="metamask-inner-top">
        <div className="metamask-head">
          <h1>MetaMask Integration</h1>
        </div>
        <div className="meta-image">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png"
            alt=""
            srcSet=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="meta-connect">
          {connected ? (
            <>
              <p>Connected with account: {account}</p>
              <p>Network: {network}</p>
              <p>Balance: {balance} ETH</p>
              <button onClick={disconnectWallet}>Disconnect Wallet</button>
            </>
          ) : (
            <>
              <button onClick={connectWallet}>Connect Wallet</button>
              {errorMessage && (
                <p style={{ color: "yellow" }}>{errorMessage}</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Metamask;
