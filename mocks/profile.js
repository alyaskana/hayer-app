import { PostsMock } from "./posts";

export const profileMock = {
  course: 3,
  social_network: "https://instagram.com",
  first_name: "Саша",
  last_name: "Барабанова",
  position: "Дизайн и программирование",
  tags: [
    { id: 1, name: "разработка" },
    { id: 2, name: "ios" },
    { id: 3, name: "react" },
  ],
  bio: "Нужно запилить небольшую фичу для учебного проекта, хотим запустить в ближайшие дни. Есть пару багов — надо их убрать и затем дописать внутренекк к залв....",
  site: "https://abarabonova.com",
  avatar: require("../assets/images/avatar.jpg"),
  posts: PostsMock,
};
