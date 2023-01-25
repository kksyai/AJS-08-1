import Team from '../team';

test('error test', () => {
  const team = new Team();
  const bowman = ('ivan', 'Bowman');
  team.add(bowman);
  expect(team.add(bowman)).toThrow(new Error('уже есть'));
});
