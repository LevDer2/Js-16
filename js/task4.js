// Завдання 4

// Напиши клас StringBuilder. На вхід він отримує один параметр — рядок, який записує у властивість _value.
// Додай класу наступний функціонал:
// Геттер value — повертає поточне значення поля _value
// Метод append(str) — отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) — отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) — отримує параметр str (рядок) і додає його на початок і в кінець _value
class StringBuilder {
  constructor(initialValue) {
    this._value = initialValue;
  }

  // Геттер для value
  get value() {
    return this._value;
  }

  // Додає в кінець
  append(str) {
    this._value += str;
  }

  // Додає на початок
  prepend(str) {
    this._value = str + this._value;
  }

  // Додає на початок і в кінець
  pad(str) {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='