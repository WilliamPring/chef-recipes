
export async function getPost({ locals }) {
    // destructure to get the sql connection
    const { pool } = locals;


    const [rows,fields] = await pool.query("SELECT * FROM users");
    // Now you have a result object that contains the query response
    // Do what you need to do from here
    return rows
  };