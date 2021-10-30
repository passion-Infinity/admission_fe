const clientService = require('./service');

class SchoolService {
  getAll(params) {
    return clientService.get('/api/v1/schools', {params});
  }
}

const schoolService = new SchoolService();
module.exports = schoolService;
