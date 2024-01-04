export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('response success');
    reject(new Error('response failed'));
  });
}
