const bcrypt = require('bcryptjs');

async function hashPassword() {
  const plainPassword = 'gyan@123'; // the password you want to hash
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  console.log('Hashed password:', hashedPassword);
}

hashPassword();
