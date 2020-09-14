export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`${this.host} ${this.user} ${this.password} CONECTADO`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    console.log(Database.database);
    return Database.database;
  }
}
const db1 = Database.getDatabase('Fabio', 'Celeste', '21');

console.log();
