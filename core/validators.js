export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/;
    if (!email) return "Email can't be empty.";
    if (!re.test(email)) return 'Please enter a valid email address.';
    return '';
  }
  
  export function passwordValidator(password) {
    if (!password) return "Password can't be empty.";
    if (password.length < 6)
      return 'Password must be at least 6 characters long.';
    return '';
  }
  
  export function nameValidator(name) {
    if (!name) return "Name can't be empty.";
    if (name.length < 4) return 'Name must be at least 4 characters long';
    if (name.length > 20) return 'Max 20 characters allowed';
    return '';
  }
  
  export function phoneValidator(num) {
    if (!num) return "Phone Number can't be empty.";
    if (num.length != 10) return 'Phone number must be 10 characters long';
  
    if (typeof (parseInt(num) ? parseInt(num) : null) != 'number')
      return 'Phone number should be a number';
    return '';
  }
  
  export function addressValidator(district) {
    if (!district) return "Address can't be empty.";
    if (district.length < 6) return 'Addres must be at least 6 characters';
    return '';
  }
  
  export function resourceName(name) {
    if (!name) return "Name can't be empty.";
    if (name.length < 4) return 'Name must be at least 4 characters long';
    if (name.length > 35) return 'Max 35 characters allowed';
    return '';
  }
  