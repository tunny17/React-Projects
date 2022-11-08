import React from 'react'
import './Product.scss'
import dress from '../../assets/dress.jpg'
import { CiShoppingCart } from 'react-icons/ci'

const Product = () => {
  return (
    <>
      <header   className='--bg-dark'>
        <nav    className='container'>
            <h2 className='--text-md --text-light  --py2    --flex-center'>
                <strong>Zulu</strong>Shop     
                <CiShoppingCart size={30} color='orangered'/>
            </h2>
        </nav>
      </header>

      <section>
        <div className="container   product --flex-start   --flex-dir-column">
            <div className="product-image   --text-center   --card  --mr">
                <img src={dress} alt="a dress" />
            </div>
            <div className="product-desc">
                <h3 className='--text-md  --color-danger'>Sleek Wedding Gown</h3>
                <p  className='--fw-bold'>$95 USD</p>
                <p  className='--text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo similique illum earum itaque rem praesentium labore, distinctio commodi perferendis? Iusto.</p>
                <form action="">
                    <div className="--form-control  --flex-start    --my2">
                        <label >Color</label>
                        <select name="" id="">
                            <option value="">Choose an option</option>
                            <option value="">White</option>
                        </select>
                    </div>
                    <div className="--form-control  --flex-start    --my2">
                        <label >Size</label>
                        <select name="" id="">
                            <option value="">Choose an option</option>
                            <option value="">24</option>
                        </select>
                    </div>
                    <div className="--form-control  --flex-start    --my2">
                        <label >Quantity</label>
                        <select name="" id="">
                            <option value="">Choose an option</option>
                            <option value="">1</option>
                        </select>
                    </div>
                    <button className='--btn    --btn-primary   --btn-block'>Add To Cart</button>
                </form>
            </div>
        </div>
      </section>
    </>
  )
}

export default Product
