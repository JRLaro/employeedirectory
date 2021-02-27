function filterUsers(userList, searchBy) {
  return userList.filter((user) => {
      return (
        user.fName.includes(searchBy) ||
        user.lName.includes(searchBy) ||
        user.email.includes(searchBy) ||
        user.phone.includes(searchBy)
      );
    });
  }

export { filterUsers };