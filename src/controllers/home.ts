/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express-serve-static-core';
// eslint-disable-next-line no-unused-vars
import { NextFunction } from 'connect';

const showWelcome = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    return res.render('afterLogin');
  } catch (error) {
    return next(error);
  }
};

export {
  showWelcome,
};
