// start writing your all api here....
const API_KEY = '2dca580c2a14b55200e784d157207b4d'

export const getTodosfromAPI = async (ffg) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
};