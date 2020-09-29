const faker = require('faker');
const {saveNewGame} = require('./database/index');

const seedGames = async () => {
  try {
    const gameLimit = 300;
    const games = [];

    for (let i = 0; i < gameLimit; i++) {
      games.push(
        saveNewGame({
          name: faker.lorem.words(),
          photo_url: faker.image.imageUrl(),
          video_url: faker.image.imageUrl(),
          creators: [faker.company.companyName(), faker.company.companyName(), faker.company.companyName()],
          os_options: [faker.internet.userAgent(), faker.internet.userAgent(), faker.internet.userAgent(), faker.internet.userAgent()],
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
