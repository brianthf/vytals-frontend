import React from "react";
import Plot from "react-plotly.js";
import useSWR from "swr";

export default function Plots({ state }) {
  const { data, error } = useSWR(`/activities/user/${state.userId}/all`, {
    suspense: true,
  });

  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
        { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
      ]}
      layout={{ width: 300, height: 240, title: "A Fancy Plot" }}
    />
  );
}