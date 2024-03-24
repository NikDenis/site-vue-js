const NewsStore = {
  state: {
    newsArticles: [
      {
        id: 1,
        image: require('@/assets/images/news-article1.jpg'),
        nameTag: 'Kitchan design',
        info: 'Let’s get solution for building construction work',
        date: '26 December,2022',
        linkDetails: '/blog-details',
      },
      {
        id: 2,
        image: require('@/assets/images/news-article2.jpg'),
        nameTag: 'Living design',
        info: 'Low cost latest invented interior designing ideas.',
        date: '22 December,2022',
        linkDetails: '/blog-details',
      },
      {
        id: 3,
        image: require('@/assets/images/news-article3.jpg'),
        nameTag: 'Interior Design',
        info: 'Best for any office & business interior solution',
        date: '25 December,2022',
        linkDetails: '/blog-details',
      },
      // {
      //   id: 4,
      //   image: require('@/assets/images/blog/news-article4.jpg'),
      //   nameTag: 'Interior Design',
      //   info: 'Best for any office & business interior solution',
      //   date: '25 December,2022',
      // },
      // {
      //   id: 5,
      //   image: require('@/assets/images/blog/news-article5.jpg'),
      //   nameTag: 'Interior Design',
      //   info: 'Best for any office & business interior solution',
      //   date: '25 December,2022',
      // },
      // {
      //   id: 6,
      //   image: require('@/assets/images/blog/news-article6.jpg'),
      //   nameTag: 'Interior Design',
      //   info: 'Best for any office & business interior solution',
      //   date: '25 December,2022',
      // },
    ]
  }
}

export default NewsStore;