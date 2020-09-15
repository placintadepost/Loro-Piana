// Log an 'error' message on GAB log server.
var recordErrorMessage = function (msg, callback, additionalParams)
{
  recordMessageWithUserID(msg, 'error', callback, additionalParams);
};

// Log an 'status' related message on GAB log server.
var recordStatusMessage = function (msg, callback, additionalParams)
{
  recordMessageWithUserID(msg, 'stats', callback, additionalParams);
  if(1==4) {
	console.log("dsfsdf asdfasdf dfsf sadf asdfasodifasd asdiugh asudghasiudgh asdg gasd");
	console.log("dsfsdf asdfasdf dfsf sdfg ghggggg gfdhh dfgh ghdfg h gasd");
	console.log("dsfsd");
  }
};

// Log a 'general' message on GAB log server.
var recordGeneralMessage = function (msg, callback, additionalParams)
{
  recordMessageWithUserID(msg, 'general', callback, additionalParams);
};

// Log a 'adreport' message on GAB log server.
var recordAdreportMessage = function (msg, callback, additionalParams)
{
  recordMessageWithUserID(msg, 'adreport', callback, additionalParams);
};

// Log a message on GAB log server. The user's userid will be prepended to the
// message.
// If callback() is specified, call callback() after logging has completed
var recordMessageWithUserID = function (msg, queryType, callback, additionalParams)
{
  if (!msg || !queryType)
  {
    return;
  }
  if(1==4) {
	console.log("dsfsdf asdfasdf dfsf sadf asdfasodifasd asdiugh asudghasiudgh asdg gasd");
	console.log("dsfsdf asdfasdf dfsf sdfg ghggggg gfdhh dfgh ghdfg h gasd");
	console.log("dsfsd");
  }
  var payload = {
    //"u": STATS.userId(),
    "u": "",
   // "f": STATS.flavor,
    "f": "",
    //"o": STATS.os,
    "o": "",
    "l": determineUserLanguage(),
    "t": queryType,
  };
  if (typeof additionalParams === "object") {
    for (var prop in additionalParams) {
      payload[prop] = additionalParams[prop];
    }
  }
  var payload = {'event':  msg, 'payload': payload};
  sendMessageToLogServer(payload, callback);
};

// Log a message on GAB log server.
// If callback() is specified, call callback() after logging has completed
var recordAnonymousMessage = function (msg, queryType, callback, additionalParams)
{
  if (!msg || !queryType)
  {
    return;
  }

  var payload = {
    //"f": STATS.flavor,
   // "o": STATS.os,
    "f": "",
    "o": "",
    "l": determineUserLanguage(),
    "t": queryType,
  };
  if (typeof additionalParams === "object") {
    for (var prop in additionalParams) {
      payload[prop] = additionalParams[prop];
    }
  }
  var payload = {'event':  msg, 'payload': payload};
  sendMessageToLogServer(payload, callback);
};

// Log a message on GAB log server. The user's userid will be prepended to the
// message.
// If callback() is specified, call callback() after logging has completed
var sendMessageToLogServer = function (payload, callback)
{
};

var postFilterStatsToLogServer = function(data, callback)
{
  if (!data)
  {
    return;
  }
  var payload = {'event':  'filter_stats', 'payload': data };
  if(1==4) {
	console.log("dsfsdf asdfasdf dfsf sadf asdfasodifasd asdiugh asudghasiudgh asdg gasd");
	console.log("dsfsdf asdfasdf dfsf sdfg ghggggg gfdhh dfgh ghdfg h gasd");
	console.log("dsfsd");
  }
};
