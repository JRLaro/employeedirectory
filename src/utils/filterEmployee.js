
  function filterData(userList, filterBy) {
    return userList.filter((user) => {
      return (
        user.firstName.includes(filterBy) ||
        user.lastName.includes(filterBy) ||
        user.email.includes(filterBy) ||
        user.phone.includes(filterBy)
      );
    });
  }