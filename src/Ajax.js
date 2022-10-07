let serverURL = "https://fakestoreapi.com";

function getHeaders() {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  return headers;
}

export default {
  get: function (url) {
    url = url;
    return fetch(url, { method: "GET", headers: getHeaders() })
      .then(processResponse)
      .catch(processError);
  },

  post: function (url, data) {
    url = url;
    return fetch(url, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    })
      .then(processResponse)
      .catch(processError);
  },

  patch: function (url, data) {
    url = url;
    return fetch(url, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify(data),
    })
      .then(processResponse)
      .catch(processError);
  },

  delete: function (url) {
    url = url;
    return fetch(url, { method: "DELETE", headers: getHeaders() })
      .then(processResponse)
      .catch(processError);
  },

  put: function (url, data) {
    url = serverURL + url;
    return fetch(url, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(data),
    })
      .then(processResponse)
      .catch(processError);
  },
};

async function processResponse(response) {
  let json = await response.json();
  if (!json) {
    throw new Error(
      json ? json.message : "Server Error. Please try again later."
    );
  }
  return json;
}

function processError(err) {
  window.alert(err.message);
  throw err;
}
