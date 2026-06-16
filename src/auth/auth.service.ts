import { Injectable } from '@nestjs/common';
import { db } from '../database/database';

@Injectable()
export class AuthService {

    async validateUser(
        username: string,
        password: string,
    ) {

        const [rows]: any = await db.query(
            `
      SELECT *
      FROM users
      WHERE username = ?
      AND password = ?
      `,
            [username, password],
        );

        if (rows.length === 0) {
            return null;
        }

        return rows[0];
    }
}