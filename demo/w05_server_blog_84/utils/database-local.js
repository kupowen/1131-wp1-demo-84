import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'ej41i6jp6',
    database: 'wp1_demo_84',
})

console.log('connecting local database', pool.options.database)

// const testDB = async () => {
//     try {
//         const result = await pool.query(`SELECT * FROM blog_84`)
//         console.log('json data', result.rows)
//     } catch (error) {
//         console.log(error)
//     }
// }

// testDB()

export default pool;


