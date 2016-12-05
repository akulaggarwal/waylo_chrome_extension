window.onload = () => {


  const searchButton = document.getElementById('search-button');

  document.getElementById('search-button').addEventListener('click', () => {
    const destination = document.getElementById('package-destination') || document.getElementById('hotel-destination');
    const checkInDate = document.getElementById('package-checkin') || document.getElementById('hotel-checkin');
    const checkoutDate = document.getElementById('package-checkout') || document.getElementById('hotel-checkout');
    const guests = document.getElementById('package-1-guests') || document.getElementById('hotel-1-guests');
    const adults = document.getElementById('package-1-adults') || document.getElementById('hotel-1-adults');
    const children = document.getElementById('package-1-children') || document.getElementById('hotel-1-children');

    if (destination.value && checkInDate.value && checkoutDate.value){
      assessUserData(destination, checkInDate, checkoutDate, guests, adults, children);
    }
  })

}

function assessUserData(destination, checkIn, checkOut, guests, adults, children) {
  (arguments);
  let childs = "0";
  let grownups;

  if (children) {
    childs = children.value;
  }

  if (guests) {
    grownups = guests.value;
  } else {
    grownups = adults.value;
  }

  // debugger;

  const getOldStore = new Promise(
    function(resolve, reject) {
      chrome.storage.sync.get("expediaStorage", (obj) => {
        resolve(obj);
      })
    }
  )

  getOldStore.then(
    function(obj){
      // debugger;

      const arr = obj.expediaStorage;
      arr.push({
        destination: destination.value,
        adults: grownups,
        children: childs,
        checkIn: checkIn.value,
        checkOut: checkOut.value
      })

      // debugger;

      chrome.storage.sync.set({
        "expediaStorage": arr
      })

    }
  )

}
