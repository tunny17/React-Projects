import { useState, useEffect} from 'react'
import './Jokes.scss'
import cart from '../../assets/cart.png'

const Jokes = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setJoke] = useState({});

  async function getJoke() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }




  return (
    <section className='jokes-sec'>
      <div className="container joke  --bg-light  --card">
        <h2>Random Jokes Generator</h2>     
        <img src={cart} alt="cart"  className='cart' />
        <hr />
        <p  className='--my'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque, dolorum doloribus quo soluta tenetur eum adipisci repellendus commodi fugiat.</p>
        <hr />
        <button className='--btn --btn-primary  --btn-block'  onClick={getJoke}>Generate New Joke</button>
      </div>
    </section>
  )
}

export default Jokes
