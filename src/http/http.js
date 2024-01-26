
async function httpGet(url) {
  const result = await fetch(`/api/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'no-cors',
  });

  const data = await result.json();
  return data;
}

async function httpPost(url, body) {
  const result = await fetch(`/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'no-cors',
    body,
  });

  const data = await result.json();
  return data;
}

async function httpDelete(url) {
  const result = await fetch(`/api/${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'no-cors',
  });

  const data = await result.json();
  return data;

}

async function httpPut(url, body) {
  const result = await fetch(`/api/${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'no-cors',
    body,
  });

  const data = await result.json();
  return data;
}

export {
  httpGet,
  httpPut,
  httpPost,
  httpDelete,
}