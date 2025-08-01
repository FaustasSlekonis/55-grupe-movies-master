import { connection } from "../../db.js";

export async function getAllMovies() {
    try {
        const sql = `
            SELECT
                movies.*,
                general_status.name AS statusName,
                categories.title AS categoryName
            FROM movies
            INNER JOIN general_status
                ON movies.status_id = general_status.id
            LEFT JOIN categories
                ON movies.category_id = categories.id
            ORDER BY movies.id DESC;`;
        const [result] = await connection.execute(sql);
        return result;
    } catch (err) {
        return [];
    }
}
