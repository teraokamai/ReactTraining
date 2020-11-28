import './App.css';
import Link from './components/link.js'
import Footer from './components/footer.js'

const checkIn = () => {
  var pass = prompt("パスワードを入力して下さい:",""); //react-hands-onと入力させる
  if (pass != null) window.location.href = "https://yu-sei-m.github.io/" + pass;
}

const App = () => { // function App() {とも書くが、constで定義する方が最近は多い
  const logo = '/images/logo.png';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>フィットネス・エンジニアの勉強会</b>
        </p>
        <Link text="はじめて学ぶReact" onClick={()=>checkIn()}/>
      </header>
      <Footer text="©︎2020 NPO法人FitnessEngineer" />
    </div>
  );
}

export default App;
