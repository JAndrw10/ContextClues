document.addEventListener('DOMContentLoaded', function () {

   // loop that runs 100x
   for (var i = 1; i < 101; i++) {


      //created the h3 element with accusation text
      var h3 = document.createElement('h3');
      var h3Text = document.createTextNode("Accusation " + i);
      h3.appendChild(h3Text);
      document.body.appendChild(h3)
      h3.addEventListener('click', contextClues(i))
   };


   function contextClues(i) {

      var friends = ['Carl', 'Ian', 'Frank', 'Lip', 'Debbie'];

      var locations = ['Gallagher House', 'The Alibi ', 'Winterfell', 'Beyond the Wall', 'Kings Landing', 'Dragonstone', 'Braavos', 'Dorne', 'Yunkai', 'Iron Islands'];

      var noGunsAllowed = ['knife', 'club', 'Stone', 'hammer', 'switchblade', 'torch', 'nunchaku', 'aluminium bat', 'ninja star', 'Sickle', 'babseball bat', 'axe', 'golf club', 'flamethrower',
         'potato gun', 'Bayonet', 'taser', 'stun gun', 'slingshot' ];

      return function () {
         console.log(`Accusation ${i}: I accuse ${friends[i % friends.length]} in ${locations[i % locations.length]}, with the ${noGunsAllowed[i % noGunsAllowed.length]}`)
      }
   };

   


});
















