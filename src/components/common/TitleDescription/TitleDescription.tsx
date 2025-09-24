import React from 'react';

export type TextAlignment = 'left' | 'center' | 'right';

interface TitleDescriptionProps {
  title: string;
  description: string;
  titleAlignment?: TextAlignment;
  descriptionAlignment?: TextAlignment;
  titleClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({
  title,
  description,
  titleAlignment = 'left',
  descriptionAlignment = 'left',
  titleClassName = '',
  descriptionClassName = '',
  containerClassName = '',
  titleTag = 'h2'
}) => {
  const getAlignmentClass = (alignment: TextAlignment) => {
    switch (alignment) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  const TitleTag = titleTag;

  const getTitleSizeClass = (tag: string) => {
    switch (tag) {
      case 'h1':
        return 'text-3xl md:text-4xl lg:text-5xl';
      case 'h2':
        return 'text-3xl md:text-4xl';
      case 'h3':
        return 'text-2xl md:text-3xl';
      case 'h4':
        return 'text-xl md:text-2xl';
      case 'h5':
        return 'text-lg md:text-xl';
      case 'h6':
        return 'text-base md:text-lg';
      default:
        return 'text-3xl md:text-4xl';
    }
  };

  return (
    <div className={`space-y-4 ${containerClassName}`}>
      <TitleTag 
        className={`${getTitleSizeClass(titleTag)} font-bold text-gray-900 ${getAlignmentClass(titleAlignment)} ${titleClassName}`}
      >
        {title}
      </TitleTag>
      <p 
        className={`text-sm md:text-base text-gray-600 leading-relaxed ${getAlignmentClass(descriptionAlignment)} ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
};

export default TitleDescription;
