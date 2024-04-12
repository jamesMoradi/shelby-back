import { Request, Response } from "express";
export declare const getOrders: (req: Request, res: Response) => Promise<void>;
export declare const deleteItem: (req: Request, res: Response) => Promise<void>;
export declare const updateItem: (req: Request, res: Response) => Promise<void>;
export declare const createItem: (req: Request, res: Response) => Promise<void>;
