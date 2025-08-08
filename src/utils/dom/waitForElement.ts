export const waitForElement = (selector: string, timeout = 5000): Promise<Element> =>
  new Promise((resolve, reject) => {
    const interval = 100;
    let timeSpent = 0;
    const timer = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(timer);
        resolve(el);
      } else if ((timeSpent += interval) >= timeout) {
        clearInterval(timer);
        reject(new Error("Element not found"));
      }
    }, interval);
  });