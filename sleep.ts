export const sleep = (secondsDelay: number): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), secondsDelay * 1000));