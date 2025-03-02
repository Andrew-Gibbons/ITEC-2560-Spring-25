// Create array user with username and password key value pairs
let user = {username: 'Andrew', password: 'smith'}

// Output username two different was
console.log(user.username)
console.log(user['username'])

// Output password two different ways
console.log(user.password)
console.log(user['password'])

// Create variable whatProperty to equal password
let whatProperty = 'password'
// Output what property
console.log(user[whatProperty])

//  Create variable userNameProperty to equal username
let userNameProperty = 'username'
console.log(user[userNameProperty])

// Change pass to Johnson
user.password = 'Johnson'

// Change pass to Muhammed
user['password'] = 'Muhammed'
// Output user
console.log(user)

//  Create email key in user array with andrew@minneapolis.edu as the value
user.email = 'andrew@minneapolis.edu'
// Output user
console.log(user)
// Output email
console.log(user.email)

