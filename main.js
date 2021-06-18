const UserGrops = arr => {
 return arr.users.map( ({name, role , permissions  , id}) => {
    const {roleName} = arr.roles.find(el => el.id === role)
    const {value} = arr.permissions.find(permission => permission.id === permissions)
    const filter = arr.contacts.filter(contacts => contacts.user === id)
    return filter.map( ({firstName , lastName}) => `${name},${roleName},${firstName},${lastName} - ${value}`)
  })

}

const user = UserGrops({
    "roles": [{
        "id": 1,
        "roleName": "Admin"
      },
      {
        "id": 2,
        "roleName": "User"
      }
    ],
    "permissions": [{
        "id": 1,
        "value": "Read Only"
      },
      {
        "id": 2,
        "value": "Create Only"
      },
      {
        "id": 3,
        "value": "Full Access"
      }
    ],
    "users": [{
        "id": 1,
        "name": "User1",
        "role": 1,
        "permissions": 3
      },
      {
        "id": 2,
        "name": "User2",
        "role": 1,
        "permissions": 3
      },
      {
        "id": 3,
        "name": "User3",
        "role": 2,
        "permissions": 1
      },
      {
        "id": 4,
        "name": "User4",
        "role": 2,
        "permissions": 2
      },
      {
        "id": 5,
        "name": "User5",
        "role": 2,
        "permissions": 1
      }
    ],
    "contacts": [{
        "user": 1,
        "firstName": "John",
        "lastName": "Dou"
      },
      {
        "user": 1,
        "firstName": "John",
        "lastName": "Smith"
      },
      {
        "user": 3,
        "firstName": "Mark",
        "lastName": "Twen"
      },
      {
        "user": 4,
        "firstName": "Niko",
        "lastName": "Belec"
      },
      {
        "user": 4,
        "firstName": "Jim",
        "lastName": "Smith"
      },
      {
        "user": 4,
        "firstName": "Jack",
        "lastName": "Daniels"
      }
    ]
  }




)
console.log(user.flat().join('\n \n') );
