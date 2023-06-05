import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('alulu.db');

const createTables = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS aluminium_profile (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          description TEXT,
          quantity INTEGER,
          image TEXT,
          colour TEXT
        );`,
        [],
        () => {
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS aluminium_alucobond (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT,
              description TEXT,
              quantity INTEGER,
              image TEXT,
              colour TEXT
            );`,
            [],
            () => {
              tx.executeSql(
                `CREATE TABLE IF NOT EXISTS aluminium_fitting (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  name TEXT,
                  description TEXT,
                  quantity INTEGER,
                  image TEXT,
                  colour TEXT
                );`,
                [],
                () => {
                  tx.executeSql(
                    `CREATE TABLE IF NOT EXISTS accessories (
                      id INTEGER PRIMARY KEY AUTOINCREMENT,
                      name TEXT,
                      description TEXT,
                      quantity INTEGER,
                      image TEXT,
                      colour TEXT
                    );`,
                    [],
                    () => resolve(),
                    (_, error) => reject(error)
                  );
                },
                (_, error) => reject(error)
              );
            },
            (_, error) => reject(error)
          );
        },
        (_, error) => reject(error)
      );
    });
  });
};

const insertRecord = (section, record) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${section} (name, description, quantity, image, colour) VALUES (?, ?, ?, ?, ?);`,
        [record.name, record.description, record.quantity, record.image, record.colour],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) {
            resolve(insertId);
          } else {
            reject(new Error('Failed to insert record.'));
          }
        },
        (_, error) => reject(error)
      );
    });
  });
};

const getAllRecords = (section) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${section};`,
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

const updateRecord = (section, record) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE ${section} SET name=?, description=?, quantity=?, image=?, colour=? WHERE id=?;`,
        [record.name, record.description, record.quantity, record.image, record.colour, record.id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve(true);
          } else {
            reject(new Error('Failed to update record.'));
          }
        },
        (_, error) => reject(error)
      );
    });
  });
};

const deleteRecord = (section, id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM ${section} WHERE id=?;`,
        [id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve(true);
          } else {
            reject(new Error('Failed to delete record.'));
          }
        },
        (_, error) => reject(error)
      );
    });
  });
};

const getAluminiumProfileItems = () => {
  return getAllRecords('aluminium_profile');
};

const getAluminiumAlucobondItems = () => {
  return getAllRecords('aluminium_alucobond');
};

const getAluminiumFittingItems = () => {
  return getAllRecords('aluminium_fitting');
};

const getAccessoriesItems = () => {
  return getAllRecords('accessories');
};

export {
  createTables,
  insertRecord,
  getAllRecords,
  updateRecord,
  deleteRecord,
  getAluminiumProfileItems,
  getAluminiumAlucobondItems,
  getAluminiumFittingItems,
  getAccessoriesItems,
};
