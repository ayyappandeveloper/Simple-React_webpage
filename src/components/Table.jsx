export function Table() {
  const Tablecon = [
    {
      tname: "avatar",
      person: "pers",
    },
    {
      tname: "Name",
      person: "pers",
    },

    {
      tname: "Status",
    },
  ];

  const Tabledes = [
    {
      avatar: "person1",
      Name: "Alice",
      status: "Active",
    },
    {
      avatar: "person2",
      Name: "Bob",
      status: "InActive",
    },
  ];
  return (
    <div className="m-4">
      <h1 className="text-3xl">User Data</h1>

      <table className="border min-w-full mt-2">
        <thead>
          <tr>
            {Tablecon.map(function (items) {
              return (
                <th className="border px-4 py-3 bg-gray-300">{items.tname}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {Tabledes.map(function (items) {
            return (
              <>
                <tr className="text-center">
                  <td className="border px-4 py-3">{items.avatar}</td>
                  <td className="border px-4 py-3">{items.Name}</td>
                  <td
                    className={`border px-4 py-3 ${
                      items.status == "Active"
                        ? `text-green-600`
                        : `text-red-600`
                    }`}
                  >
                    {items.status}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
