const { workspaceRoot } = require('@nx/devkit');
const { registerTsProject } = require('@nx/js/src/internal');
const { join } = require('path');

registerTsProject(join(workspaceRoot, 'tsconfig.base.json'));

module.exports = require('./runner');
