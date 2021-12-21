import { PostsMock } from "./posts";

export const profileMock = {
  course: 3,
  social_network: "https://instagram.com",
  first_name: "Саша",
  last_name: "Барабонова",
  position: "Дизайн и программирование",
  tags: [
    { id: 1, name: "разработка" },
    { id: 2, name: "ios" },
    { id: 3, name: "react" },
  ],
  bio: "я саша продуктовая дизайнерка приколистка подписывайтесь на мой смешной + красивый инстаграм",
  site: "abarabonova.com",
  avatar: require("../assets/images/avatar.jpg"),
  posts: PostsMock,
};
