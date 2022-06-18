export const createMarketsTable = `
DROP TABLE IF EXISTS markets;
CREATE TABLE IF NOT EXISTS markets (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  desc VARCHAR NOT NULL,
  price INT NOT NULL
  )
  `;

export const insertProducts = `
INSERT INTO markets(name, desc, price)
VALUES ('chidimo', 'first desc', 4000),
      ('chidimo', 'second desc', 6000)
`;

export const dropMarketsTable = 'DROP TABLE markets';
