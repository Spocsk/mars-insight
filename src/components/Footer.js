import {useEffect} from 'react'
import {useState} from 'react'
import "../styles/footer.css"

function Footer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setData(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, []);

  for (let index = 0; index < data.length; index++) {

    
  }


    return (
      <div className="main">
      </div>
    );
}


export default Footer;