export const PasswordValidator = (password) => {
  const numRegex = new RegExp('\\d+')
  const letterRegex = new RegExp('[a-zA-Z]+')
  const bigLettersRegex = new RegExp('[A-Z]')
  if (password === '')
    if (!numRegex.test(password)) return 'Password must contains numbers'
  if (!letterRegex.test(password)) return 'Password must contains letters'
  if (!bigLettersRegex.test(password))
    return 'Password must contain at least 1 big letter'
  if (password.length < 4) return 'Password must be more than 4 characters'
  if (password.length > 10) return 'Password cannot exceed 10 characters'
}
