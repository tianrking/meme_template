import React from 'react';

const ImageTextSection = ({ imageSrc, title, content, isImageLeft = true }) => {
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px',
    margin: '40px 0',
  };

  const imageStyle = {
    maxWidth: '45%',
    borderRadius: '10px',
  };

  const textStyle = {
    flex: 1,
  };

  const Content = isImageLeft ? (
    <>
      <img src={imageSrc} alt={title} style={imageStyle} />
      <div style={textStyle}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{title}</h2>
        <p>{content}</p>
      </div>
    </>
  ) : (
    <>
      <div style={textStyle}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{title}</h2>
        <p>{content}</p>
      </div>
      <img src={imageSrc} alt={title} style={imageStyle} />
    </>
  );

  return <div style={sectionStyle}>{Content}</div>;
};

export default ImageTextSection;