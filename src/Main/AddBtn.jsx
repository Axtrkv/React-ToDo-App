import React, { useState } from "react";

function AddBtn({todos, onCreate, ClearAll}) {
  const [value, setValue] = useState("");

  function submitBtn(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form className="main" onSubmit={submitBtn}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="example"
        placeholder="Write something..."
      />
      <button type="submit" className="addBtn plus" title="Add new task">
        {" "}
        +{" "}
      </button>
      <button type="button" onClick={() => ClearAll(todos)} className="removeBtn ex" title="Remove all">
        {" "}
        ×{" "}
      </button>
    </form>
  );
}

export default AddBtn;
