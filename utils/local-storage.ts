export const setLocalStorageFrom = (key: string, value: string) => {
  window.localStorage.setItem(key, value);
};

export const getLocalStorageFrom = (key: string) => {
  return window.localStorage.getItem(key);
};

export const removeLocalStorageFrom = (key: string) => {
  window.localStorage.removeItem(key);
};
