// Метод toArray должен производить конвертацию Set в массив.

import Character from '../character';
import Team from '../team';

test('method toArray test', () => {
  const team = new Team();
  const bowman = new Character('ivan', 'Bowman');
  const warior = new Character('ivan', 'Warior');
  team.add(bowman);
  team.add(warior);
  const expected = [
    {
      name: 'ivan',
      type: 'Bowman',
    },
    {
      name: 'ivan',
      type: 'Warior',
    },
  ];

  expect(JSON.stringify(team.toArray())).toBe(JSON.stringify(expected))
});
