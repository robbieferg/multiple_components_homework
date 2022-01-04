import './App.css';
import FilmBox from './containers/FilmBox';

function App() {
  return (
  <>
    <h1>Upcoming Film Releases for UK</h1>
    <hr/>
    <ul>
    <FilmBox/>
    </ul>
    <br/>
    <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases>></a>
  </>
  );
}

export default App;
