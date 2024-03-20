import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = process.env.BASE_URL;
  let { lang } = req.query;

  if (typeof lang !== 'string' || !['uz', 'ru', 'en'].includes(lang)) {
    lang = 'en'; // Default to 'en' if lang is not valid
  }

  const apiUrl = `${baseUrl}/api/general?lang=${lang}`;

  try {
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}