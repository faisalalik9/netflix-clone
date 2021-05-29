import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';
import requests from './requests';

function App() {
  return (
    <div className="App">
        <Nav />
        <Banner fetchUrl={requests.fetchTrending} />

        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isNetflixOrig="true" />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchAction} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
       
       <Footer />
    </div>

    
  );
}

export default App;
