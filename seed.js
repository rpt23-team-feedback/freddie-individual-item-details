const faker = require('faker');
const {saveNewGame} = require('./database/index');

const seedGames = async () => {
  try {
    const gameLimit = 300;
    const games = [];
    const systemOptions = ['Linux', 'Mac', 'Windows', 'Steam'];
    const randomSystemIdx = () => Math.floor(Math.random() * systemOptions.length);

    const getSystemOptions = () => {
      let systems = [];
      let systemsLength = randomSystemIdx();
      while (systems.length <= systemsLength) {
        let operatingSystem = systemOptions[randomSystemIdx()];
        if (!systems.includes(operatingSystem)) {
          systems.push(operatingSystem);
        }
      }
      return systems;
    }

    const getCreators = () => {
      const creators = [];
      const creatorLimit = Math.floor(Math.random() * 3);
      while (creators.length <= creatorLimit) {
        creators.push(faker.company.companyName());
      }
      return creators;
    }

    for (let i = 0; i < gameLimit; i++) {
      games.push(
        saveNewGame({
          name: faker.lorem.words(),
          photo_url: faker.image.imageUrl(),
          video_url: faker.image.imageUrl(),
          creators: getCreators(),
          os_options: getSystemOptions(),
          description: faker.lorem.paragraph(),
          gameplay: [faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence()],
          key_features: [faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(),],
        })
      )
    }
  } catch (error) {
    console.log(error);
  }
}

seedGames();

module.exports.seedGames = seedGames;
