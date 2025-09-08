import React from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";

const Category = ({ category, searchTerm }) => {
  const filtered = category.widgets.filter(w =>
    w.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-3">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
        <AddWidgetForm categoryId={category.id} />
      </div>
    </div>
  );
};

export default Category;
