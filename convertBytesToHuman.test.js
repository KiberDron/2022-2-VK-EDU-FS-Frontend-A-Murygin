/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(false)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman([1, 2, 3])).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(243)).toBe('243 B')
  expect(convertBytesToHuman(2 ** 10)).toBe('1 KB')
  expect(convertBytesToHuman(25698)).toBe('25.1 KB')
  expect(convertBytesToHuman(2 * 2**20)).toBe('2 MB')
  expect(convertBytesToHuman(161225786)).toBe('153.76 MB')
  expect(convertBytesToHuman(33 * 2**30)).toBe('33 GB')
  expect(convertBytesToHuman(604034529284)).toBe('562.55 GB')
  expect(convertBytesToHuman(654 * 2**40)).toBe('654 TB')
  expect(convertBytesToHuman(63849452188785)).toBe('58.07 TB')
});

test('Не возвращает некорректные значения', () => {
  expect(convertBytesToHuman('0')).not.toBe('0 B')
  expect(convertBytesToHuman(-5)).not.toBe('-5 B')
  expect(convertBytesToHuman(-2)).not.toBe('2 B')
  expect(convertBytesToHuman('1024')).not.toBe('1 KB')
  expect(convertBytesToHuman(1024)).not.toBe('1.00 KB')
})