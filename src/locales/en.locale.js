module.exports = {
  _element: 'en',
  _name: 'English',
  title: 'English web',
  common: {
    success: 'Success',
    error: 'Error',
    delete: 'Delete',
    edit: 'Edit',
    save: 'Save',
    cancel: 'Cancel',
    add: 'Add',
    zh_CN: '中文简体',
    en: 'English',
    login: 'Login',
    logout: 'Logout',
    operation: 'Operation',
  },
  menu: {
    Home: 'Overview',
    Table: 'Table Management',
    TableEdit: 'Table Edit',
    TableValid: 'Table Validation',
    Map: 'Map',
    Chart: 'E-charts',
    Three: 'Three.js',
  },
  user: {
    user: 'User',
    userInfo: 'User info',
    changePwd: 'Change password',
    loginName: 'Login email/telephone',
    password: 'Password',
    invalid: {
      accountValid: 'Invalid account, format: email or telephone.',
      pwdValid: 'Consist of 8-20 letters, digits, and special symbols(except Enter, Sapce, and Tab).',
      usernameValid: 'Consist of 8-32 Chinese characters, letters, digits, at(@), dot(.), underscore(_) and hyphen(-).',
      emailValid: 'Invalid email.',
      phoneValid: 'Invalid telephone number.',
      emailPhoneValid: 'Fill in at least one email or telephone number.',
      confirmPwdValid: 'Two passwords that you enter is inconsistent.',
      descriptionValid: 'Invalid description, length: 0-255.',
      dataPermission: 'Select data permission.',
      roleErrorInfo: 'Failed to get user information. Try again later please.',
    },
  },
  three: {
    title: 'Three',
    helpTip: 'Application case of Three.js',
    createThree: 'Create Three case',
  },
  tableEdit: {
    title: 'Table editing',
    helpTip: 'Table application with editing function.',
    createTable: 'Create edition editing',
    name: 'Name',
    id: 'ID',
    address: 'Address',
    createdAt: 'Created',
    updatedAt: 'Updated',
  },
  tableValid: {
    title: 'Table validation',
    helpTip: 'Design of table component with validation function.',
    createTable: 'Create validation table',
    key: 'Key',
    value: 'Value',
    type: 'Type',
    placeholder: {
      key: 'Enter key.',
      value: 'Enter value.',
    },
    invalid: {
      keyRequired: 'Key cannot be blank.',
      keyRepeated: 'Key cannot be duplicate.',
      valueRequired: 'Value cannot be blank.',
    },
  },
  errorCode: {
    '000': 'Internet error',
  },
};
