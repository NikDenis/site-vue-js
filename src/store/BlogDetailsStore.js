
const BlogDetailsStore = {
  state: {
    tags: [
      {
        id: 1,
        text: "Kitchen",
      },
      {
        id: 2,
        text: "Bedroom",
      },
      {
        id: 3,
        text: "Building",
      },
      {
        id: 4,
        text: "Architecture",
      },
      {
        id: 5,
        text: "Kitchen Planning",
      },
      {
        id: 6,
        text: "Bedroom",
      },
    ],
    articleDetails: [
      {
        id: "Kitchen",
        title1: "Let’s get solution for building construction work",
        date: "26 December,2022",
        imgSrc: require("@/assets/images/blog-details/img1.jpg"),
      },
      {
        id: "Bedroom",
        title1: "Let’s get solution for building construction work2",
        date: "2 December,2022",
        imgSrc: require("@/assets/images/blog-details/img2.jpg"),
      },
      {
        id: "Building",
        title1: "Let’s get solution for building construction work3",
        date: "16 December,2022",
        imgSrc: require("@/assets/images/news-article1.jpg"),
      },
      {
        id: "Architecture",
        title1: "Let’s get solution for building construction work4",
        date: "9 December,2022",
        imgSrc: require("@/assets/images/news-article2.jpg"),
      },
      {
        id: "Kitchen Planning",
        title1: "Let’s get solution for building construction work5",
        date: "5 December,2022",
        imgSrc: require("@/assets/images/news-article3.jpg"),
      },
      {
        id: "Bedroom",
        title1: "Let’s get solution for building construction work6",
        date: "28 December,2022",
        imgSrc: require("@/assets/images/blog/news-article4.jpg"),
      },
    ],
    currentArticle: {
      date: "26 December,2022",
      title: "Let’s get solution for building construction work",
      img: require("@/assets/images/blog-details/img1.jpg"),
    }
  },

}

export default BlogDetailsStore;