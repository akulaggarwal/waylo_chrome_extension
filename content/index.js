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
      if (destination.value && checkInDate.value && checkoutDate.value){
        assessUserData(destination, checkInDate, checkoutDate, guests, adults, children);
      }
    })

  // })
}

function assessUserData(destination, checkIn, checkOut, guests, adults, children) {
  console.log(arguments);
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

  console.log(childs, grownups);
  debugger;
  //check if anything in local storage
  const checkStore = new Promise(
    function(resolve, reject) {
      console.log('inside promise');
      chrome.storage.sync.get("expediaStorage", function(obj) {

        //if extension used for first time
        debugger;
        // if (!obj.expediaStorage){
        //   debugger;
        //   reject(obj);
        // }

        resolve(obj);
      })
    }
  )

  checkStore.then(
    function(obj){
      debugger;
      //check for repeat search

      const arr = obj.expediaStorage;
      arr.push({
        destination: destination.value,
        adults: grownups,
        children: childs,
        checkIn: checkIn.value,
        checkOut: checkOut.value
      })
      debugger;

      chrome.storage.sync.set({
        "expediaStorage": arr
      })

      // setChromeStorage(arr, 'expediaStorage');
    }
  )
  // .catch(createExpediaStorage)
  //
  // function createExpediaStorage() {
  //   debugger;
  //   const passInVal = {
  //     destination: destination.value,
  //     adults: grownups,
  //     children: childs,
  //     checkIn: checkIn.value,
  //     checkOut: checkOut.value
  //   };
  //
  //   setChromeStorage([passInVal], "expediaStorage")
  //   setChromeStorage(passInVal, "last")
  // }


}
