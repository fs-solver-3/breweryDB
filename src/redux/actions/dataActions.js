export function loadData() {
  return function (dispatch) {
    return fetch('/Dev/digi-update-op-Dashboard?customerId=9876354', {
      method: 'GET',
      headers: {
        'x-api-key': '9c5lLsXsjaazbX5cc8Gb53jvurStCIUhaBc2Wbwc',
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'LOAD_DATA', payload: data }))
      .catch((error) => {
        throw error;
      });
  };
}
