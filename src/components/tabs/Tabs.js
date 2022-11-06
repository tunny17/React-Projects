import { useState } from 'react'
import './Tabs.scss'

const Tabs = () => {
    const [tabIndex, setTabIndex] = useState(1)

    const handleShowTab = (index) => {
        setTabIndex(index)
    }

  return (
    <section    className='tabs-section     --100vh     --flex-center'>
      <div className="container">

        <div className="tabs-heading    --text-center">
            <h2 className='--line'>More About Us</h2>
            <p  className='--text-sm'>Click the Tab buttons to learn more.</p>
        </div>

        <div className="tabs    --flex-start  --bg-light">
            <div className="tabs-title">
                <button className={tabIndex === 1 ? "tab active-tab" : "tab"}   onClick={() => handleShowTab(1)}>Who We Are</button>
                <button className={tabIndex === 2 ? "tab active-tab" : "tab"}   onClick={() => handleShowTab(2)}>What We Do</button>
                <button className={tabIndex === 3 ? "tab active-tab" : "tab"}   onClick={() => handleShowTab(3)}>Get In Touch</button>
            </div>

            <div className="tabs-content">
                <article className={tabIndex === 1 ? "content active-content" : "content"}>
                    <h4>Who We Are</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint sit distinctio. Dolor quam ipsum veritatis! Porro similique veniam obcaecati?</p>
                </article>
                <article className={tabIndex === 2 ? "content active-content" : "content"}>
                    <h4>What We Do</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint sit distinctio. Dolor quam ipsum veritatis! Porro similique veniam obcaecati?</p>
                </article>
                <article className={tabIndex === 3 ? "content active-content" : "content"}>
                    <h4>Get In Touch</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint sit distinctio. Dolor quam ipsum veritatis! Porro similique veniam obcaecati?</p>
                </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Tabs
