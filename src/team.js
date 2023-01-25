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

  addAll(...args) {
    for (const arg of args) {
      this.members.add(arg);
    }
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}
