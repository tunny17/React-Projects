import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './Question.scss';

const Question = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className='container question  --card'>
        <div className="question-title  --flex-between">
            <h4 className='--text-p --fw-bold'>Can I learn react?</h4>
            <button className='question-icon'>
                { showAnswer ? (
                    <AiOutlineMinus color='red' />
                ): (
                    <AiOutlinePlus color='#1f93ff' />
                ) }
            </button>
        </div>
        <div className="question-answer">
            {showAnswer && <p   className='--text-sm --py'>This is the answer</p>}
        </div>
    </div>
  )
}

export default Question


