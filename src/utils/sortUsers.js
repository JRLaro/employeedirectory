// Function that sorts any data being passed in.
function sortUsers(userList, sortBy) {
    return userList.sort((a, b) => {
     
      // sorts numbers and letters
      const valueA = a[sortBy].toUpperCase();
      const valueB = b[sortBy].toUpperCase();
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
}
  
export { sortUsers }