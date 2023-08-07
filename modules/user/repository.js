class UserRepository {
  constructor(dbClient) {
    this.db = dbClient;
  }

  async create(data) {
    const {
      id,
      username,
      name,
      profilePicture,
      password,
    } = data;

    const sql = `INSERT INTO users(id, username, name, profile_picture, password)
                  VALUES($1, $2, $3, $4, $5)
                  RETURNING id, created_at, updated_at, username, name, profile_picture, password`;

    const values = [
      id,
      username,
      name,
      profilePicture,
      password,
    ];

    const res = await this.db.query(sql, values);

    return toDto(res.rows[0]);
  }
}

function toDto(data) {
  return {
    id: data.id,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
    username: data.username,
    name: data.name,
    profilePicture: data.profile_picture,
    password: data.password,
  };
}

module.exports = UserRepository;
