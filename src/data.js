// uuid for keys
import { v4 as uuidv4 } from 'uuid';
// import images
import image1 from './images/alexRossXmen.jpg'
import image2 from './images/Arcane-Landscape.jpg'
import image3 from './images/tallneck.jpg'
import image4 from './images/bwonsamdi.jpg'
import image5 from './images/forest.jpg'
import image6 from './images/horizon.jpg'
import image7 from './images/jinx.jpg'
import image8 from './images/kang.jpg'
import image9 from './images/miles.jpg'
// testimonal images
import test1 from './images/test1.jpeg'
import test2 from './images/test2.jpeg'
import test3 from './images/test3.jpeg'
// artist 
import artist from './images/artist.jpg'

export const artistImg = () => {
  return [
    {
      src: artist,
    }
  ]

}

export const headCarousel = () => {
  return [
    {
      src: image1,
      index: 1,
      placeholder: 'image # 1',
      imageKey: uuidv4(),
      btnKey: uuidv4(),
    },
    {
      src: image2,
      index: 2,
      placeholder: 'image # 2',
      imageKey: uuidv4(),
      btnKey: uuidv4(),
    },
    {
      src: image3,
      index: 3,
      placeholder: 'image # 3',
      imageKey: uuidv4(),
      btnKey: uuidv4(),
    },
    {
      src: image4,
      index: 4,
      placeholder: 'image # 4',
      imageKey: uuidv4(),
      btnKey: uuidv4(),
    }
  ]
}


export const portfolio = () => {
  return [
    {
      btnText: 'Portrait',
      btnKey: uuidv4(),
      index: 1,
      imgs: [
        {
          src: image1,
          className: 'image1',
          imageIndex: 0,
          key: uuidv4(),
        },
        {
          src: image2,
          className: 'image2',
          imageIndex: 1,
          key: uuidv4(),
        },
        {
          src: image3,
          className: 'image3',
          imageIndex: 2,
          key: uuidv4(),
        },
        {
          src: image4,
          className: 'image4',
          imageIndex: 3,
          key: uuidv4(),
        },
        {
          src: image5,
          className: 'image5',
          imageIndex: 4,
          key: uuidv4(),
        },
        {
          src: image6,
          className: 'image6',
          imageIndex: 5,
          key: uuidv4(),
        },
        {
          src: image7,
          className: 'image7',
          imageIndex: 6,
          key: uuidv4(),
        },
      ],
    },
    {
      btnText: 'Half Body',
      btnKey: uuidv4(),
      index: 2,
      imgs: [
        {
          src: image9,
          className: 'image1 portrait',
          imageIndex: 0,
          key: uuidv4(),
        },
        {
          src: image8,
          className: 'image2 portrait',
          imageIndex: 1,
          key: uuidv4(),
        },
        {
          src: image7,
          className: 'image3 portrait',
          imageIndex: 2,
          key: uuidv4(),
        },
        {
          src: image6,
          className: 'image4 portrait',
          imageIndex: 3,
          key: uuidv4(),
        },
        {
          src: image5,
          className: 'image5 portrait',
          imageIndex: 4,
          key: uuidv4(),
        },
        {
          src: image4,
          className: 'image6 portrait',
          imageIndex: 5,
          key: uuidv4(),
        },
        {
          src: image3,
          className: 'image7 portrait',
          imageIndex: 6,
          key: uuidv4(),
        },
      ],
    },
    {
      btnText: 'Full Body',
      btnKey: uuidv4(),
      index: 3,
      imgs: [
        {
          src: image3,
          className: 'image1 landscape',
          imageIndex: 0,
          key: uuidv4(),
        },
        {
          src: image6,
          className: 'image2 landscape',
          imageIndex: 1,
          key: uuidv4(),
        },
        {
          src: image8,
          className: 'image3 landscape',
          imageIndex: 2,
          key: uuidv4(),
        },
        {
          src: image9,
          className: 'image4 landscape',
          imageIndex: 3,
          key: uuidv4(),
        },
        {
          src: image1,
          className: 'image5 landscape',
          imageIndex: 4,
          key: uuidv4(),
        },
        {
          src: image1,
          className: 'image6 landscape',
          imageIndex: 5,
          key: uuidv4(),
        },
        {
          src: image4,
          className: 'image7 landscape',
          imageIndex: 6,
          key: uuidv4(),
        },
      ],
    },
  ]
}

export const testimonialState = () => {
  return [
    {
      wrapperClass: 'test',
      imgSrc: test3,
      imgAlt: 'alt',
      text: 'Captivating illustrations brought my favorite heroes to life in stunning detail.',
      name: '- John Doe',
      key: uuidv4(),
    },
    {
      wrapperClass: 'test reverse',
      imgSrc: test2,
      imgAlt: 'alt',
      text: "Every panel tells a story, weaving magic through the artist's skillful hand.",
      name: '- Kevin Hart',
      key: uuidv4(),
    },
    {
      wrapperClass: 'test',
      imgSrc: test1,
      imgAlt: 'alt',
      text: 'Dynamic artwork filled with emotion, elevating every narrative to new heights of imagination.',
      name: '- James Patterson',
      key: uuidv4(),
    }
  ]
}

export const commissionState = () => {
  return [
    {
      name: 'Portrait',
      img: image1,
      a4sizeIn: '8.27in x 11.69in',
      a4sizeCm: '21.0cm x 29.7cm ',
      a3sizeCm: '29.7cm x 42cm ',
      a3sizeIn: '11.7 x 16.5in',
      a4Price: '$300',
      a3Price: '$600',
    },
    {
      name: 'Half Body',
      img: image2,
      a4sizeIn: '8.27in x 11.69in',
      a4sizeCm: '21.0cm x 29.7cm ',
      a3sizeCm: '29.7cm x 42cm ',
      a3sizeIn: '11.7 x 16.5in',
      a4Price: '$350',
      a3Price: '$700',
    },
    {
      name: 'Full Body',
      img: image3,
      a4sizeIn: '8.27in x 11.69in',
      a4sizeCm: '21.0cm x 29.7cm ',
      a3sizeCm: '29.7cm x 42cm ',
      a3sizeIn: '11.7 x 16.5in',
      a4Price: '400',
      a3Price: '$800',
    },
  ]
}