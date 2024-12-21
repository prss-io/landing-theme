import '../styles/Hero.css';
import React, { FunctionComponent, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  imageUrl: ReactNode;
  afterComponent?: ReactNode;
  heroClass?: string;
}

const Hero: FunctionComponent<IProps> = ({
  children,
  imageUrl = '',
  afterComponent,
  heroClass
}) => {
  return (
    <div className={`hero${heroClass ? ` ${heroClass}` : ''}`}>
      <div
        className="hero-image"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : null
        }}
      />
      <div className="container mt-5 mt-sm-0">
        <div className="row mx-2 justify-content-between">
          <div className="col">{children}</div>
        </div>
      </div>
      {afterComponent}
    </div>
  );
};

export default Hero;
