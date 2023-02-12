export async function getPost({ locals }) {
    // destructure to get the sql connection
    const { pool } = locals;
    const [rows,fields] = await pool.query("SELECT * FROM users");
    return rows
};

export async function getUser({ locals }) {
  const { prismaClient } = locals;
  const users = await prismaClient.users.findMany({
    orderBy: [
      { id: 'desc' }
    ]
  })
  console.log(users)
  return {
    users
  }
};


export async function createRecipe({ locals, name, description, url }) {
  // destructure to get the sql connection
  const { pool } = locals;
  console.log(pool)
  const [error, results] = await pool.query('INSERT INTO Recipe (name, description, url, user_parent_id) VALUES (?,?,?, ?)', [name, description, url]);
  console.log(results)
  if(error) {
    return results
  }
  return results
};