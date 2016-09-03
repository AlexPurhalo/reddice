<h4>PreActions</h4>
<ol>
	<li>$ sudo npm install</li>
	<li>$ npm run server</li>
	<li>$ createdb reddice</li>
	<li>change your login and password for development in knexfile.js</li>
</ol>

<h4>Actions</h4>
<ol>
	<li>Go to /new-event page</li>
	<li>Click on create button as authenticated user and you'll get 201 with success: true in response</li>
	<li>Click on button as unauthorizated user and you will get 401 with 'no token provided' error in response</li>
	<li>Change token value from localStorage for authenticated user, and send request, you will get 403 with 'failed to authenticate' error in response</li>
</ol>
