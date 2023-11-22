import 'dotenv/config'
import { randomUUID } from 'node:crypto'
import type { Environment } from 'vitest'


export default <Environment>{
  name: 'custom',
  transformMode: 'ssr',
  async setupVM() {
    const vm = await import('node:vm')
    const context = vm.createContext()
    return {
      getVmContext() {
        return context
      },
      teardown() {
        // called after all tests with this env have been run
        console.log('teardown')
      }
    }
  },
  async setup() {
    console.log('running')
    const db = randomUUID()
    process.env.DATABASE_URL = db
    console.log('running db', db)
    return {
      teardown() {
        // await knex.destroy()
        console.log('teardown');
        console.log(db)
        console.log(process.env.DATABASE_URL);
        
      },
    }
  },
}
