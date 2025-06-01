
// components/common/Card.tsx

import React from 'react';

type CardProps = {
  title: string;
  body: string;
};

const Card: React.FC<CardProps> = ({ title, body }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Card;
