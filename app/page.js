import React from 'react'; // Import React
// You don't need to import Image if you're not using it

export default function Home() {
  return (
    <div>
      <form action="http://localhost:3000/register" method="post">

        <input type="text" name="firstname" id="firstname"/>
        <input type="text" name="lastname" id="lastname"/>
        <input type="text" name="username" id="username"/>
         <input type="text" name="email" id="email"/>
         <input type="text" name="password" id="password"/>
         <input type="submit" value="Submit"/>    
  
      </form>
    </div>
  );
}
