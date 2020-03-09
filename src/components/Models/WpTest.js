import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import Content from './Content';

const WpTest = () => {
  const [data, setData] = useState({content: ''});
  useEffect(() => {
    async function fetchData() {
      await Axios.get('https://public-api.wordpress.com/rest/v1.1/sites/protsfolio.wordpress.com/posts/229')
                  .then(res => setData(res.data))
                  .catch(err => console.error(err))
    }
    fetchData()
  }, []);
        
  console.log(data)
  return(<Content content={{type: 'image', src: data.featured_image}}/>)
}

export default WpTest;