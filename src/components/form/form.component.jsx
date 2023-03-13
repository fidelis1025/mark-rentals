import React from "react";

const Form = () => {
  return (
    <div>
      <label class="inline-flex items-center">
        <input type="text" class="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"/>
        <span class="ml-2">Name</span>
      </label>
    </div>
  );
};

export default Form;
