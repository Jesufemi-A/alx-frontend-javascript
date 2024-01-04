export default function handleResponseFromAPI(promise) {
  const successMsg = { status: 200, body: 'success' };
  return promise
    .then(() => successMsg)
    .catch((err) => err)
    .finally(() => console.log('Got a response from the API'));
}
