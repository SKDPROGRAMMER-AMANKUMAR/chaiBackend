# This contains some information about (Tools,syntax,keywords etc.) akin to this project. 

## When to use res.json() and res.send()

### <strong style="color:purple;">res.json()</strong>
>>Used to send JSON objects or arrays.

>>Automatically sets the Content-Type header to 
application/json.

>>Best suited for APIs since it ensures the frontend or clients receive the data in proper JSON format.

````javascript
app.get('/hospital', (req, res) => {
  const hospitals = [
    { id: 1, name: "City Hospital", location: "New York" },
    { id: 2, name: "Country Hospital", location: "Los Angeles" },
  ];
  res.json(hospitals); // This sends the JSON array as an API response.
});
````

### <strong style="color:purple;">res.send()</strong>

>>Can send any type of response (HTML, text, buffers, or objects).

>>If used with an object, it implicitly converts the object to JSON, but it’s not the preferred way for APIs.

>>Doesn't set Content-Type automatically to application/json unless it detects a JSON object, which might cause inconsistencies.

````javascript
app.get('/welcome', (req, res) => {
  res.send("<h1>Welcome to the Hospital API</h1>"); // Sending HTML.
});
````