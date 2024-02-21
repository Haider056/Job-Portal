const pg = require('pg');

const pool = new pg.Pool({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432,
  database: 'JobFinder',
});

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  client.query('SELECT NOW()', (queryErr, result) => {
    done(); 

    if (queryErr) {
      console.error('Error running test query:', queryErr);
      return;
    }

    console.log('Database connection successful. Current timestamp:', result.rows[0].now);
  });
});

module.exports = pool;
