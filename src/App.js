import Map from './components/Map'
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  
  const [loading, setLoading] = useState(false);
  const [longitude, setLongitude] = useState([]);
  const [latitude, setLatitude] = useState([]);


  useEffect(() => {
    getLocation();
  }, [])


  const getLocation = async () => {
    setLoading(true);
    const res = await axios.get('http://api.open-notify.org/iss-now.json')
   
    const { longitude, latitude } = await res.data.iss_position;
    setLongitude(parseFloat(longitude));
    setLatitude(parseFloat(latitude));
    setLoading(false);
  }

  return (

    <div className="App">
      {!loading ? (<Map center={{ lat: latitude, lng: longitude }} />) : <h1>Loading</h1>}
    </div>
  );
}

export default App;
