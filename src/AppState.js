import { reactive } from 'vue'
import { Date } from './models/Date.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},

  /**@type {import('./models/Date.js').Date[]} */
  date: {}
})
