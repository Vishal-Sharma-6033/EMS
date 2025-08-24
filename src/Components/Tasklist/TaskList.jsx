import React from "react";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-no w-full py-5  mt-10 "
    >
      <div className="h-full flex-shrink-0 w-[380px] p-5 bg-violet-400 rounded-xl ">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          voluptatem, molestiae et excepturi sequi, velit officiis similique
          mollitia distinctio qui, fugiat aut voluptates obcaecati eius
          repellendus laborum ipsum dicta corporis? Lorem ipsum,
        </p>
      </div>
      <div className="h-full flex-shrink-0 w-[380px] p-5 bg-green-400 rounded-xl ">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          voluptatem, molestiae et excepturi sequi, velit officiis similique
          mollitia distinctio qui, fugiat aut voluptates obcaecati eius
          repellendus laborum ipsum dicta corporis? Lorem ipsum,
        </p>
      </div>
      <div className="h-full flex-shrink-0 w-[380px] p-5 bg-pink-400 rounded-xl ">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          voluptatem, molestiae et excepturi sequi, velit officiis similique
          mollitia distinctio qui, fugiat aut voluptates obcaecati eius
          repellendus laborum ipsum dicta corporis? Lorem ipsum,
        </p>
      </div>
      <div className="h-full flex-shrink-0 w-[380px] p-5 bg-yellow-400 rounded-xl ">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          voluptatem, molestiae et excepturi sequi, velit officiis similique
          mollitia distinctio qui, fugiat aut voluptates obcaecati eius
          repellendus laborum ipsum dicta corporis? Lorem ipsum,
        </p>
      </div>
      <div className="h-full flex-shrink-0 w-[380px] p-5 bg-blue-400 rounded-xl ">
        <div className="flex justify-between items-center ">
          <h3 className="bg-red-600 text-sm px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          voluptatem, molestiae et excepturi sequi, velit officiis similique
          mollitia distinctio qui, fugiat aut voluptates obcaecati eius
          repellendus laborum ipsum dicta corporis? Lorem ipsum,
        </p>
      </div>
    </div>
  );
};

export default TaskList;
