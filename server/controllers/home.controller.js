import sanitizeHtml from 'sanitize-html';


//Initial HTML, yay arrow functions
const renderFullPage = (initialState) => {
    const cssPath = process.env.NODE_ENV === 'production' ? '/css/app.min.css' : '/css/app.css';
    return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>BluJay App</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href=${cssPath} />
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
      </head>
      <body>
        <div id="root"></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `; //webpack bundles generated js files to /dist/bundle.js
};

//get all playlists
export function index(req, res) {
    // serve bundle
    
    //Initial State, modify this later
    const initialState = { playlists: [], playlist : {}};
      
    res.status(200).end(renderFullPage(initialState));
    
}
