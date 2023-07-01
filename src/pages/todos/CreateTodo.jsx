import React from "react";

const CreateTodo = () => {
  return (
    <section className="flex justify-center mt-5">
      <section className="border rounded w-4/12 p-5">
        <h1 className="text-center font-display text-2xl">Create a Todo</h1>
        <div className="border-b h-5 my-5"></div>
        <div className="mb-5">
          <label className="block mb-1 font-semibold" htmlFor="">
            Title
          </label>
          <input
            className="border py-2 px-4 rounded w-full"
            type="text"
            placeholder="kya karna hai aaj ?"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-1 font-semibold" htmlFor="">
            Description
          </label>
          <textarea
            rows={5}
            className="border py-2 px-4 rounded w-full"
            placeholder="aur batao ?"
            required
          />
        </div>
        <div className="mb-5">
          <button className="px-5 py-2 rounded w-full bg-black text-white font-display text-xl">
            Create
          </button>
        </div>
      </section>
    </section>
  );
};

export default CreateTodo;
