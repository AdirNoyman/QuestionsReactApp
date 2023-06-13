import React, { useState } from 'react';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
      </header>
      <p>{info}</p>
    </article>
  );
};

export default Question;
