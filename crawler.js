var Xray = require('x-ray');
var x = Xray();

function getMetadata(link, callback) {
  x(link, {
    title: 'title',
    ogTitle: 'meta[property*="title"]@content',
    description: 'meta[name*="description"]@content',
    ogDescription: 'meta[property*="description"]@content',
    metaImg: 'meta[name*="image"]@content',
    ogImg: 'meta[property*="image"]@content',
    tagImg: 'img@src'
  })(function(err, obj) {
    if (err) {
      callback(err, null);
    } else {
      var res = {
        link: link,
        title: obj.title || obj.ogTitle || 'No title',
        description: obj.description || obj.ogDescription || 'No description',
        image: obj.metaImg || obj.ogImg || obj.tagImg
      };
      callback(null, res);
    }
  });
}

module.exports = getMetadata;
