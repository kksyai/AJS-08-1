// Метод add должен добавлять выбранного персонажа в команду (объект класса Character).
// При этом такой объект уже существует в команде должна генерироваться ошибка.

import Character from '../character';
import Team from '../team';

test('method add test', () => {
  const team = new Team();
  const bowman = new Character('ivan', 'Bowman');
  const warior = new Character('ivan', 'Warior');
  const expected = new Set([
    {
      name: 'ivan',
      type: 'Bowman',
    },
    {
      name: 'ivan',
      type: 'Warior',
    },
  ]);
  expect(JSON.stringify(team.members.keys())).toBe(JSON.stringify(expected));
});
