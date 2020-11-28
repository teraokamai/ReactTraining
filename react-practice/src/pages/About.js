import '../App.css';
import Footer from '../components/footer.js'

const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <b>フィットネス・エンジニアとは</b>
        </p>
        <a href="https://fitness-engineer.jp" >FitnessEngineer公式ページ</a>
      </header>
      <Footer/>
    </div>
  );
}

export default About;