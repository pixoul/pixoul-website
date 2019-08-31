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
  title = 'Times Icon',
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

        <g fill="none" fillRule="evenodd">
        <g transform="translate(3 2)">
          <use fill="#000" filter="url(#a)"/>
          <use fill="#FFF"/>
        </g>

        <path fill={color} d="M29 13.611L27.389 12 21 18.389 14.611 12 13 13.611 19.389 20 13 26.389 14.611 28 21 21.611 27.389 28 29 26.389 22.611 20z"/>
        </g>
      </svg>
    )
  }

  return (
    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <path fill={color} fillRule="evenodd" d="M17 1.712L15.288 0 8.5 6.788 1.712 0 0 1.712 6.788 8.5 0 15.288 1.712 17 8.5 10.212 15.288 17 17 15.288 10.212 8.5z"/>
    </svg>
  )
})
