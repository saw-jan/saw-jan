const fs = require('fs');
const { join } = require('path');

if (fs.existsSync('dist')) {
  fs.writeFileSync(join('dist', 'CNAME'), 'sajang.com.np');
}
