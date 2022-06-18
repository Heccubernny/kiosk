import Model from '../models/model';

const marketsModel = new Model('markets');

export const marketsPage = async (req, res) => {
  try {
    const data = await marketsModel.select('name, desc, price');
    res.status(200).json({ product: data.rows });
  } catch (err) {
    res.status(200).json({ product: err.stack });
  }
};
