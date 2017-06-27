import $ from 'jquery';

function run(term) {
  if (process.env.REACT_APP_ENVIRONMENT === 'development') {
    const API_BASE_URL = 'http://api-dev.library.amnh.org/api/v1/resources/archives-space';
  } else {
    const API_BASE_URL = 'http://api.library.amnh.org/api/v1/resources/archives-space';
  }

  return $.ajax({
    url: API_BASE_URL,
    dataType: 'json',
    data: {q:term},
  }).then(function (data, textStatus) {
    if (data.results && data.results.length > 0) {
      return data.results.slice(0,3).map( function(result) {
        return {
          title: result['title'],
          url: 'http://lbry-web-006.amnh.org:8081' + result['uri'],
          type: result['primary_type'],
        };
      });
    }
    return {};
  });
}

export default {
  run: run,
};
