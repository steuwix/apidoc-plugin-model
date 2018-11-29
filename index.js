var app = {};

module.exports = {
  init: function(_app) {
    app = _app;
    // TODO
    //app.addHook('parser-find-elements', parserFindModelApis);

    app.parsers.apimodel = {
      parse     : parseModel,
      path      : 'local',
      method    : 'insert'
    };
  }

};

function parseModel(content) {
  return {
    model : content
  };
}
