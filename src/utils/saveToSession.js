const saveToSession = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
export default saveToSession;
