import React from 'react';

export default function Card({ children, className, hover }) {

  return (
    <div className={`card p-3 shadow-sm-new ${hover ? 'card-hover' : ''} ${className}`}>
      {children}
    </div>
  )
}