import React from "react";

function Cart() {
  return (
    <div className="align-content w-96 mx-auto">
      <figure>
        <img className="w-96 h-96" src={data.imageUrl} alt="rasm" />
      </figure>
      <div className="card-body">
        <h2 className="card-title -mt-4 text-2xl">Name: Shum bola</h2>
        <p>
          Description:{" "}
          <i>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium, libero maxime sit sequi atque officiis minima
            similique? Eius, natus ut, deleniti exercitationem nemo aperiam qui
            ab vel nisi ratione placeat!
          </i>
        </p>
        <div className="card-actions">
          <div className="">Cover Type: hard</div>
        </div>
        <div className="card-actions">
          <div className="">Pages: 210</div>
        </div>
        <button className="btn btn-secondary -mb-2 mt-2">More</button>
      </div>
    </div>
  );
}

export default Cart;
