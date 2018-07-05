const merge = require('lodash.merge');

module.exports = function mergeUpdate(schema) {
  schema.statics.findByIdAndUpdateByMerge = async function(_id, input) {
    const doc = await this.findById(_id);
    merge(doc, input);
    return await doc.save();
  };
};
