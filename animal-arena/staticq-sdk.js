(function(){
  function resolved(value){ return Promise.resolve(value); }
  var sdk = {
    init: function(){ return resolved(); },
    initWithVideoHB: function(){ return resolved(); },
    setDebug: function(){},
    gameLoadingStart: function(){},
    gameLoadingProgress: function(){},
    gameLoadingFinished: function(){},
    gameplayStart: function(){},
    gameplayStop: function(){},
    happyTime: function(){},
    captureError: function(){},
    commercialBreak: function(){ return resolved(); },
    rewardedBreak: function(){ return resolved(false); },
    displayAd: function(){ return resolved(); },
    destroyAd: function(){},
    getLeaderboard: function(){ return resolved(null); },
    getURLParam: function(){ return ""; },
    getLanguage: function(){ return (navigator.language || "en").split("-")[0]; },
    shareableURL: function(){ return resolved(location.href); },
    isAdBlocked: function(){ return resolved(false); }
  };
  window.PokiSDK = window.PokiSDK || sdk;
  window.PokiSDK_OK = true;
  window.CrazyGames = window.CrazyGames || { SDK: { init: resolved, game: {}, ad: {}, banner: {} } };
})();