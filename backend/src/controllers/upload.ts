import { NextFunction, Request, Response } from 'express'
// import { constants } from 'http2'
import BadRequestError from '../errors/bad-request-error'
import sharp from 'sharp'

export const uploadFile = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.file) {
            return next(new BadRequestError('Файл не загружен'))
        }

        if (req.file.size <= 2048) {
            return next(new BadRequestError('Файл слишком маленький'))
        }

        const meta = await sharp(req.file.path).metadata()
        if (!meta.width || !meta.height) {
            return next(new BadRequestError('Некорректное изображение'))
        }

        return res.status(200).json({
            fileName: req.file.filename,
            originalName: req.file.originalname,
        })
    } catch {
        return next(new BadRequestError('Некорректное изображение'))
    }
}
