document.getElementById("demo").innerHTML = " That nigga was replaced. ";
// javascript can overwrite the contents of html elements. NO.1//

document.getElementById("gh").src = "/all/camera-2.jpeg";
// it can also replace html images as follows above. NO.2//

document.getElementById("stiel").style.fontFamily = 'monospace';
// and change the html styles as above.NO.3//

document.getElementById("st").style.display = 'none';
// it can also hide elements. NO.4//

//   Javascript was invented by Brendan Eich in 1995.//

 document.getElementById("ids").innerHTML = 'This guy was also replaced to prove that a js code is inserted between the start and end tag of a script tag.';
// a js code is inserted in between the script start and end tag.//

 function changeText() {
   document.getElementById ("uj").innerHTML = ("A function was used to change this content value to this.");
 };
 function dove() {
     document.write('Because you  called a document.write() after the page has loaded, it overrides the entire page. it is better to use for testing only.')
 };
//   window.alert('Alert box says : "Its good that you are finally reading."NOTE :no other code in the js is initiated till you reply the alert and get over with the window alert but the code to the html element are first carried out . its also not a must to specify the window keyword so instead of window.alert(), you can use plain alert() this is also a synchronous action meaning other actions after this one will not be performed until this action is finished ');

 console.log("damn me dude");

 function myFunction() {
   document.getElementById("demo1").innerHTML = "Hello Dolly!";
   document.getElementById("demo2").innerHTML = "How are you?";
 };
 let x = 4;
 let y = 34;
 let c = x + y;
 document.write("the value of c is " + c);


//  async function fetchQuote() {
//      try {
//        const response = await fetch('https:qapi.vercel.app/api/random');
//        const data = await response.json();
//        return { quote: data.quote, author: data.author };
//      } catch (error) {
//        console.error('Error fetching quote:', error);
//        return { content: 'Oops! Something went wrong.', author: 'Said the creator, you got no data nigga.' };
//      }
//    }


  // Function to fetch countries from the API and populate the dropdown
 async function loadCountries() {
  try {
     const response = await fetch("https://restcountries.com/v3.1/all"); // Fetch data from the API
     const countries = await response.json(); // Parse JSON data

     const dropdown = document.getElementById('countries');
     dropdown.innerHTML = ''; // Clear any placeholder options

     countries.sort((a, b) => a.name.common.localeCompare(b.name.common)); // Sort alphabetically

    // Create an <option> for each country
     countries.forEach(country => {
       const option = document.createElement('option');
       option.value = country.cca2; // Use the country code as the value
       option.textContent = country.name.common; // Display the country name
       dropdown.appendChild(option); // Add the option to the dropdown
     });
   } catch (error) {
     console.error('Error fetching countries:', error);
     const dropdown = document.getElementById('countries');
     dropdown.innerHTML = '<option disabled>Error loading countries</option>';
   }
 }
 loadCountries();
 //asynchronous programming is very important bcs it can be used to handle potential blocking operations such as fetching resources from a server.//
 console.log("first");
 console.log("second");
 console.log('cihjk');
 console.log('county');






// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1
//   if (a == 2) {
//     resolve('Success')
//   } else {
//     reject('failed')
//   }
// })

// p.then((message) => {
//   console.log('This is in the then' + message);
// }).catch((message) => {
//   console.log('This is in the catch ' + message);
// })

// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name : 'User Left :('
//       })
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat'
        
//       })
//     } else {
//       resolve('Thumbs up and subscribe')
      
//     }
//   })
// }

