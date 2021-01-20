import React from 'react';

export default function Categories({ data }) {
  return (
    <div className="bg-light categories">
      {data.map((item, index) => (
        <div className="category" key={index}>
          <span>{item.main_category_name}</span>
        </div>
      ))}
    </div>
  )
}