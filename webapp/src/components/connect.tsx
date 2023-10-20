import { faLink, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useNetwork
} from 'wagmi';

import './network.css';

import chevronUp from '../assets/chevron-up.svg';
import metamaskLogo from '../assets/metamask.svg';
import walletConnectLogo from '../assets/walletconnect.svg';

import { formatEtherTruncated } from '../utils/format';
import { explorer } from '../utils/constants';

export function Connect() {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address, watch: true, cacheTime: 3_500 });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { chain } = useNetwork();
  const { disconnect } = useDisconnect();

  const [metamask, walletConnect] = connectors;
  const explorerAddress = explorer[chain?.id || 534351 || 5001];

  const shortAddress = address
    ? `${address.substring(0, 6)}…${address.substring(address.length - 4)}`
    : '-';

  if (isConnected) {
    return (
      <div className="header-item">
        <div className="dropdown-head">
          <span>
            <FontAwesomeIcon icon={faWallet} />
            &nbsp;
            {shortAddress}
          </span>
          <button className="arrow arrow-down">
            <img src={chevronUp} alt="" />
          </button>
        </div>
        <div className="dropdown-body">
          <a
            href={`https://${explorerAddress}/address/${address}`}
            target="_blank"
            rel="noreferrer"
            className="text"
          >
            {balance
              ? `${balance?.value} ${
                  chain?.nativeCurrency.symbol
                }`
              : '...'}
          </a>
          <button
            className="hbutton hbutton-lnk"
            style={{ paddingLeft: 0, textTransform: 'none', outline: 'none',  padding: 10 }}
            onClick={() => disconnect()}
          >
            <span>Disconnect</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="header-item" id="connect-menu">
      <div className="dropdown-head">
        <span className="link">
          Connect wallet&nbsp;
          <FontAwesomeIcon icon={faLink} />
        </span>
      </div>
      <div className="dropdown-body">
        <button
          className="hbutton hbutton-lnk"
          disabled={!metamask.ready}
          key={metamask.id}
          style={{ textTransform: 'none' ,  padding: 10 }}
          onClick={() => connect({ connector: metamask })}
        >
          <img src={metamaskLogo} alt="" width={24} />
          <span>
            MetaMask
            {isLoading &&
              metamask.id === pendingConnector?.id &&
              ' (connecting)'}
          </span>
        </button>

        <button
          className="hbutton hbutton-lnk"
          disabled={!walletConnect.ready}
          key={walletConnect.id}
          style={{ textTransform: 'none' ,  padding: 10}}
          onClick={() => connect({ connector: walletConnect })}
        >
          <img src={walletConnectLogo} alt="" width={24} />
          <span>
            Wallet Connect
            {isLoading &&
              walletConnect.id === pendingConnector?.id &&
              ' (connecting)'}
          </span>
        </button>

        {error && <p className="message error">{error.message}</p>}
      </div>
    </div>
  );
}
