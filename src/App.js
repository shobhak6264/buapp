import logo from './logo.svg';
import { Routes , Route } from 'react-router-dom';
import { SuggestionsPage } from './components/suggestionsPage';
import { Headercomponent } from './components/header';
import { CoffeeChatpage } from './components/coffeeChatPage';
import Signup from './components/signupPage';
import './App.css';

function App() {
  return (
    <div className='mainDisplay'>
    <Headercomponent/>
      <Routes>
          <Route path="/" element={<SuggestionsPage />} />
          <Route path="/coffeeChat" element={<CoffeeChatpage />} />
          <Route path="/meeting" element={<SuggestionsPage />} />
          <Route path="/notifications" element={<SuggestionsPage />} />
          <Route path="/directory" element={<SuggestionsPage />} />
          <Route path="/login" element={<Signup />} />
       </Routes>
    </div>
  );
}

export default App;
