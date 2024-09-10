import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
// import GifSearch from './components/GifSearch'
// import { handleFetch } from './utils';
import fetchData from './utils/fetchData';
import { useState, useEffect } from 'react';


function App() {
  const [gifs, setGifs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const doFetch = async () => {
      const URL = '/api/gifs';
      console.log('URL00000000000000000', URL);
      const [data, error] = await fetchData(URL);
      if (error) setErrorMessage(error.message);
      if (data) setGifs(data.data);
    }
    doFetch();
  }, []);

  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifContainer gifs={gifs} />
      </div>
      <p style={{ color: "red" }}>{errorMessage}</p>
    </div>
  );
}

export default App;
