import React from 'react';

const Create = () => {
  // const CoursePage = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-5">Add New Course</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="course"
          >
            Course Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="course"
            type="text"
            placeholder="What is Solana?"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="summary"
          >
            Course Summary
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="summary"
            placeholder="Summary about the course"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="quiz"
          >
            Quiz Question
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="quiz"
            type="text"
            placeholder="Quiz Question"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Save Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
