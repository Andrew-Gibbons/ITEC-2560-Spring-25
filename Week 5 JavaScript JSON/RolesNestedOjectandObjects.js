// Create user array with contact as a nested array
let user = {
    name: 'Andrew',
    password: '24680',
    email: 'andrew@minneapolis.edu',
    roles: ['Help Desk', 'Database Developer'],
    contact: {
        office: 'I321',
        phone: '6126665453'

    }
}
// Add salary key of 90000
user.salary = 90000
// Add Server Administrator to the roles key
user.roles.push('Server Administrator')
// Add location key with Minneapolis value in contact array
user.contact.location = 'Minneapolis'

// Output user
console.log(user)