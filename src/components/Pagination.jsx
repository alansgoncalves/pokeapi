import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <div className="pagination">
      <button onClick={onLeftClick}>
        <div>⬅️</div>
      </button>
      <p className="pagi-text">
        &nbsp;{page} de {totalPages}&nbsp;
      </p>
      <button onClick={onRightClick}>
        <div>➡️</div>
      </button>
    </div>
  );
};

export default Pagination;
