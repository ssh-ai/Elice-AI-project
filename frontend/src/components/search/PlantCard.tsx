import React from 'react';

type CardProps = {
  kor: string;
  name: string;
  image: string;
  rank: number;
  onClick: React.MouseEventHandler<any>;
};

const PlantCard: React.FC<CardProps> = ({
  kor,
  image,
  name,
  rank,
  onClick,
}) => {
  return (
    <div className="card-div">
      <div
        id={`${rank}`}
        className="card-img"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPositionY: '-50px',
        }}
        onClick={onClick}
      ></div>
      <div className="px-5 py-3">
        <h3>{kor}</h3>
        <span className="mt-2 text-gray-500">{name}</span>
      </div>
    </div>
  );
};

export default PlantCard;
