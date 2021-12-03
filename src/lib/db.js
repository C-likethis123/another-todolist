import mongoose from 'mongoose';

const MONGODB_URL = 'mongodb://localhost:27017';
const MONGODB_DB = 'svelte-todos';

let cached = global.mongo;
if (!cached) {
  cached = global.mongo = {
    conn: null,
    promise: null
  };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URL).then(() => {
      return mongoose.connection;
    })
  }
  cached.conn = await cached.promise;
  return cached.conn;
}