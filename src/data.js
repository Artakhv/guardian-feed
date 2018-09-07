const page = 4
const url =
  `https://content.guardianapis.com/search?api-key=d1820412-5603-4fe0-99d8-370cf09ce463&show-fields=thumbnail&page=${page}`;
export default async () => {
  try {
    const result = await fetch(url);
    const resultToJson = await result.json();
    return resultToJson;
  } catch (error) {
    return console.log(error);
  }
};
