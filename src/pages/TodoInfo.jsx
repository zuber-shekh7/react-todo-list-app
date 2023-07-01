import React from "react";

const TodoInfo = () => {
  return (
    <section className="container mx-auto mt-5">
      <section>
        <div className="mb-5">
          <p className="font-thin">Title</p>
          <h1 className="font-display text-4xl">Todo Info</h1>
        </div>
        <div className="mb-5">
          <p className="font-thin">Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            sapiente exercitationem magni ipsum quas dolore animi. Dolore, quia
            aliquam eius dolor provident maiores expedita voluptatem neque
            voluptas quam architecto dolorum nobis et labore alias debitis,
            temporibus excepturi ad! Aliquam fugiat asperiores voluptatibus?
            Eligendi distinctio nisi inventore magnam blanditiis? Sequi, ut?
          </p>
        </div>
        <div className="mb-5">
          <p className="font-thin">Status</p>
          <h4 className="uppercase">Pending</h4>
        </div>
        <div className="mb-5">
          <p className="font-thin">Last Updated</p>
          <h4>2 days ago</h4>
        </div>
        <div className="mb-5">
          <p className="font-thin">Created at</p>
          <h4>26-10-2023</h4>
        </div>
      </section>
    </section>
  );
};

export default TodoInfo;
