import { test } from 'node:test' 
import assert from 'node:assert/strict'
import { checkWinner, isDraw } from './src/game.js'            

test('checkWinner: no winner on a full board', () => {
const newBoard = ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O']
  assert.strictEqual(checkWinner(newBoard), null)      
})

test('checkWinner win x', () => {
  assert.strictEqual(checkWinner(['X', 'X', 'X', null, null, null, null, null, null]), 'X')      
})

test('checkWinner win O', () => {
  assert.strictEqual(checkWinner(['O', null, null, null, 'O', null, null, null, 'O']), 'O')      
})


test('isDraw: full board without a winner => true', () => {
  assert.strictEqual(isDraw( ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O']), true)      
})


test('isDraw: with a winner => false', () => {
  assert.strictEqual(isDraw(['X', 'X', 'X', 'O', 'O', 'X', 'O', 'X', 'O']), false)
})
