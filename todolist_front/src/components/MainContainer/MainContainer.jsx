
/** @jsxImportSource @emotion/react */

import * as s from './style';
import { useRecoilState } from 'recoil';
import { selectMonthAtom } from '../../atoms/todolistAtom';

function MainContainer({children}) {

  const [ selectMonth, setSelectMonth ] = useRecoilState(selectMonthAtom);

  const handleMonthChange = (e) => {
    setSelectMonth(e.target.value);
  };

  return (
    <>
      <div css={s.container}>
        <h1>TODO LIST</h1>
        <p><input type="month" onChange={handleMonthChange} value={selectMonth} /></p>
      </div>
      <div css={s.layout}>
        {children}
      </div>
    </> 
  )
}

export default MainContainer;