import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../store/dashboardSlice";

const AddWidgetForm = ({ categoryId }) => {
  const [name,setName] = useState("");
  const [text,setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim()){
      dispatch(addWidget({ categoryId, widget: { id:Date.now().toString(), name, text, type:"placeholder" } }));
      setName(""); setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-4 min-h-[150px]">
      <input className="border rounded p-1 mb-2 w-full" placeholder="Widget Name" value={name} onChange={e=>setName(e.target.value)} />
      <input className="border rounded p-1 mb-2 w-full" placeholder="Widget Text" value={text} onChange={e=>setText(e.target.value)} />
      <button className="bg-blue-600 text-white px-3 py-1 rounded">+ Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
