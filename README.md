# Pokemon_API
Walk through JASON FETCH

This project is tutorial on using Public APIs to fetch JASON object and construct a HTML structure using Javascript functions.

structure of code : 

index.html : 
    * The page structure will start with three empty section :
        <head></head> 
        <main></main>
        <footer></footer>

app.js : 
    * JavaScript will handle :
        - Fetch the API url, using asynchronus function.
        - Jsonify the response.
        - create childElement for <main>.
        - create buttons for each pokemon card. 
        - Handle event listener for cards Likes.

css :
    we use bootstrap to bring style to HTML page.