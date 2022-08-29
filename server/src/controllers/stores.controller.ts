import { Request, Response, NextFunction } from 'express';

import {
  getStores,
  getPaginatedStores,
  adminGetStores,
  adminGetPaginatedStores,
  adminAddStore,
  adminDeleteStore,
  adminUpdateStore
} from '../models/stores.model.js';
import StoresDTO from '../views/stores.view.js';
import DBError from '../errors/db-error.error.js';
import UserError from '../errors/user-error.error.js';
import { Store } from '../schemas/stores.schema.d.js';

const { MESSAGES } = UserError;

function httpGetPaginatedStores(req: Request, res: Response, next: NextFunction) {
  const { pagination } = res.locals;
  const { page, limit } = pagination;

  try {
    const stores = getPaginatedStores(page, limit);

    const DTO = {
      pagination,
      data: stores
    };

    return res.status(200).json(new StoresDTO(DTO));
  } catch (e) {
    next(new DBError());
  }
}

async function httpGetFeaturedStores(req: Request, res: Response, next: NextFunction) {
  try {
    const filter = { featured: true };
    const stores = await getStores(filter);

    const DTO = { data: stores };

    return res.status(200).json(new StoresDTO(DTO));
  } catch (e) {
    next(new DBError());
  }
}

async function httpGetSearchedStores(req: Request, res: Response, next: NextFunction) {
  const { searchTerm } = req.query;

  const searchTermRegex = new RegExp(searchTerm as string, 'i');

  try {
    const filter = { name: searchTermRegex } as unknown as Store;
    const stores = await getStores(filter);

    const DTO = { data: stores };

    return res.status(200).json(new StoresDTO(DTO));
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminGetStores(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await adminGetStores();

    const DTO = { data };

    return res.status(200).json(new StoresDTO(DTO));
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminGetPaginatedStores(req: Request, res: Response, next: NextFunction) {
  const { pagination } = res.locals;
  const { page, limit } = pagination;

  try {
    const stores = await adminGetPaginatedStores(page, limit);

    const DTO = {
      pagination,
      data: stores
    };

    return res.status(200).json(new StoresDTO(DTO));
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminAddStore(req: Request, res: Response, next: NextFunction) {
  const { storeToAdd } = req.body;

  try {
    const success = await adminAddStore(storeToAdd);

    if (!success) return next(new UserError(MESSAGES.invalidDataFormat));

    return res.status(201).json(new StoresDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminDeleteStore(req: Request, res: Response, next: NextFunction) {
  const { storeId } = req.body;

  try {
    const success = await adminDeleteStore(storeId);

    if (!success) return next(new UserError(MESSAGES.invalidResourceId));

    return res.status(200).json(new StoresDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminUpdateStore(req: Request, res: Response, next: NextFunction) {
  const { storeId, update } = req.body;

  try {
    const success = await adminUpdateStore(storeId, update);

    if (!success) return next(new UserError(MESSAGES.invalidResourceId));

    return res.status(200).json(new StoresDTO());
  } catch (e) {
    next(new DBError());
  }
}

export {
  httpGetPaginatedStores,
  httpGetFeaturedStores,
  httpGetSearchedStores,
  httpAdminGetStores,
  httpAdminGetPaginatedStores,
  httpAdminAddStore,
  httpAdminDeleteStore,
  httpAdminUpdateStore
};
