import { Injectable } from '@nestjs/common';
import { db } from '../database/database';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Injectable()
export class CategoriesService {

    async delete(id: number) {

        await db.query(
            `
    DELETE FROM categories
    WHERE id = ?
    `,
            [id],
        );

    }

    async findAll() {
        const [rows] = await db.query(
            'SELECT * FROM categories ORDER BY id DESC'
        );
        return rows;
    }

    async create(data: any) {
        await db.query(
            `INSERT INTO categories 
                (name, description) 
             VALUES(?, ?)`,
            [
                data.name,
                data.description,
            ]
        );
    }

    async findById(id: number) {
        const [rows]: any = await db.query(
            'SELECT * FROM categories WHERE id = ?',
            [id]
        );

        if (rows.length === 0) {
            return null;
        }

        return rows[0];
    }

    async update(id: number, data: any) {
        await db.query(
            `UPDATE categories 
             SET name = ?, description = ? 
             WHERE id = ?`,
            [data.name, data.description, id]
        );
    }

}