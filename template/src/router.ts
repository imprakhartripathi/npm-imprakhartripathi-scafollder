import express from "express";

export const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Welcome');
});

router.get('/ping', (req, res) => {
  res.status(200).send('pong');
});
