import Team from '../team';
import Character from '../character';

test('error test', () => {
  const team = new Team();
  const bowman = new Character('ivan', 'Bowman');
  team.add(bowman);
  expect(team.add(bowman)).toThrow(new Error('уже есть'));
});
