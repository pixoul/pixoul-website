import React from "react"
import injectSheet from 'react-jss'

const styles = {
  circular: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)'
  }
}

export default injectSheet(styles)(({
  title = 'Check Icon',
  color = 'inherit',
  circular,
  classes
}) => {

  if(circular){
    return(
      <svg width="42" height="42" xmlns="http://www.w3.org/2000/svg" className={classes.circular}>
        <title>{title}</title>
        <defs>
          <circle id="b" cx="18" cy="18" r="18"/>
          <filter x="-13.9%" y="-11.1%" width="127.8%" height="127.8%" filterUnits="objectBoundingBox" id="a">
            <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/>
            <feMorphology radius=".5" in="SourceAlpha" result="shadowSpreadOuter2"/>
            <feOffset dy="2" in="shadowSpreadOuter2" result="shadowOffsetOuter2"/>
            <feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/>
            <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter3"/>
            <feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter3" result="shadowBlurOuter3"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" in="shadowBlurOuter3" result="shadowMatrixOuter3"/>
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1"/>
              <feMergeNode in="shadowMatrixOuter2"/>
              <feMergeNode in="shadowMatrixOuter3"/>
            </feMerge>
          </filter>
        </defs>

        <g fill="none" fill-rule="evenodd">
          <g transform="translate(3 2)">
            <use fill="#000" filter="url(#a)"/>
            <use fill="#FFF"/>
          </g>

          <path fill={color} fill-rule="nonzero" d="M17.283 24.508l-4.836-4.851-1.647 1.64 6.483 6.503L31.2 13.84l-1.635-1.64z"/>
        </g>
     </svg>
    )
  }

  return (
    <svg width="21" height="16" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <path fill={color} d="M6.674 12.623L1.695 7.648 0 9.33 6.674 16 21 1.682 19.317 0z"/>
    </svg>
  )
})
