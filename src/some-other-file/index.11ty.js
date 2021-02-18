const page = require('../_helpers/page')

exports.data = () => page.assemble('some_other_file')
exports.render = async ({ md }) => this.md(md)
