import logo from './logo.svg';
import './App.css';
import Countertask from './UseState tasks/Countertask';
import Useeffect from './Useeffect tasks/Useeffect';
import Formusestate from './UseState tasks/Formusestate';
import Httpget from './HTTPCALLSclass/Httpget';
import Randomnum from './UseState tasks/Randomnum';
import Mouseeffect from './Useeffect tasks/Mouseeffect';
import Mousetask from './Useeffect tasks/Mousetask';
import ComponentF from './Usecontext tasks/ComponentF';
import Counter1 from './UseReducer-Tasks/Counter1';
import Counter2 from './UseReducer-Tasks/Counter2';
import Httppost from './HTTPCALLSclass/Httppost';
import Httppostlists from './HTTPCALLSclass/Httppostlists';
import Httppostform from './HTTPCALLSclass/Httppostform';

function App() {
  return (
    <div className="App">
      <Countertask />
      <Useeffect />
      <Formusestate />
      {/* <Httpget />  */}
      <Httppost />
      <Httppostlists />
      <Httppostform />
      <Randomnum />
      {/* <Mouseeffect /> */}
      <Mousetask />
      <ComponentF />
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;
