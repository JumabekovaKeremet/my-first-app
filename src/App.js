import React from 'react';
// import ByeWorld from './components/ByeWorld';
// import HelloWorlds from "./components/HelloWords";
// import Chunga from "./components/Chunga";
// import Hochu from "./components/Hochu";
// import Book from "./components/Book";
// import Song from "./components/Song";
// import Length from './components/Length';
// import Uppercase from "./components/Uppercase";
// import Lowercase from "./components/Lowercase";
// import Age from "./components/Age";
// import Year from "./components/Year";
// import Round from "./components/Round";
// import Power from "./components/Power";
// import Switch from "./components/Switch";
import Sum from "./components/Sum";
import RandomNumber from "./components/RandomNumber";
import BiggerNumber from "./components/BiggerNumber";
import List from "./components/List";


function App() {
  return(
    <div className = "App">
      {/* <HelloWorlds/> */}
    {/* <ByeWorld/> */}
      {/* <Hochu v="more"/>
      <Hochu v="kosmos"/>
      <Book name="Dark Tower" author = "Stephen King"/>
      <Song title="Shape of you" artist = "Ed Sheeren"/>
      <Length string="Example string" length="14"/>
      <Length string="Hello world"  length="11"/>
      <Uppercase>hello world</Uppercase>
      <Lowercase>HELLO WORLD</Lowercase>
      <Age year={1989} />
      <Age year={1900} />
      <Age year={21} />
      <Round number={2.5}/>
      <Power number="5" to="2" />
      <Switch on={false} />
      <Switch on={true} />
      <Water frozen={true} />
      <Water frozen={false} /> */}
      <Sum a={5} b={7}/>
      <RandomNumber min={5} max={10}/>
      <BiggerNumber a={5} b={4} />
      <List items={['Apple', 'kiwi']} />
          </div>
  );
}
export default App;