import { useState } from 'react';

import Logo from '../assets/logo.png';
import Shield from '../assets/shield.svg';
import SendReceive from '../assets/send-receive.svg';

import { Connect } from '../components/connect';
import { Network } from '../components/network';

import { useNetwork } from 'wagmi';
import { stealthAddress, explorer } from '../utils/constants';

import AddressProvider from '../components/address';
import { AlzilID } from '../components/alzilid';
import { Send } from '../components/send';
import { Withdraw } from '../components/withdraw';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faArrowTurnDown
  } from '@fortawesome/free-solid-svg-icons';

import './main.css';

export function Main() {
    const [activeTab, setActiveTab] = useState<string>('send');

    const { chain } = useNetwork();
    const contractAddress = stealthAddress[chain?.id ||  31 || 355113];
    const explorerAddress = explorer[chain?.id || 534351 || 5001];

        return (
 
            <section className="layout">
                <div className="content">
                    <div className="header-h">
                        <div className="header-item">
                            <img className="logo logo-bg" src={Logo} alt="Alzil" />
                            <img
                            className="logo logo-default"
                            src={Logo}
                            alt="Alzil"
                            onClick={() => (document.location.href = '/')}
                            />
                        </div>
        
                        <div className="header-item">
                            <Connect />

                            <Network />
                        </div>
                    </div>

                    
                    
                    <div className="promo large-block">
                        <h1>
                        Introducing <span className="promo-accent">Anonymous</span> & <span className="promo-accent">Effortless</span>
                            <br /> Transfers on the {chain?.name.split(' ')[0] || 'blockchain'} Network
                        </h1>

                        <div className="benefits">
                            <div className="item">
                                <img src={Shield} alt="" width={24} />
                                <p>
                                Safeguard Your Transactions with <strong>Untraceable&nbsp;Stealth Addresses</strong>{' '}
                                
                                </p>
                            </div>
                            <div className="item">
                                <img src={SendReceive} alt="" width={24} />
                                <p>
                                    Send and receive {chain?.nativeCurrency.symbol || 'token'}{' '}
                                    <strong>privately</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    <AddressProvider>
                        <AlzilID />

                        
                        <div className="large-block">
                            <div className="nav-tabs">
                            <div
                                className={activeTab === 'send' ? 'tab active' : 'tab'}
                                onClick={() => setActiveTab('send')}
                            >
                                <h2>
                                <FontAwesomeIcon icon={faArrowRight} />
                                &nbsp; Send
                                </h2>
                                <span className="super">
                                {chain?.nativeCurrency.symbol || 'token'}
                                </span>
                            </div>
                            <div
                                className={activeTab === 'withdraw' ? 'tab active' : 'tab'}
                                onClick={() => setActiveTab('withdraw')}
                            >
                                <h2>
                                <FontAwesomeIcon icon={faArrowTurnDown} flip="horizontal" />
                                &nbsp; Receive
                                </h2>
                                <span className="super">
                                {chain?.nativeCurrency.symbol || 'token'}
                                </span>
                            </div>
                            </div>

                            <div
                            className="pane"
                            style={{ display: activeTab === 'send' ? 'block' : 'none' }}
                            >
                            <Send />
                            </div>
                            <div
                            className="pane"
                            style={{
                                display: activeTab === 'withdraw' ? 'block' : 'none',
                            }}
                            >
                            <Withdraw />
                            </div>
                        </div>

                    </AddressProvider>
                </div>
            </section>
         
        );

}

//https://explorer.testnet.rsk.co/tx/0xdf1596db6e9b9b94c540bb45eb054f77899e7e57729b0350c1846d0b2422d562
//https://https//explorer.testnet.rsk.co/tx/0xdf1596db6e9b9b94c540bb45eb054f77899e7e57729b0350c1846d0b2422d562