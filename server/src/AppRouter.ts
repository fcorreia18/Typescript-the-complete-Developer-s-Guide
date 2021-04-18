import express from 'express';

export class AppRouter {
    private static instance: express.Router;

    public static getInstance(): express.Router {
        if (!this.instance) {
            this.instance = express.Router();
        }
        return this.instance;
    }
}