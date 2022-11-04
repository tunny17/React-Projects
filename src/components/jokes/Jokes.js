import { useState, useEffect} from 'react'
import './Jokes.scss'
import smiley from '../../assets/smiley.png'

const Jokes = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setJoke] = useState({});

  async function getJoke() {
    setIsLoading(true)
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setJoke(data);
    setIsLoading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      getJoke();
    }, 2000);
  }, []);




  return (
    <section className='jokes-sec'>
      <div className="container joke  --bg-light  --card">
        <h2>Random Jokes Generator</h2>     
        <img src={smiley} alt="cart"  className='cart' />
        <hr />
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <p  className='--my2'>{joke.value}</p>
        )}
        <hr />
        <button className='--btn --btn-primary  --btn-block'  onClick={getJoke}>Generate New Joke</button>
      </div>
    </section>
  )
}

export default Jokes
