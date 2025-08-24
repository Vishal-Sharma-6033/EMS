import React from 'react'

const CreateTask = () => {
  return (
    <div className=" p-5 mt-7 rounded bg-[#1c1c1c]">
        <form className="flex flex-wrap w-full items-start justify-between ">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400  border-[1px] mb-4"
                type="text"
                placeholder="Make a UI Design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400  border-[1px] mb-4"
                type="date"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400  border-[1px] mb-4"
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400  border-[1px] mb-4"
                type="text"
                placeholder="Design, Dev, Etc"
              />
            </div>
          </div>

          <div className="flex flex-col items-start w-1/2">
            <h3 className="text-sm text-gray-300 mb-0.5"> Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              cols="30"
              rows="10"
              placeholder="Describe the task"
            ></textarea>

            <button className="bg-emerald-500 hover:bg-emerald-600  px-5 rounded text-sm mt-4  w-full p-3">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask