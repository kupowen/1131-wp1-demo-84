import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: 'aws-0-ap-northeast-1.pooler.supabase.com',
    port: '5432',
    user: 'postgres.magwayvhibnxahwhahts',
    password: 'F6DvQ2wsKpcc3xwZ',
    database: 'postgres',
})

console.log('connecting Supabase database', pool.options.database)

export default pool


