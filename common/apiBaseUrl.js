import axios from "axios";

export const brieApi = axios.create({
  baseURL:"http://192.168.1.169:3000/",
});

// export const brieApi = axios.create({
//   baseURL:
//     process.env.REACT_APP_ENVIRONMENT === "prod"
//       ? "https://brie.api.brain.spacehttp://localhost:3000 "
//       : "https://brie-staging.api.brain.space",
// });
