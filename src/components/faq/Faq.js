import React from 'react'
import { BsBookmarksFill } from 'react-icons/bs'
import Question from './Question'

const Faq = () => {
  return (
    <section className='faq-sec'>
        <div className="container faq">
            <div className="title   --center-all">
                <BsBookmarksFill size={30} color='orangered'/>
                <h2 className='--mb2'>FAQs</h2>
                <p  className='--text-small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae alias reiciendis expedita nulla, magnam laborum minus harum. Tempore, sint.</p>
            </div>
            <div className="questions">
                <Question />
            </div>
        </div>
    </section>
  )
}

export default Faq
