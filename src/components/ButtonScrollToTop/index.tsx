import React from 'react'

const ButtonScrollToTop = () => {
  return (
    <i
      onClick={() => {
        window.scrollTo(0, 0)
      }}
      className="scroll-top-button fas fa-angle-up"
    ></i>
  )
}

export default React.memo(ButtonScrollToTop)
