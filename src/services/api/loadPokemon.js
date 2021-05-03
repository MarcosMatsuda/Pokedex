import axios from 'axios';

export default async function (name) {
  return new Promise(async (res, rej) => {
    const url = `https://pokeapi.glitch.me/v1/pokemon/${name}`;

    try {
      await axios
        .get(url)
        .then((el) => {
          const pokemon = el.data;
          return res(pokemon);
        })
        .catch((error) => {
          rej(null);
        });
    } catch {
      rej(null);
    }
  });
}
