// Метод addAll должен добавлять произвольное количество персонажей в команду.
// Задвоения быть не должно.

import Character from '../character';
import Team from '../team';

test('method addAll test', () => {
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
  expect(JSON.stringify(team.addAll())).toBe(JSON.stringify(expected));
});
