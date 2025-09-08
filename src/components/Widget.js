import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";
import { useDispatch } from "react-redux";
import { removeWidget } from "../store/dashboardSlice";

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();
  const COLORS = ["#2563eb", "#f97316", "#22c55e", "#ef4444", "#a855f7"];

  const renderContent = () => {
    switch(widget.type){
      case "pie_accounts":
        const accData = [{ name:"Connected", value:2 },{ name:"Not Connected", value:2 }];
        return (
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={accData} dataKey="value" outerRadius={70} label>
                {accData.map((e,i)=><Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      case "pie_risk":
        const riskData = [
          { name:"Failed", value:1689 },
          { name:"Warning", value:681 },
          { name:"Not available", value:36 },
          { name:"Passed", value:7253 }
        ];
        return (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={riskData} dataKey="value" innerRadius={40} outerRadius={80} label>
                {riskData.map((e,i)=><Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      case "bar_vulnerabilities":
        const vulnData = [
          { severity:"Critical", count:200 },
          { severity:"High", count:760 },
          { severity:"Medium", count:400 },
          { severity:"Low", count:110 }
        ];
        return (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={vulnData}>
              <XAxis dataKey="severity" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        );
      case "bar_images":
        const imgData = [
          { level:"Critical", val:2 },
          { level:"High", val:2 }
        ];
        return (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart layout="vertical" data={imgData}>
              <XAxis type="number" />
              <YAxis type="category" dataKey="level" />
              <Tooltip />
              <Bar dataKey="val" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        );
      case "placeholder":
        return <div className="flex items-center justify-center h-32 text-gray-500">No Graph data available!</div>;
      default:
        return <p className="text-gray-600">{widget.text || "Widget content"}</p>;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 relative">
      <h4 className="font-medium mb-2">{widget.name}</h4>
      {renderContent()}
      <button className="absolute top-2 right-2 text-red-500" onClick={()=>dispatch(removeWidget({ categoryId, widgetId: widget.id }))}>✖</button>
    </div>
  );
};

export default Widget;
