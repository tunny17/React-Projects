import { useState } from 'react'
import './Tabs.scss'

const Tabs = () => {
  return (
    <section    className='tabs-section     --100vh     --flex-center'>
      <div className="container">

        <div className="tabs-heading    --text-center">
            <h2 className='--line'>More About Us</h2>
            <p  className='--text-sm'>Click the Tab buttons to learn more.</p>
        </div>

        <div className="tabs    --flex-start  --bg-light">
            <div className="tabs-title">
                <button className='tab  active-tab'>Who We Are</button>
                <button className='tab'>What We Do</button>
                <button className='tab'>Get In Touch</button>
            </div>

            <div className="tabs-content">
                <article className="content active-content">
                    <h4>Who We Are</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint sit distinctio. Dolor quam ipsum veritatis! Porro similique veniam obcaecati?</p>
                </article>
                <article className="content">
                    <h4>Who We Are</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint sit distinctio. Dolor quam ipsum veritatis! Porro similique veniam obcaecati?</p>
                </article>
                <article className="content">
                    <h4>Who We Are</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint sit distinctio. Dolor quam ipsum veritatis! Porro similique veniam obcaecati?</p>
                </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Tabs
