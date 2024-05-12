import React from "react";
import Navbar from "../components/Navbar";

function CreateRecipe() {
  return (
    <div>
      <Navbar />
      <h3 className="align-content font-bold">Recipes</h3>

      {/* add recipe */}
      <div className="align-content w-96 mx-auto">
        <h3 className="font-extrabold text-center">Add New Recipe</h3>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold mt-3">Title:</span>
          </div>
          <input
            type="text"
            placeholder="Enter your meal name"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold mt-3">Cooking time:</span>
          </div>
          <input
            type="text"
            placeholder="Enter preparation time of your meal"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold mt-3">Image URL:</span>
          </div>
          <input
            type="url"
            placeholder="Enter image url"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold mt-3">Method:</span>
          </div>
          <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
        </label>

        <div className="justify-between mt-4">
            <a href="#" className="btn btn-primary w-40">Apply</a>
            <a href="#" className="btn bg-green-500 w-40">Preview</a>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipe;

