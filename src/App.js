import React, { Component } from 'react';

//Components
import IdCard from './IdCard'
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor'
import CreditCard from './CreditCard'

class App extends Component {

  render() {
    const langs = {
      fr: "Bonjour",
      de: "Hallo"
    }

    return (
      <div className="App">
        <h1>IdCard</h1>

        <IdCard
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          firstName="John"
          lastName="Macintosh"
          gender="Male"
          height={172}
          birth="1992-07-14"
        />

        <IdCard
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          firstName="Anna"
          lastName="Brbrbrb"
          gender="Female"
          height={168}
          birth="1989-06-12"
        />

        <h1>Greetings</h1>
        
        <Greetings lang={langs.de}>
          Ludwig
        </Greetings>

        <Greetings lang={langs.fr}>
          François
        </Greetings>

        <h1>Random</h1>

        <Random min={1} max={6} />
        <Random min={2} max={8} />

        <h1>Box Color</h1>

        <BoxColor r={24} g={25} b={26} />
        <BoxColor r={250} g={90} b={58} />

        <h1>Credit Card</h1>

        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
      </div>
    );
  }
}

export default App;
