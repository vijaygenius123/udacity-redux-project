import React from 'react';

const OrderingButton = () => {
  return (
    <div>
      <div className="dropdown show">
        <button className="btn btn-secondary dropdown-toggle" href="#" role="button" id="ordering" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Order by:
        </button>
        <div className="dropdown-menu" aria-labelledby="ordering">
          <a className="dropdown-item" href="#">Date asc</a>
          <a className="dropdown-item" href="#">Date desc</a>
          <a className="dropdown-item" href="#">Score asc</a>
          <a className="dropdown-item" href="#">Score desc</a>
        </div>
      </div>
    </div>
  )
}

export default OrderingButton;
