window.onload = () => {
  console.log('FINISHED LOADING');

  // const form = document.getElementsByTagName('form');

  // document.addEventListener('click', (ev) => {
    const searchButton = document.getElementById('search-button');

    document.getElementById('search-button').addEventListener('click', () => {
      console.log("BUTTON PUSHED");
      const destination = document.getElementById('package-destination') || document.getElementById('hotel-destination');
      const checkInDate = document.getElementById('package-checkin') || document.getElementById('hotel-checkin');
      const checkoutDate = document.getElementById('package-checkout') || document.getElementById('hotel-checkout');
      const guests = document.getElementById('package-1-guests') || document.getElementById('hotel-1-guests');
      const adults = document.getElementById('package-1-adults') || document.getElementById('hotel-1-adults');
      const children = document.getElementById('package-1-children') || document.getElementById('hotel-1-children');


      // console.log(destination);
      storeUserData(destination, checkInDate, checkoutDate, guests, adults, children);
    })

  // })


}

function storeUserData(destination, checkIn, checkOut, guests, adults, children) {
  console.log(arguments);
  let childs = 0;
  let grownups;
  
  if (children) {
    childs = children.value;
  }

  if (guests) {
    grownups = guests.value;
  } else {
    grownups = adults.value;
  }

  console.log(childs, grownups);
}
