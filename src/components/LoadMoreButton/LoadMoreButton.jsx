import React, { useState, useEffect } from "react";

export default function LoadMoreButton({ url }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <div>
      <hi>Custom Scroll Indicator</hi>

      <div className="custom-scroll-indicator">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div key={dataItem.id} className="custom-scroll-indicator__item">
                <img src={dataItem.image} alt={dataItem.name} />
                <h3>{dataItem.name}</h3>
                <p>{dataItem.description}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
