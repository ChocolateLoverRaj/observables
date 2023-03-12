import Dexie, { Table } from 'dexie'

class Db extends Dexie {
  data!: Table<string>

  constructor () {
    super('observables-sync-async')
    this.version(1).stores({
      data: ''
    })
    this.on('populate', async () => {
      await this.data.put('Potato', '')
    })
  }
}

const db = new Db()

export default db
