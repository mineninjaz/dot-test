import { Injectable } from '@nestjs/common';
import { db } from '../database/database';

@Injectable()
export class ProductsService {

    async findAll(search?: string) {
        let query = `
            SELECT
                p.*,
                c.name AS category_name
            FROM products p
            LEFT JOIN categories c
            ON p.category_id = c.id
        `;
        const params: any[] = [];

        if (search) {
            query += ` WHERE p.name LIKE ?`;
            params.push(`%${search}%`);
        }

        query += ` ORDER BY p.id DESC`;

        const [rows] = await db.query(query, params);
        return rows;
    }

    async getAllCategories() {
        const [rows] = await db.query('SELECT * FROM categories ORDER BY name ASC');
        return rows;
    }

    async findById(id: number) {
        const [rows]: any = await db.query(`
            SELECT
                p.*,
                c.name AS category_name
            FROM products p
            LEFT JOIN categories c
            ON p.category_id = c.id
            WHERE p.id = ?
        `, [id]);
        return rows.length ? rows[0] : null;
    }

    async create(data: any) {
        await db.query(
            `INSERT INTO products (name, price, stock, category_id) VALUES (?, ?, ?, ?)`,
            [data.name, data.price, data.stock, data.category_id]
        );
    }

    async update(id: number, data: any) {
        await db.query(
            `UPDATE products SET name = ?, price = ?, stock = ?, category_id = ? WHERE id = ?`,
            [data.name, data.price, data.stock, data.category_id, id]
        );
    }

    async delete(id: number) {
        await db.query('DELETE FROM products WHERE id = ?', [id]);
    }

}