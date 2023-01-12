import Character from './character.js';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(data) {
    if (this.members.has(data) === true) {
      throw new Error('уже есть');
    }
    return this.members.add(data);
  }
}

// Метод add должен добавлять выбранного персонажа в команду (объект класса Character).
// При этом такой объект уже существует в команде — дублирования быть не должно, должна генерироваться ошибка.

// Метод addAll должен добавлять произвольное количество персонажей в команду — используйте rest-parameters. 
// Задвоения быть не должно, ошибка генерироваться не должна.

// Метод toArray должен производить конвертацию Set в массив.
