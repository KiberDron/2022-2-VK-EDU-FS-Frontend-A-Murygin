/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if (typeof(bytes) !== "number") {
    return false
  }
  else if (bytes < 0) {
    return false
  }
  else if (bytes >= 2 ** 40) {
    return `${+(bytes / (2 ** 40)).toFixed(2)} TB`
  }
  else if (bytes >= 2 ** 30) {
    return `${+(bytes / (2 ** 30)).toFixed(2)} GB`
  }
  else if (bytes >= 2 ** 20) {
    return `${+(bytes / (2 ** 20)).toFixed(2)} MB`
  }
  else if (bytes >= 2 ** 10) {
    return `${+(bytes / (2 ** 10)).toFixed(2)} KB`
  }
  else if (bytes >= 0) {
    return `${bytes} B`
  }
}
