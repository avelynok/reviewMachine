import React, {useState} from 'react'
import data from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

const Review = () => {
    const [reviews, setReviews] = useState(0)
    const {name, job, image, text} = data[reviews]

    function datalength(n){
      if(n > data.length - 1){
          return 0
      }
      if(n < 0){
          return data.length - 1
      }
      return n  
    }
    
    function prev(){
        setReviews((reviews) => {
            return datalength(reviews - 1 )
        })
    }

    function next(){
        setReviews((reviews) => {
            return datalength(reviews + 1 )
        })
    }

    function random(){
        let randonNumber =Math.floor(Math.random() * data.length )
        if(randonNumber === reviews){
          randonNumber = reviews + 1
            }
        return setReviews(datalength(randonNumber))
    }

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt='' className='person-img'/>
                <span className ='quote-icon'>
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn'>
                    <FaChevronLeft onClick={prev}/>
                </button>
                <button className='next-btn'>
                    <FaChevronRight onClick={next}/>
                </button>
            </div>
            <button className='random-btn' onClick={random}>Random</button>
        </article>
    )
}

export default Review
