// Class to handle HTTP requests (GET, POST, DELETE, PATCH) with the provided domain
export default class Request {
  // Constructor to initialize the domain (default is "http://localhost:3000/")
  constructor(domain = "http://localhost:3000/") {
    this.domain = domain;
  }
  // GET request method: fetches data from the provided URL extension
  async Get(urlExt) {
    // Combine the base domain with the URL extension to form the full URL
    const url = this.domain + urlExt;
    // Perform a fetch request to the given URL and return the response
    const response = await fetch(url);
    return response; // Return the response from the fetch request
  }

  // POST request method: sends data to the server
  async Post(urlExt, data = null) {
    // Combine the base domain with the URL extension to form the full URL
    const url = this.domain + urlExt;
    // Perform a POST request with the provided data and headers
    const response = await fetch(url, {
      method: "POST", // The HTTP method is POST
      headers: {
        Accept: "application/json", // Accept response in JSON format
        "Content-Type": "application/json", // Indicate that we are sending JSON data
        Authorization: "Bearer " + sessionStorage.getItem("jwt"), // Attach the JWT token for authorization (stored in sessionStorage)
      },
      body: JSON.stringify(data), // Convert the data object to a JSON string and send it in the body of the request
    });
    return response; // Return the response from the fetch request
  }

  // DELETE request method: sends a request to delete a resource
  async Del(urlExt) {
    // Combine the base domain with the URL extension to form the full URL
    const url = this.domain + urlExt;
    // Perform a DELETE request with the authorization token in the headers
    const response = await fetch(url, {
      method: "DELETE", // The HTTP method is DELETE
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("jwt"), // Attach the JWT token for authorization (stored in sessionStorage)
      },
    });

    return response; // Return the response from the fetch request
  }

  // PATCH request method: sends a partial update to the server
  async Patch(urlExt, data = null) {
    // Combine the base domain with the URL extension to form the full URL
    const url = this.domain + urlExt;
    // Perform a PATCH request with the provided data and headers
    const response = await fetch(url, {
      method: "PATCH", // The HTTP method is PATCH
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicate that we are sending JSON data
        Authorization: "Bearer " + sessionStorage.getItem("jwt"), // Attach the JWT token for authorization (stored in sessionStorage)
      },
      body: JSON.stringify(data), // Convert the data object to a JSON string and send it in the body of the request
    });
    return response; // Return the response from the fetch request
  }
}
