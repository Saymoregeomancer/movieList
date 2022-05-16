

import './pagination.sass'
import { useDispatch, useSelector } from 'react-redux';

import {setCurrentPage} from '../../action/index';

const Pagination = () => {
        const dispatch = useDispatch();
        const {currentPage,  totalCount} = useSelector(state => state.movies);

        const onClick = (event) => {
                let pageNum = event.target.dataset.key;
                if (pageNum == 'next')
                        {pageNum = currentPage + 1;
                                if (pageNum > totalCount) {
                                        return pageNum = totalCount
                                }}
                else if (pageNum == 'prev')
                        {pageNum = currentPage -  1;
                                if (pageNum < 1) {
                                        return pageNum = 1
                                } }

                dispatch(setCurrentPage(+pageNum));
        }
        
        const elementsRender = (currentPage) => {
                let arr;
                if (currentPage == 1) {
                         arr = [currentPage , currentPage+1 , currentPage +2];
                } else {
                         arr = [currentPage-1 , currentPage , currentPage +1];
                }
                return   arr.map((i) => {
                        return    <div key={i} data-key={i} onClick={onClick} className={i == currentPage ? 'page page_active' : 'page'}>{i}</div>})
        }


        const elements = elementsRender(currentPage, totalCount);

        return (
                <div className="pages">
                        <span data-key='prev' onClick={onClick} className="page page_prev">prev</span>
                        {elements}
                        <span data-key='next' onClick={onClick} className="page page_next">next</span>
                </div>
        )
    }
    
    export default Pagination ;