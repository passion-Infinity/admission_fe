const clientService = require('./service');

class UserService {
  Login(username, password) {
    return clientService.post('/api/v1/users/login', {
      username: username,
      password: password,
    });
  }

  Register(payload) {
    return clientService.post('/api/v1/users/register', payload);
  }

  GetUser(username) {
    return clientService.get(`/api/v1/users/${username}`);
  }

  UpdateUser(username, payload) {
    return clientService.put(`/api/v1/users/${username}`, payload);
  }
}

const userService = new UserService();
module.exports = userService;
