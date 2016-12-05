# waylo_chrome_extension

This is a chrome extension built using React.
It has code which executes in the background,
on click of extension,
and when expedia.com is visited.

When searching for hotels, it's able to grab:
destination,
checkInDate,
checkOutDate,
adults,
children,

and store these in local chrome storage.

On clicking extension,
it displays all unique searches of the above on popup,
plus current weather at location.


If you wish to try out the app or develop further:
1: clone this repo
2: npm i
3: gulp watch - (this keeps running in background)
4: go to Chrome settings: extensions, activate developer mode
5: drag and drop the "build" folder on extensions page
6: visit expedia.com, give it a whirl!
