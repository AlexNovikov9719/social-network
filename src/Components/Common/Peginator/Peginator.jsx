import React, {useState} from 'react';
import style from "./Peginator.module.css";
import cn from "classnames";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={style.paginator}>
        { portionNumber > 1
            ? <div className={style.buttonPrev}>
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
             </div>
            : <div className={style.buttonPrevDisabled}>
                <button disabled={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            </div>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={ cn({ [style.selectedPage]: currentPage === p }, style.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        { portionCount > portionNumber
       ? <div className={style.buttonNext}>
                <button onClick={() => { setPortionNumber(portionNumber + 1 ) }}>NEXT</button>
        </div>
       : <div className={style.buttonNextDisabled}>
                <button disabled={() => { setPortionNumber(portionNumber + 1 ) }}>NEXT</button>
        </div>
        }


    </div>
}

export default Paginator;