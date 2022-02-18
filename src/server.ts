import express from 'express';

const main = async () => {
  const app = express();
  app.use(express.json());

  app.get(`/`, (_, res) => {
    return res.json({ hello: `world` });
  });

  app.post(`/who-are-you`, (_, res) => {
    return res.json({ JSON: `Bourne` });
  });

  const SERVER_PORT = process.env.PORT || 3001;
  app.listen(SERVER_PORT, () => {
    console.log(`Server running on http://localhost:${SERVER_PORT}`);
  });
};

main().catch(console.error);
