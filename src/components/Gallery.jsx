import React, { useState } from 'react'
import './gallery.css'

const Gallery = ({galleryImages, galleryImagesBig}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <button className='btnClose' onClick={handleCloseModal}><img src='assets/images/icon-close.svg'/></button>
          <button className='btnPrev' onClick={prevSlide}><img src='assets/images/icon-previous.svg'/></button>
          <button className='btnNext' onClick={nextSlide}><img src='assets/images/icon-next.svg'/></button>
          <div className='fullScreenImage'>
            <img src={galleryImagesBig[slideNumber].img} alt='' />
          </div>
          <div className='container-LB'>
          {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='singleLB'
                key={index}
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
          </div>
        </div>
      }

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Gallery;