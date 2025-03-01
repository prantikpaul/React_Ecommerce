import React from 'react';
import Carousel from './Carousel';

const slides = [
  {
    imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'Slide 1 Title',
    subtitle: 'Slide 1 Subtitle',
    description: 'This is the description for slide 1.',
  },
  {
    imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp',
    title: 'Slide 2 Title',
    subtitle: 'Slide 2 Subtitle',
    description: 'This is the description for slide 2.',
  },
  {
    imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
    title: 'Slide 3 Title',
    subtitle: 'Slide 3 Subtitle',
    description: 'This is the description for slide 3.',
  },
];

export default function Slider() {
  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
}
