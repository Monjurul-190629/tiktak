const UsersList = ({ search }: { search: string }) => {
  const users = ["John", "brad", "alif"];

  if (!search.trim()) return null;

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      {filteredUsers?.map((user) => (
        <p>{user}</p>
      ))}
    </div>
  );
};

export default UsersList;
