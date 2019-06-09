import React from 'react';
import './pageIndex.css';

const PageIndex = (props) => {
  const pageIndex = ['01', '02', '03', '04', '05', '06'];
  return (
    <div className="page-index" style={props.style}>
      {
        pageIndex.map(item => (
          props.selected === item ? (
            <button className="index-item index__selected"><span>{item}</span></button>
          ) : (<button className="index-item"><span>{item}</span></button>)
        ))
      }
      <div className="index-separator" />
      <button className={props.selected === 'Contact' ? 'index__selected index-contact index-item' : 'index-contact index-item'}>
        <span>Contact</span>
      </button>
    </div>
  );
}

export { PageIndex };