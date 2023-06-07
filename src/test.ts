import { describe, test, expect } from "vitest";
import env from "src/env.js";

describe('Main:', () => {
  test('should get envs', () => {
    expect(env.HOST_NAME).toBe('localhost')
    expect(env.PORT).toBe(8080)
  })
})