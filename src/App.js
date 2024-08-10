import './App.css';
import useResponsive from './assests/useResponsive';
import MainPage from './components/MainPage/MainPage';
import MobileMainPage from './components/MobileHeader/MobileMainPage';

function App() {
  const smUp = useResponsive("up", "sm");
  return (
    <div className="App">
      {smUp ? <MainPage /> : <MobileMainPage />}
    </div>
  );
}

export default App;
