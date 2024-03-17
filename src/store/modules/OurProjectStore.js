const OurProjectStore = {
  state: {
    promoTitle: 'Our Project',
    promoText: 'Home / Project',
    categoryItems: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],


    bathroom: [
      {
        id: 1,
        imgSrc: require('@/assets/images/our-project/card-img_3.jpg'),
        title: 'Minimal bedroom1',
        text: 'Decor / Artchitecture',
      },
      {
        id: 2,
        imgSrc: require('@/assets/images/our-project/card-img_4.jpg'),
        title: 'Classic Minimal Bedroom1',
        text: 'Decor / Artchitecture',
      },
      {
        id: 3,
        imgSrc: require('@/assets/images/our-project/card-img_1.jpg'),
        title: 'Minimal Bedroom table1',
        text: 'Decor / Artchitecture',
      },
      {
        id: 4,
        imgSrc: require('@/assets/images/our-project/card-img_2.jpg'),
        title: 'Modern Medroom1',
        text: 'Decor / Artchitecture',
      },
      {
        id: 5,
        imgSrc: require('@/assets/images/our-project/card-img_8.jpg'),
        title: 'Minimal Bedroom1',
        text: 'Decor / Artchitecture',
      },
      {
        id: 6,
        imgSrc: require('@/assets/images/our-project/card-img_6.jpg'),
        title: 'Modern Bedroom1',
        text: 'Decor / Artchitecture',
      },
      {
        id: 7,
        imgSrc: require('@/assets/images/our-project/card-img_7.jpg'),
        title: 'System Table1',
        text: 'Decor / Artchitecture',
      },
      {
        id: 8,
        imgSrc: require('@/assets/images/our-project/card-img_5.jpg'),
        title: 'Modern Bedroom1',
        text: 'Decor / Artchitecture',
      },
    ],
    bedroom: [
      {
        id: 1,
        imgSrc: require('@/assets/images/our-project/card-img_1.jpg'),
        title: 'Minimal bedroom',
        text: 'Decor / Artchitecture',
      },
      {
        id: 2,
        imgSrc: require('@/assets/images/our-project/card-img_2.jpg'),
        title: 'Classic Minimal Bedroom',
        text: 'Decor / Artchitecture',
      },
      {
        id: 3,
        imgSrc: require('@/assets/images/our-project/card-img_3.jpg'),
        title: 'Minimal Bedroom table',
        text: 'Decor / Artchitecture',
      },
      {
        id: 4,
        imgSrc: require('@/assets/images/our-project/card-img_4.jpg'),
        title: 'Modern Medroom',
        text: 'Decor / Artchitecture',
      },
      {
        id: 5,
        imgSrc: require('@/assets/images/our-project/card-img_5.jpg'),
        title: 'Minimal Bedroom',
        text: 'Decor / Artchitecture',
      },
      {
        id: 6,
        imgSrc: require('@/assets/images/our-project/card-img_6.jpg'),
        title: 'Modern Bedroom',
        text: 'Decor / Artchitecture',
      },
      {
        id: 7,
        imgSrc: require('@/assets/images/our-project/card-img_7.jpg'),
        title: 'System Table',
        text: 'Decor / Artchitecture',
      },
      {
        id: 8,
        imgSrc: require('@/assets/images/our-project/card-img_8.jpg'),
        title: 'Modern Bedroom',
        text: 'Decor / Artchitecture',
      },
    ],
    kitchan: [
      {
        id: 1,
        imgSrc: require('@/assets/images/our-project/card-img_5.jpg'),
        title: 'Minimal bedroom3',
        text: 'Decor / Artchitecture',
      },
      {
        id: 2,
        imgSrc: require('@/assets/images/our-project/card-img_3.jpg'),
        title: 'Classic Minimal Bedroom3',
        text: 'Decor / Artchitecture',
      },
      {
        id: 3,
        imgSrc: require('@/assets/images/our-project/card-img_2.jpg'),
        title: 'Minimal Bedroom table3',
        text: 'Decor / Artchitecture',
      },
      {
        id: 4,
        imgSrc: require('@/assets/images/our-project/card-img_4.jpg'),
        title: 'Modern Medroom3',
        text: 'Decor / Artchitecture',
      },
      {
        id: 5,
        imgSrc: require('@/assets/images/our-project/card-img_1.jpg'),
        title: 'Minimal Bedroom3',
        text: 'Decor / Artchitecture',
      },
      {
        id: 6,
        imgSrc: require('@/assets/images/our-project/card-img_6.jpg'),
        title: 'Modern Bedroom3',
        text: 'Decor / Artchitecture',
      },
      {
        id: 7,
        imgSrc: require('@/assets/images/our-project/card-img_7.jpg'),
        title: 'System Table3',
        text: 'Decor / Artchitecture',
      },
      {
        id: 8,
        imgSrc: require('@/assets/images/our-project/card-img_8.jpg'),
        title: 'Modern Bedroom3',
        text: 'Decor / Artchitecture',
      },
    ],
    livingarea: [
      {
        id: 1,
        imgSrc: require('@/assets/images/our-project/card-img_8.jpg'),
        title: 'Minimal bedroom4',
        text: 'Decor / Artchitecture',
      },
      {
        id: 2,
        imgSrc: require('@/assets/images/our-project/card-img_2.jpg'),
        title: 'Classic Minimal Bedroom4',
        text: 'Decor / Artchitecture',
      },
      {
        id: 3,
        imgSrc: require('@/assets/images/our-project/card-img_3.jpg'),
        title: 'Minimal Bedroom table4',
        text: 'Decor / Artchitecture',
      },
      {
        id: 4,
        imgSrc: require('@/assets/images/our-project/card-img_4.jpg'),
        title: 'Modern Medroom4',
        text: 'Decor / Artchitecture',
      },
      {
        id: 5,
        imgSrc: require('@/assets/images/our-project/card-img_5.jpg'),
        title: 'Minimal Bedroom4',
        text: 'Decor / Artchitecture',
      },
      {
        id: 6,
        imgSrc: require('@/assets/images/our-project/card-img_6.jpg'),
        title: 'Modern Bedroom4',
        text: 'Decor / Artchitecture',
      },
      {
        id: 7,
        imgSrc: require('@/assets/images/our-project/card-img_7.jpg'),
        title: 'System Table4',
        text: 'Decor / Artchitecture',
      },
      {
        id: 8,
        imgSrc: require('@/assets/images/our-project/card-img_1.jpg'),
        title: 'Modern Bedroom4',
        text: 'Decor / Artchitecture',
      },
    ],
  }
}

export default OurProjectStore;