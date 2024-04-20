import React from 'react'; // Import React
// You don't need to import Image if you're not using it

export default function Home() {
  return (
    <div>
      <form action="/profile" method="post">
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
