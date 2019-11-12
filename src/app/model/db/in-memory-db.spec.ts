import { InstructorsData } from './in-memory-db';

describe('InMemoryDB', () => {
  it('should create an instance', () => {
    expect(new InstructorsData()).toBeTruthy();
  });
});
