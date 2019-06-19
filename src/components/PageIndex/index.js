import React from 'react';
import { Transition } from 'react-transition-group';
import './pageIndex.css';

const PageIndex = (props) => {
  const pageIndex = ['01', '02', '03', '04', '05', '06'];

  return (
    <Transition in={true} timeout={500}>
      <div className='page-index' style={props.style}>
        {
          pageIndex.map(item => (
            props.selected === item ? (
              <a href={`#${item}`} key={item} className="index-item index__selected"><span>{item}</span></a>
            ) : (
              <a href={`#${item}`} key={item} className="index-item"><span>{item}</span></a>
            )
          ))
        }
        <div className="index-separator" />
        <a href='#Contact'
          className={props.selected === 'Contact' ? 'index__selected index-item-contact index-item' : 'index-item-contact index-item'}
        >
          <span>Contact</span>
        </a>
      </div>
    </Transition>
  );
}

export { PageIndex };