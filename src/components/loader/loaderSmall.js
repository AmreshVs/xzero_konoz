import React from 'react';

export default function LoaderSmall() {
  return (
    <div className="text-center w-100">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}