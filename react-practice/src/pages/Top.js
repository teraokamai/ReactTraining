import '../App.css';
import Link from '../components/link.js'
import Footer from '../components/footer.js'

const checkIn = () => {
  var pass = prompt("パスワードを入力して下さい:","");
  if (pass != null) window.location.href = "https://yu-sei-m.github.io/" + pass;
}

const Top = () => {
  const logo = '/images/logo.png';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <p>
          <b>フィットネス・エンジニアの勉強会</b>
        </p>
        <Link text="はじめて学ぶReact" onClick={()=>checkIn()}/>
      </header>
      <Footer/>
    </div>
  );
}

export default Top;