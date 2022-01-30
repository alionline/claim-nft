import { ThirdwebProvider, ConnectWallet } from '@3rdweb/react';
import './App.css';
import logo from './circle.png'
import Homepage from './components/homepage/homepage';


const supportedChainIds = [1, 4, 137, 250, 43114, 80001];

const connectors = {
  injected: {},
  walletconnect: {},
  walletlink: {
    appName: "Claim NFT",
    url: "https://thirdweb.com",
    darkMode: false,
  },
};

function App() {
  return (
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <div className="d-flex">
        <div className="nav">
          <ConnectWallet />
        </div>

        <div className="main">
          <Homepage/>
        </div>
      </div>
      

     
      
    </ThirdwebProvider>
  );
}
export default App;

