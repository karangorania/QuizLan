import React from "react";

const Create = () => {
  return (
    <div className="quiz-detail-wrapper">
      <div className="quiz-content-wrapper">
        <h2 className="text-2xl font-bold mb-5 title-layot">Add New Quiz</h2>
        <form className="quiz-quen-wrapper">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="course"
            >
              Course Name
            </label>
            <input
              className="input-bg-layout shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="input-bg-layout shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="input-bg-layout shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quiz"
              type="text"
              placeholder="Quiz Question"
            />
          </div>
          <div className="create-btn-wrapper">
            <button
              className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline button-layout"
              type="button"
            >
              Save Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
