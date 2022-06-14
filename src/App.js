import React, { useState } from 'react';

import './App.css';
import { ProductItems } from './data'
import ProductCard from './ProductCard'

export const CardNumberContext = React.createContext()
export const ExpiryMonthContext = React.createContext()
export const ExpiryYearContext = React.createContext()
export const ScurityCodeContext = React.createContext()



function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [securityCode, setScurityCode] = useState("");


  const onCardNumberChange = e => setCardNumber(e.target.value);
  const onExpiryMonthChange = e => setExpiryMonth(e.target.value);
  const onExpiryYearChange = e => setExpiryYear(e.target.value);
  const onScurityCodeChange = e => setScurityCode(e.target.value);

  return (
    <>
    <CardNumberContext.Provider value={cardNumber}>
      <ExpiryMonthContext.Provider value={expiryMonth}>
        <ExpiryYearContext.Provider value={expiryYear}>
          <ScurityCodeContext.Provider value={securityCode}>

            <div className="App">
              <div>product</div>
              <br></br>
              <div className='productContainer'>
                {ProductItems &&
                  ProductItems.map(product => <ProductCard key={product._id} product={product} />)
                }

              </div>
              <br></br>
              <div>
                <form>
                  <div className='payment__container' >

                    <input placeholder="Card Number" value={cardNumber}
                      onChange={onCardNumberChange} required />
                    <input placeholder="Expiry Month" value={expiryMonth}
                      onChange={onExpiryMonthChange} required />
                    <input placeholder="Expiry Year" value={expiryYear}
                      onChange={onExpiryYearChange} required />
                    <input placeholder="Security code" value={securityCode}
                      onChange={onScurityCodeChange} required />
                  </div>
                </form>
              </div>
            </div>

          </ScurityCodeContext.Provider>
        </ExpiryYearContext.Provider>
      </ExpiryMonthContext.Provider>
    </CardNumberContext.Provider>

  </>
  );
}

export default App;
