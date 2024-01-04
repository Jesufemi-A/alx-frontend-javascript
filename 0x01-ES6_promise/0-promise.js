export function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('response success');
    reject('response failed')
  })
}
