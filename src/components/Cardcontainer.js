import dynamic from "next/dynamic";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
const Card = dynamic(() => import("./Card"));
import { initState } from "../features/cardSlice";
function CardContainer() {
  const aiList = useSelector((state) => state.card.aiList);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("/api/aiList")
      .then((res) => res.json())
      .then((data) => dispatch(initState(data.content)));
  }, []);

  const [pagination, setPagination] = useState({
    data: aiList,
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: [],
  });

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      offset: 0,
    }));
  }, [aiList]);

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      data: aiList,
      pageCount: Math.ceil(aiList.length / prevState.numberPerPage),
    }));
  }, [aiList, pagination.numberPerPage]);

  const memoizedCurrentData = useMemo(() => {
    return pagination.data.slice(
      pagination.offset,
      pagination.offset + pagination.numberPerPage
    );
  }, [pagination.data, pagination.offset, pagination.numberPerPage]);

  const handlePageClick = useCallback(
    (event) => {
      const selected = event.selected;
      const offset = selected * pagination.numberPerPage;
      setPagination((prevState) => ({
        ...prevState,
        offset,
      }));
    },
    [pagination.numberPerPage]
  );

  const memoizedPagination = useMemo(() => {
    return {
      ...pagination,
      currentData: memoizedCurrentData,
    };
  }, [pagination, memoizedCurrentData]);

  return (
    <div className="cardContainer">
      {memoizedPagination.currentData.length > 0 ? (
        memoizedPagination.currentData.map((item, index) => (
          <Card key={item.id} {...item} />
        ))
      ) : (
        <div className="containerNoResults">
          <p className="noResultsText">No results found</p>
        </div>
      )}
      <div className="btn-container">
        <ReactPaginate
          key={aiList.length}
          activeClassName={"item active "}
          breakClassName={"item break-me "}
          subContainerClassName={"pages pagination"}
          breakLabel={"..."}
          containerClassName={"pagination"}
          disabledClassName={"disabled-page"}
          marginPagesDisplayed={2}
          nextClassName={"item next "}
          // nextLabel={<ChevronRight style={{ fontSize: 18, width: 150 }} />}
          onPageChange={handlePageClick}
          pageCount={pagination.pageCount}
          forcePage={pagination.pageCount > 0 ? 0 : -1}
          pageClassName={"item pagination-page "}
          pageRangeDisplayed={2}
          previousClassName={"item previous"}
          // previousLabel={<ChevronLeft style={{ fontSize: 18, width: 150 }} />}
        />
      </div>
    </div>
  );
}

export default CardContainer;
