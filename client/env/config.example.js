// Put your parse application keys here!
// Application-Id: OWawBR069jvFwWln4zrgOJR2wOCN6oetbBdvMLJq
// REST-API-Key: GH78f2KLgWQT16v2OtQjI0WJZXBd7czwegMoIogB
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', 'PARSE_APP_ID');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', 'PARSE_API_KEY');
});
