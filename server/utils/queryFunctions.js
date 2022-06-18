import { pool } from '../models/pool';
import { createMarketsTable, dropMarketsTable, insertMarkets } from './queries';

export const executeQueryArray = async arr =>
  new Promise(resolve => {
    const stop = arr.length;
    arr.forEach(async (q, index) => {
      await pool.query(q);
      if (index + 1 === stop) resolve();
    });
  });

export const dropTables = () => executeQueryArray([dropMarketsTable]);
export const createTables = () => executeQueryArray([createMarketsTable]);
export const insertIntoTables = () => executeQueryArray([insertMarkets]);
