import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import * as s from './style';

function SubList(props) {
  
  const [isDone, setIsDone ] = useState(false);

  const handleStateChangeClick = () => {
    setIsDone(isDone => {
      return !isDone
    });
  }



  return (
    <>
      <div css={s.container}>
        <div className=''>
          <div className='icon' onClick={handleStateChangeClick}>
            <div className={`move ${isDone ? "right" : "" }`}></div>
            <div className='status'>미완료</div>
            <div className='status'>완료</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubList;
