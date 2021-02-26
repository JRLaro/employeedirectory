function filterUsers(userList, searchBy) {
    return userList.filter((user) => {
      return (
        user.firstName.includes(searchBy) ||
        user.lastName.includes(searchBy) ||
        user.email.includes(searchBy) ||
        user.phone.includes(searchBy)
      );
    });
  }

export { filterUsers };