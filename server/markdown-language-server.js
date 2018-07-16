module.exports = function(e) {
 var t = {};
 function n(e) {
  return "" + ({
   0: "markdown-language-server"
  }[e] || e) + ".js";
 }
 function r(t) {
  var r = n(t);
  var i = require(__dirname + "/" + r);
  var o = i.modules, a = i.ids;
  for (var s in o) {
   e[s] = o[s];
  }
 }
 var i = [ [ "wPMy" ] ];
 for (var o = 0; o < i.length; ++o) {
  var a = i[o];
  for (var s = 1; s < a.length; ++s) {
   var u = a[s];
   r(u);
  }
 }
 function c(n) {
  if (t[n]) {
   return t[n].exports;
  }
  var r = t[n] = {
   i: n,
   l: false,
   exports: {}
  };
  e[n].call(r.exports, r, r.exports, c);
  r.l = true;
  return r.exports;
 }
 c.m = e;
 c.c = t;
 c.d = function(e, t, n) {
  if (!c.o(e, t)) {
   Object.defineProperty(e, t, {
    enumerable: true,
    get: n
   });
  }
 };
 c.r = function(e) {
  if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
   Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
   });
  }
  Object.defineProperty(e, "__esModule", {
   value: true
  });
 };
 c.t = function(e, t) {
  if (t & 1) e = c(e);
  if (t & 8) return e;
  if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
  var n = Object.create(null);
  c.r(n);
  Object.defineProperty(n, "default", {
   enumerable: true,
   value: e
  });
  if (t & 2 && typeof e != "string") for (var r in e) c.d(n, r, function(t) {
   return e[t];
  }.bind(null, r));
  return n;
 };
 c.n = function(e) {
  var t = e && e.__esModule ? function t() {
   return e["default"];
  } : function t() {
   return e;
  };
  c.d(t, "a", t);
  return t;
 };
 c.o = function(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
 };
 c.p = "";
 return c(c.s = "wPMy");
}({
 "+mNA": function(e, t, n) {
  "use strict";
  function r(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const i = n("NVm0");
  t.ErrorCodes = i.ErrorCodes;
  t.ResponseError = i.ResponseError;
  t.CancellationToken = i.CancellationToken;
  t.CancellationTokenSource = i.CancellationTokenSource;
  t.Disposable = i.Disposable;
  t.Event = i.Event;
  t.Emitter = i.Emitter;
  t.Trace = i.Trace;
  t.SetTraceNotification = i.SetTraceNotification;
  t.LogTraceNotification = i.LogTraceNotification;
  t.RequestType = i.RequestType;
  t.RequestType0 = i.RequestType0;
  t.NotificationType = i.NotificationType;
  t.NotificationType0 = i.NotificationType0;
  t.MessageReader = i.MessageReader;
  t.MessageWriter = i.MessageWriter;
  t.ConnectionStrategy = i.ConnectionStrategy;
  t.StreamMessageReader = i.StreamMessageReader;
  t.StreamMessageWriter = i.StreamMessageWriter;
  t.IPCMessageReader = i.IPCMessageReader;
  t.IPCMessageWriter = i.IPCMessageWriter;
  t.createClientPipeTransport = i.createClientPipeTransport;
  t.createServerPipeTransport = i.createServerPipeTransport;
  t.generateRandomPipeName = i.generateRandomPipeName;
  t.createClientSocketTransport = i.createClientSocketTransport;
  t.createServerSocketTransport = i.createServerSocketTransport;
  r(n("siE0"));
  r(n("dBsl"));
  const o = n("kBpC");
  const a = n("JU0j");
  const s = n("6cR9");
  var u;
  (function(e) {
   let t;
   (function(e) {
    e.type = o.ConfigurationRequest.type;
   })(t = e.ConfigurationRequest || (e.ConfigurationRequest = {}));
   let n;
   (function(e) {
    e.type = a.WorkspaceFoldersRequest.type;
   })(n = e.WorkspaceFoldersRequest || (e.WorkspaceFoldersRequest = {}));
   let r;
   (function(e) {
    e.type = a.DidChangeWorkspaceFoldersNotification.type;
   })(r = e.DidChangeWorkspaceFoldersNotification || (e.DidChangeWorkspaceFoldersNotification = {}));
   e.DocumentColorRequest = s.DocumentColorRequest;
   e.ColorPresentationRequest = s.ColorPresentationRequest;
  })(u = t.Proposed || (t.Proposed = {}));
  function c(e, t, n, r) {
   return i.createMessageConnection(e, t, n, r);
  }
  t.createProtocolConnection = c;
 },
 "+vTa": function(e, t) {
  function n(e) {
   return require(e);
  }
  n.keys = function() {
   return [];
  };
  n.resolve = require.resolve;
  e.exports = n;
  n.id = "+vTa";
 },
 "/0xf": function(e, t) {
  var n = [ "awoken", "been", "born", "beat", "become", "begun", "bent", "beset", "bet", "bid", "bidden", "bound", "bitten", "bled", "blown", "broken", "bred", "brought", "broadcast", "built", "burnt", "burst", "bought", "cast", "caught", "chosen", "clung", "come", "cost", "crept", "cut", "dealt", "dug", "dived", "done", "drawn", "dreamt", "driven", "drunk", "eaten", "fallen", "fed", "felt", "fought", "found", "fit", "fled", "flung", "flown", "forbidden", "forgotten", "foregone", "forgiven", "forsaken", "frozen", "gotten", "given", "gone", "ground", "grown", "hung", "heard", "hidden", "hit", "held", "hurt", "kept", "knelt", "knit", "known", "laid", "led", "leapt", "learnt", "left", "lent", "let", "lain", "lighted", "lost", "made", "meant", "met", "misspelt", "mistaken", "mown", "overcome", "overdone", "overtaken", "overthrown", "paid", "pled", "proven", "put", "quit", "read", "rid", "ridden", "rung", "risen", "run", "sawn", "said", "seen", "sought", "sold", "sent", "set", "sewn", "shaken", "shaven", "shorn", "shed", "shone", "shod", "shot", "shown", "shrunk", "shut", "sung", "sunk", "sat", "slept", "slain", "slid", "slung", "slit", "smitten", "sown", "spoken", "sped", "spent", "spilt", "spun", "spit", "split", "spread", "sprung", "stood", "stolen", "stuck", "stung", "stunk", "stridden", "struck", "strung", "striven", "sworn", "swept", "swollen", "swum", "swung", "taken", "taught", "torn", "told", "thought", "thrived", "thrown", "thrust", "trodden", "understood", "upheld", "upset", "woken", "worn", "woven", "wed", "wept", "wound", "won", "withheld", "withstood", "wrung", "written" ];
  var r = [ "indeed" ];
  var i = new RegExp("\\b(am|are|were|being|is|been|was|be)\\b\\s*([\\w]+ed|" + n.join("|") + ")\\b", "gi");
  var o;
  e.exports = function(e, t) {
   var n = t && t.by ? o || a() : i;
   var s = [];
   while (match = n.exec(e)) {
    if (r.indexOf(match[2].toLowerCase()) === -1) {
     s.push({
      index: match.index,
      offset: match[0].length
     });
    }
   }
   return s;
  };
  function a() {
   return o = new RegExp(i.toString().slice(1, -3) + "\\s*by\\b", "gi");
  }
 },
 "/g5D": function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("ZH/z");
  var o = n("cBZp");
  var a = "Content-Length: ";
  var s = "\r\n";
  var u;
  (function(e) {
   function t(e) {
    var t = e;
    return t && o.func(t.dispose) && o.func(t.onClose) && o.func(t.onError) && o.func(t.write);
   }
   e.is = t;
  })(u = t.MessageWriter || (t.MessageWriter = {}));
  var c = function() {
   function e() {
    this.errorEmitter = new i.Emitter();
    this.closeEmitter = new i.Emitter();
   }
   e.prototype.dispose = function() {
    this.errorEmitter.dispose();
    this.closeEmitter.dispose();
   };
   Object.defineProperty(e.prototype, "onError", {
    get: function() {
     return this.errorEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireError = function(e, t, n) {
    this.errorEmitter.fire([ this.asError(e), t, n ]);
   };
   Object.defineProperty(e.prototype, "onClose", {
    get: function() {
     return this.closeEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireClose = function() {
    this.closeEmitter.fire(undefined);
   };
   e.prototype.asError = function(e) {
    if (e instanceof Error) {
     return e;
    } else {
     return new Error("Writer recevied error. Reason: " + (o.string(e.message) ? e.message : "unknown"));
    }
   };
   return e;
  }();
  t.AbstractMessageWriter = c;
  var l = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf8";
    }
    var r = e.call(this) || this;
    r.writable = t;
    r.encoding = n;
    r.errorCount = 0;
    r.writable.on("error", function(e) {
     return r.fireError(e);
    });
    r.writable.on("close", function() {
     return r.fireClose();
    });
    return r;
   }
   t.prototype.write = function(e) {
    var t = JSON.stringify(e);
    var n = Buffer.byteLength(t, this.encoding);
    var r = [ a, n.toString(), s, s ];
    try {
     this.writable.write(r.join(""), "ascii");
     this.writable.write(t, this.encoding);
     this.errorCount = 0;
    } catch (t) {
     this.errorCount++;
     this.fireError(t, e, this.errorCount);
    }
   };
   return t;
  }(c);
  t.StreamMessageWriter = l;
  var f = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this) || this;
    n.process = t;
    n.errorCount = 0;
    n.queue = [];
    n.sending = false;
    var r = n.process;
    r.on("error", function(e) {
     return n.fireError(e);
    });
    r.on("close", function() {
     return n.fireClose;
    });
    return n;
   }
   t.prototype.write = function(e) {
    if (!this.sending && this.queue.length === 0) {
     this.doWriteMessage(e);
    } else {
     this.queue.push(e);
    }
   };
   t.prototype.doWriteMessage = function(e) {
    var t = this;
    try {
     if (this.process.send) {
      this.sending = true;
      this.process.send(e, undefined, undefined, function(n) {
       t.sending = false;
       if (n) {
        t.errorCount++;
        t.fireError(n, e, t.errorCount);
       } else {
        t.errorCount = 0;
       }
       if (t.queue.length > 0) {
        t.doWriteMessage(t.queue.shift());
       }
      });
     }
    } catch (t) {
     this.errorCount++;
     this.fireError(t, e, this.errorCount);
    }
   };
   return t;
  }(c);
  t.IPCMessageWriter = f;
  var d = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf8";
    }
    var r = e.call(this) || this;
    r.socket = t;
    r.queue = [];
    r.sending = false;
    r.encoding = n;
    r.errorCount = 0;
    r.socket.on("error", function(e) {
     return r.fireError(e);
    });
    r.socket.on("close", function() {
     return r.fireClose();
    });
    return r;
   }
   t.prototype.write = function(e) {
    if (!this.sending && this.queue.length === 0) {
     this.doWriteMessage(e);
    } else {
     this.queue.push(e);
    }
   };
   t.prototype.doWriteMessage = function(e) {
    var t = this;
    var n = JSON.stringify(e);
    var r = Buffer.byteLength(n, this.encoding);
    var i = [ a, r.toString(), s, s ];
    try {
     this.sending = true;
     this.socket.write(i.join(""), "ascii", function(r) {
      if (r) {
       t.handleError(r, e);
      }
      try {
       t.socket.write(n, t.encoding, function(n) {
        t.sending = false;
        if (n) {
         t.handleError(n, e);
        } else {
         t.errorCount = 0;
        }
        if (t.queue.length > 0) {
         t.doWriteMessage(t.queue.shift());
        }
       });
      } catch (r) {
       t.handleError(r, e);
      }
     });
    } catch (t) {
     this.handleError(t, e);
    }
   };
   t.prototype.handleError = function(e, t) {
    this.errorCount++;
    this.fireError(e, t, this.errorCount);
   };
   return t;
  }(c);
  t.SocketMessageWriter = d;
 },
 "1Ehp": function(e, t, n) {
  "use strict";
  function r(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const i = n("+mNA");
  t.Event = i.Event;
  const o = n("RWtI");
  const a = n("Gr+f");
  r(n("+mNA"));
  const s = n("iDpV");
  var u;
  (function(e) {
   e.uriToFilePath = s.uriToFilePath;
   e.resolveGlobalNodePath = s.resolveGlobalNodePath;
   e.resolveGlobalYarnPath = s.resolveGlobalYarnPath;
   e.resolve = s.resolve;
   e.resolveModule = s.resolveModule;
   e.resolveModule2 = s.resolveModule2;
   e.resolveModulePath = s.resolveModulePath;
  })(u = t.Files || (t.Files = {}));
  let c = false;
  let l = undefined;
  function f() {
   const e = "--clientProcessId";
   function t(e) {
    try {
     let t = parseInt(e);
     if (!isNaN(t)) {
      l = setInterval(() => {
       try {
        process.kill(t, 0);
       } catch (e) {
        process.exit(c ? 0 : 1);
       }
      }, 3e3);
     }
    } catch (e) {}
   }
   for (let n = 2; n < process.argv.length; n++) {
    let r = process.argv[n];
    if (r === e && n + 1 < process.argv.length) {
     t(process.argv[n + 1]);
     return;
    } else {
     let n = r.split("=");
     if (n[0] === e) {
      t(n[1]);
     }
    }
   }
  }
  f();
  class d {
   constructor() {
    this._documents = Object.create(null);
    this._onDidChangeContent = new i.Emitter();
    this._onDidOpen = new i.Emitter();
    this._onDidClose = new i.Emitter();
    this._onDidSave = new i.Emitter();
    this._onWillSave = new i.Emitter();
   }
   get syncKind() {
    return i.TextDocumentSyncKind.Full;
   }
   get onDidChangeContent() {
    return this._onDidChangeContent.event;
   }
   get onDidOpen() {
    return this._onDidOpen.event;
   }
   get onWillSave() {
    return this._onWillSave.event;
   }
   onWillSaveWaitUntil(e) {
    this._willSaveWaitUntil = e;
   }
   get onDidSave() {
    return this._onDidSave.event;
   }
   get onDidClose() {
    return this._onDidClose.event;
   }
   get(e) {
    return this._documents[e];
   }
   all() {
    return Object.keys(this._documents).map(e => this._documents[e]);
   }
   keys() {
    return Object.keys(this._documents);
   }
   listen(e) {
    function t(e) {
     return o.func(e.update);
    }
    e.__textDocumentSync = i.TextDocumentSyncKind.Full;
    e.onDidOpenTextDocument(e => {
     let t = e.textDocument;
     let n = i.TextDocument.create(t.uri, t.languageId, t.version, t.text);
     this._documents[t.uri] = n;
     let r = Object.freeze({
      document: n
     });
     this._onDidOpen.fire(r);
     this._onDidChangeContent.fire(r);
    });
    e.onDidChangeTextDocument(e => {
     let n = e.textDocument;
     let r = e.contentChanges;
     let i = r.length > 0 ? r[r.length - 1] : undefined;
     if (i) {
      let e = this._documents[n.uri];
      if (e && t(e)) {
       e.update(i, n.version);
       this._onDidChangeContent.fire(Object.freeze({
        document: e
       }));
      }
     }
    });
    e.onDidCloseTextDocument(e => {
     let t = this._documents[e.textDocument.uri];
     if (t) {
      delete this._documents[e.textDocument.uri];
      this._onDidClose.fire(Object.freeze({
       document: t
      }));
     }
    });
    e.onWillSaveTextDocument(e => {
     let t = this._documents[e.textDocument.uri];
     if (t) {
      this._onWillSave.fire(Object.freeze({
       document: t,
       reason: e.reason
      }));
     }
    });
    e.onWillSaveTextDocumentWaitUntil((e, t) => {
     let n = this._documents[e.textDocument.uri];
     if (n && this._willSaveWaitUntil) {
      return this._willSaveWaitUntil(Object.freeze({
       document: n,
       reason: e.reason
      }), t);
     } else {
      return [];
     }
    });
    e.onDidSaveTextDocument(e => {
     let t = this._documents[e.textDocument.uri];
     if (t) {
      this._onDidSave.fire(Object.freeze({
       document: t
      }));
     }
    });
   }
  }
  t.TextDocuments = d;
  class h {
   constructor() {
    this._messages = Object.create(null);
   }
   add(e) {
    let t = this._messages[e];
    if (!t) {
     t = 0;
    }
    t++;
    this._messages[e] = t;
   }
   sendErrors(e) {
    Object.keys(this._messages).forEach(t => {
     e.window.showErrorMessage(t);
    });
   }
  }
  t.ErrorMessageTracker = h;
  var p;
  (function(e) {
   function t() {
    return new g();
   }
   e.create = t;
  })(p = t.BulkRegistration || (t.BulkRegistration = {}));
  class g {
   constructor() {
    this._registrations = [];
    this._registered = new Set();
   }
   add(e, t) {
    const n = o.string(e) ? e : e.method;
    if (this._registered.has(n)) {
     throw new Error(`${n} is already added to this registration`);
    }
    const r = a.generateUuid();
    this._registrations.push({
     id: r,
     method: n,
     registerOptions: t || {}
    });
    this._registered.add(n);
   }
   asRegistrationParams() {
    return {
     registrations: this._registrations
    };
   }
  }
  var m;
  (function(e) {
   function t() {
    return new v(undefined, []);
   }
   e.create = t;
  })(m = t.BulkUnregistration || (t.BulkUnregistration = {}));
  class v {
   constructor(e, t) {
    this._connection = e;
    this._unregistrations = new Map();
    t.forEach(e => {
     this._unregistrations.set(e.method, e);
    });
   }
   get isAttached() {
    return !!this._connection;
   }
   attach(e) {
    this._connection = e;
   }
   add(e) {
    this._unregistrations.set(e.method, e);
   }
   dispose() {
    let e = [];
    for (let t of this._unregistrations.values()) {
     e.push(t);
    }
    let t = {
     unregisterations: e
    };
    this._connection.sendRequest(i.UnregistrationRequest.type, t).then(undefined, e => {
     this._connection.console.info(`Bulk unregistration failed.`);
    });
   }
   disposeSingle(e) {
    const t = o.string(e) ? e : e.method;
    const n = this._unregistrations.get(t);
    if (!n) {
     return false;
    }
    let r = {
     unregisterations: [ n ]
    };
    this._connection.sendRequest(i.UnregistrationRequest.type, r).then(() => {
     this._unregistrations.delete(t);
    }, e => {
     this._connection.console.info(`Unregistering request handler for ${n.id} failed.`);
    });
    return true;
   }
  }
  class y {
   constructor() {}
   rawAttach(e) {
    this._rawConnection = e;
   }
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   fillServerCapabilities(e) {}
   initialize(e) {}
   error(e) {
    this.send(i.MessageType.Error, e);
   }
   warn(e) {
    this.send(i.MessageType.Warning, e);
   }
   info(e) {
    this.send(i.MessageType.Info, e);
   }
   log(e) {
    this.send(i.MessageType.Log, e);
   }
   send(e, t) {
    if (this._rawConnection) {
     this._rawConnection.sendNotification(i.LogMessageNotification.type, {
      type: e,
      message: t
     });
    }
   }
  }
  class b {
   constructor() {}
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   showErrorMessage(e, ...t) {
    let n = {
     type: i.MessageType.Error,
     message: e,
     actions: t
    };
    return this._connection.sendRequest(i.ShowMessageRequest.type, n);
   }
   showWarningMessage(e, ...t) {
    let n = {
     type: i.MessageType.Warning,
     message: e,
     actions: t
    };
    return this._connection.sendRequest(i.ShowMessageRequest.type, n);
   }
   showInformationMessage(e, ...t) {
    let n = {
     type: i.MessageType.Info,
     message: e,
     actions: t
    };
    return this._connection.sendRequest(i.ShowMessageRequest.type, n);
   }
  }
  class w {
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   register(e, t, n) {
    if (e instanceof g) {
     return this.registerMany(e);
    } else if (e instanceof v) {
     return this.registerSingle1(e, t, n);
    } else {
     return this.registerSingle2(e, t);
    }
   }
   registerSingle1(e, t, n) {
    const r = o.string(t) ? t : t.method;
    const s = a.generateUuid();
    let u = {
     registrations: [ {
      id: s,
      method: r,
      registerOptions: n || {}
     } ]
    };
    if (!e.isAttached) {
     e.attach(this._connection);
    }
    return this._connection.sendRequest(i.RegistrationRequest.type, u).then(t => {
     e.add({
      id: s,
      method: r
     });
     return e;
    }, e => {
     this.connection.console.info(`Registering request handler for ${r} failed.`);
     return Promise.reject(e);
    });
   }
   registerSingle2(e, t) {
    const n = o.string(e) ? e : e.method;
    const r = a.generateUuid();
    let s = {
     registrations: [ {
      id: r,
      method: n,
      registerOptions: t || {}
     } ]
    };
    return this._connection.sendRequest(i.RegistrationRequest.type, s).then(e => {
     return i.Disposable.create(() => {
      this.unregisterSingle(r, n);
     });
    }, e => {
     this.connection.console.info(`Registering request handler for ${n} failed.`);
     return Promise.reject(e);
    });
   }
   unregisterSingle(e, t) {
    let n = {
     unregisterations: [ {
      id: e,
      method: t
     } ]
    };
    return this._connection.sendRequest(i.UnregistrationRequest.type, n).then(undefined, t => {
     this.connection.console.info(`Unregistering request handler for ${e} failed.`);
    });
   }
   registerMany(e) {
    let t = e.asRegistrationParams();
    return this._connection.sendRequest(i.RegistrationRequest.type, t).then(() => {
     return new v(this._connection, t.registrations.map(e => {
      return {
       id: e.id,
       method: e.method
      };
     }));
    }, e => {
     this.connection.console.info(`Bulk registeration failed.`);
     return Promise.reject(e);
    });
   }
  }
  class k {
   constructor() {}
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   applyEdit(e) {
    let t = {
     edit: e
    };
    return this._connection.sendRequest(i.ApplyWorkspaceEditRequest.type, t);
   }
  }
  class _ {
   constructor() {
    this._trace = i.Trace.Off;
   }
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   set trace(e) {
    this._trace = e;
   }
   log(e, t) {
    if (this._trace === i.Trace.Off) {
     return;
    }
    this._connection.sendNotification(i.LogTraceNotification.type, {
     message: e,
     verbose: this._trace === i.Trace.Verbose ? t : undefined
    });
   }
  }
  class x {
   constructor() {}
   attach(e) {
    this._connection = e;
   }
   get connection() {
    if (!this._connection) {
     throw new Error("Remote is not attached to a connection yet.");
    }
    return this._connection;
   }
   initialize(e) {}
   fillServerCapabilities(e) {}
   logEvent(e) {
    this._connection.sendNotification(i.TelemetryEventNotification.type, e);
   }
  }
  function R(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineConsoleFeatures = R;
  function C(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineTelemetryFeatures = C;
  function T(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineTracerFeatures = T;
  function E(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineClientFeatures = E;
  function S(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineWindowFeatures = S;
  function q(e, t) {
   return function(n) {
    return t(e(n));
   };
  }
  t.combineWorkspaceFeatures = q;
  function O(e, t) {
   function n(e, t, n) {
    if (e && t) {
     return n(e, t);
    } else if (e) {
     return e;
    } else {
     return t;
    }
   }
   let r = {
    __brand: "features",
    console: n(e.console, t.console, R),
    tracer: n(e.tracer, t.tracer, T),
    telemetry: n(e.telemetry, t.telemetry, C),
    client: n(e.client, t.client, E),
    window: n(e.window, t.window, S),
    workspace: n(e.workspace, t.workspace, q)
   };
   return r;
  }
  t.combineFeatures = O;
  function D(e, t, n, r) {
   let o;
   let a;
   let s;
   let u;
   if (e !== void 0 && e.__brand === "features") {
    o = e;
    e = t;
    t = n;
    n = r;
   }
   if (i.ConnectionStrategy.is(e)) {
    u = e;
   } else {
    a = e;
    s = t;
    u = n;
   }
   return j(a, s, u, o);
  }
  t.createConnection = D;
  function j(e, t, n, r) {
   if (!e && !t && process.argv.length > 2) {
    let n = void 0;
    let r = void 0;
    let o = process.argv.slice(2);
    for (let s = 0; s < o.length; s++) {
     let u = o[s];
     if (u === "--node-ipc") {
      e = new i.IPCMessageReader(process);
      t = new i.IPCMessageWriter(process);
      break;
     } else if (u === "--stdio") {
      e = process.stdin;
      t = process.stdout;
      break;
     } else if (u === "--socket") {
      n = parseInt(o[s + 1]);
      break;
     } else if (u === "--pipe") {
      r = o[s + 1];
      break;
     } else {
      var a = u.split("=");
      if (a[0] === "--socket") {
       n = parseInt(a[1]);
       break;
      } else if (a[0] === "--pipe") {
       r = a[1];
       break;
      }
     }
    }
    if (n) {
     let r = i.createServerSocketTransport(n);
     e = r[0];
     t = r[1];
    } else if (r) {
     let n = i.createServerPipeTransport(r);
     e = n[0];
     t = n[1];
    }
   }
   var s = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
   if (!e) {
    throw new Error("Connection input stream is not set. " + s);
   }
   if (!t) {
    throw new Error("Connection output stream is not set. " + s);
   }
   if (o.func(e.read) && o.func(e.on)) {
    let t = e;
    t.on("end", () => {
     process.exit(c ? 0 : 1);
    });
    t.on("close", () => {
     process.exit(c ? 0 : 1);
    });
   }
   const u = r && r.console ? new (r.console(y))() : new y();
   const f = i.createProtocolConnection(e, t, u, n);
   u.rawAttach(f);
   const d = r && r.tracer ? new (r.tracer(_))() : new _();
   const h = r && r.telemetry ? new (r.telemetry(x))() : new x();
   const p = r && r.client ? new (r.client(w))() : new w();
   const g = r && r.window ? new (r.window(b))() : new b();
   const m = r && r.workspace ? new (r.workspace(k))() : new k();
   const v = [ u, d, h, p, g, m ];
   function R(e) {
    if (o.thenable(e)) {
     return e;
    } else {
     return Promise.resolve(e);
    }
   }
   let C = undefined;
   let T = undefined;
   let E = undefined;
   let S = {
    listen: () => f.listen(),
    sendRequest: (e, ...t) => f.sendRequest(o.string(e) ? e : e.method, ...t),
    onRequest: (e, t) => f.onRequest(e, t),
    sendNotification: (e, ...t) => f.sendNotification(o.string(e) ? e : e.method, ...t),
    onNotification: (e, t) => f.onNotification(e, t),
    onInitialize: e => T = e,
    onInitialized: e => f.onNotification(i.InitializedNotification.type, e),
    onShutdown: e => C = e,
    onExit: e => E = e,
    get console() {
     return u;
    },
    get telemetry() {
     return h;
    },
    get tracer() {
     return d;
    },
    get client() {
     return p;
    },
    get window() {
     return g;
    },
    get workspace() {
     return m;
    },
    onDidChangeConfiguration: e => f.onNotification(i.DidChangeConfigurationNotification.type, e),
    onDidChangeWatchedFiles: e => f.onNotification(i.DidChangeWatchedFilesNotification.type, e),
    __textDocumentSync: undefined,
    onDidOpenTextDocument: e => f.onNotification(i.DidOpenTextDocumentNotification.type, e),
    onDidChangeTextDocument: e => f.onNotification(i.DidChangeTextDocumentNotification.type, e),
    onDidCloseTextDocument: e => f.onNotification(i.DidCloseTextDocumentNotification.type, e),
    onWillSaveTextDocument: e => f.onNotification(i.WillSaveTextDocumentNotification.type, e),
    onWillSaveTextDocumentWaitUntil: e => f.onRequest(i.WillSaveTextDocumentWaitUntilRequest.type, e),
    onDidSaveTextDocument: e => f.onNotification(i.DidSaveTextDocumentNotification.type, e),
    sendDiagnostics: e => f.sendNotification(i.PublishDiagnosticsNotification.type, e),
    onHover: e => f.onRequest(i.HoverRequest.type, e),
    onCompletion: e => f.onRequest(i.CompletionRequest.type, e),
    onCompletionResolve: e => f.onRequest(i.CompletionResolveRequest.type, e),
    onSignatureHelp: e => f.onRequest(i.SignatureHelpRequest.type, e),
    onDefinition: e => f.onRequest(i.DefinitionRequest.type, e),
    onReferences: e => f.onRequest(i.ReferencesRequest.type, e),
    onDocumentHighlight: e => f.onRequest(i.DocumentHighlightRequest.type, e),
    onDocumentSymbol: e => f.onRequest(i.DocumentSymbolRequest.type, e),
    onWorkspaceSymbol: e => f.onRequest(i.WorkspaceSymbolRequest.type, e),
    onCodeAction: e => f.onRequest(i.CodeActionRequest.type, e),
    onCodeLens: e => f.onRequest(i.CodeLensRequest.type, e),
    onCodeLensResolve: e => f.onRequest(i.CodeLensResolveRequest.type, e),
    onDocumentFormatting: e => f.onRequest(i.DocumentFormattingRequest.type, e),
    onDocumentRangeFormatting: e => f.onRequest(i.DocumentRangeFormattingRequest.type, e),
    onDocumentOnTypeFormatting: e => f.onRequest(i.DocumentOnTypeFormattingRequest.type, e),
    onRenameRequest: e => f.onRequest(i.RenameRequest.type, e),
    onDocumentLinks: e => f.onRequest(i.DocumentLinkRequest.type, e),
    onDocumentLinkResolve: e => f.onRequest(i.DocumentLinkResolveRequest.type, e),
    onExecuteCommand: e => f.onRequest(i.ExecuteCommandRequest.type, e),
    dispose: () => f.dispose()
   };
   for (let e of v) {
    e.attach(S);
   }
   f.onRequest(i.InitializeRequest.type, e => {
    if (o.number(e.processId) && l === void 0) {
     setInterval(() => {
      try {
       process.kill(e.processId, 0);
      } catch (e) {
       process.exit(c ? 0 : 1);
      }
     }, 3e3);
    }
    if (o.string(e.trace)) {
     d.trace = i.Trace.fromString(e.trace);
    }
    for (let t of v) {
     t.initialize(e.capabilities);
    }
    if (T) {
     let t = T(e, new i.CancellationTokenSource().token);
     return R(t).then(e => {
      if (e instanceof i.ResponseError) {
       return e;
      }
      let t = e;
      if (!t) {
       t = {
        capabilities: {}
       };
      }
      let n = t.capabilities;
      if (!n) {
       n = {};
       t.capabilities = n;
      }
      if (!n.textDocumentSync) {
       n.textDocumentSync = o.number(S.__textDocumentSync) ? S.__textDocumentSync : i.TextDocumentSyncKind.None;
      } else if (!o.number(n.textDocumentSync) && !o.number(n.textDocumentSync.change)) {
       n.textDocumentSync.change = o.number(S.__textDocumentSync) ? S.__textDocumentSync : i.TextDocumentSyncKind.None;
      }
      for (let e of v) {
       e.fillServerCapabilities(n);
      }
      return t;
     });
    } else {
     let e = {
      capabilities: {
       textDocumentSync: i.TextDocumentSyncKind.None
      }
     };
     for (let t of v) {
      t.fillServerCapabilities(e.capabilities);
     }
     return e;
    }
   });
   f.onRequest(i.ShutdownRequest.type, () => {
    c = true;
    if (C) {
     return C(new i.CancellationTokenSource().token);
    } else {
     return undefined;
    }
   });
   f.onNotification(i.ExitNotification.type, () => {
    try {
     if (E) {
      E();
     }
    } finally {
     if (c) {
      process.exit(0);
     } else {
      process.exit(1);
     }
    }
   });
   f.onNotification(i.SetTraceNotification.type, e => {
    d.trace = i.Trace.fromString(e.value);
   });
   return S;
  }
  const N = n("Bx39");
  const M = n("rZ7H");
  var P;
  (function(e) {
   e.ConfigurationFeature = N.ConfigurationFeature;
   e.WorkspaceFoldersFeature = M.WorkspaceFoldersFeature;
   e.all = {
    __brand: "features",
    workspace: q(e.WorkspaceFoldersFeature, e.ConfigurationFeature)
   };
  })(P = t.ProposedFeatures || (t.ProposedFeatures = {}));
 },
 "1KsK": function(e, t, n) {
  "use strict";
  var r = Object.prototype.toString;
  e.exports = function e(t) {
   var n = r.call(t);
   var i = n === "[object Arguments]";
   if (!i) {
    i = n !== "[object Array]" && t !== null && typeof t === "object" && typeof t.length === "number" && t.length >= 0 && r.call(t.callee) === "[object Function]";
   }
   return i;
  };
 },
 "1seS": function(e, t, n) {
  "use strict";
  var r = Object.prototype.hasOwnProperty;
  var i = Object.prototype.toString;
  var o = Array.prototype.slice;
  var a = n("1KsK");
  var s = Object.prototype.propertyIsEnumerable;
  var u = !s.call({
   toString: null
  }, "toString");
  var c = s.call(function() {}, "prototype");
  var l = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ];
  var f = function(e) {
   var t = e.constructor;
   return t && t.prototype === e;
  };
  var d = {
   $applicationCache: true,
   $console: true,
   $external: true,
   $frame: true,
   $frameElement: true,
   $frames: true,
   $innerHeight: true,
   $innerWidth: true,
   $outerHeight: true,
   $outerWidth: true,
   $pageXOffset: true,
   $pageYOffset: true,
   $parent: true,
   $scrollLeft: true,
   $scrollTop: true,
   $scrollX: true,
   $scrollY: true,
   $self: true,
   $webkitIndexedDB: true,
   $webkitStorageInfo: true,
   $window: true
  };
  var h = function() {
   if (typeof window === "undefined") {
    return false;
   }
   for (var e in window) {
    try {
     if (!d["$" + e] && r.call(window, e) && window[e] !== null && typeof window[e] === "object") {
      try {
       f(window[e]);
      } catch (e) {
       return true;
      }
     }
    } catch (e) {
     return true;
    }
   }
   return false;
  }();
  var p = function(e) {
   if (typeof window === "undefined" || !h) {
    return f(e);
   }
   try {
    return f(e);
   } catch (e) {
    return false;
   }
  };
  var g = function e(t) {
   var n = t !== null && typeof t === "object";
   var o = i.call(t) === "[object Function]";
   var s = a(t);
   var f = n && i.call(t) === "[object String]";
   var d = [];
   if (!n && !o && !s) {
    throw new TypeError("Object.keys called on a non-object");
   }
   var h = c && o;
   if (f && t.length > 0 && !r.call(t, 0)) {
    for (var g = 0; g < t.length; ++g) {
     d.push(String(g));
    }
   }
   if (s && t.length > 0) {
    for (var m = 0; m < t.length; ++m) {
     d.push(String(m));
    }
   } else {
    for (var v in t) {
     if (!(h && v === "prototype") && r.call(t, v)) {
      d.push(String(v));
     }
    }
   }
   if (u) {
    var y = p(t);
    for (var b = 0; b < l.length; ++b) {
     if (!(y && l[b] === "constructor") && r.call(t, l[b])) {
      d.push(l[b]);
     }
    }
   }
   return d;
  };
  g.shim = function e() {
   if (Object.keys) {
    var t = function() {
     return (Object.keys(arguments) || "").length === 2;
    }(1, 2);
    if (!t) {
     var n = Object.keys;
     Object.keys = function e(t) {
      if (a(t)) {
       return n(o.call(t));
      } else {
       return n(t);
      }
     };
    }
   } else {
    Object.keys = g;
   }
   return Object.keys || g;
  };
  e.exports = g;
 },
 "6+Hu": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("oyvS");
  var i = n("jle/");
  var o = n("PJMN");
  var a = n("Qs2e");
  var s = n("eNxj");
  var u = n("/g5D");
  function c() {
   var e = o.randomBytes(21).toString("hex");
   if (process.platform === "win32") {
    return "\\\\.\\pipe\\vscode-jsonrpc-" + e + "-sock";
   } else {
    return r.join(i.tmpdir(), "vscode-" + e + ".sock");
   }
  }
  t.generateRandomPipeName = c;
  function l(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n;
   var r = new Promise(function(e, t) {
    n = e;
   });
   return new Promise(function(i, o) {
    var c = a.createServer(function(e) {
     c.close();
     n([ new s.SocketMessageReader(e, t), new u.SocketMessageWriter(e, t) ]);
    });
    c.on("error", o);
    c.listen(e, function() {
     c.removeListener("error", o);
     i({
      onConnected: function() {
       return r;
      }
     });
    });
   });
  }
  t.createClientPipeTransport = l;
  function f(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n = a.createConnection(e);
   return [ new s.SocketMessageReader(n, t), new u.SocketMessageWriter(n, t) ];
  }
  t.createServerPipeTransport = f;
 },
 "6cR9": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("NVm0");
  var i;
  (function(e) {
   e.type = new r.RequestType("textDocument/documentColor");
  })(i = t.DocumentColorRequest || (t.DocumentColorRequest = {}));
  var o;
  (function(e) {
   e.type = new r.RequestType("textDocument/colorPresentation");
  })(o = t.ColorPresentationRequest || (t.ColorPresentationRequest = {}));
 },
 "7wSx": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("Qs2e");
  var i = n("eNxj");
  var o = n("/g5D");
  function a(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n;
   var a = new Promise(function(e, t) {
    n = e;
   });
   return new Promise(function(s, u) {
    var c = r.createServer(function(e) {
     c.close();
     n([ new i.SocketMessageReader(e, t), new o.SocketMessageWriter(e, t) ]);
    });
    c.on("error", u);
    c.listen(e, "127.0.0.1", function() {
     c.removeListener("error", u);
     s({
      onConnected: function() {
       return a;
      }
     });
    });
   });
  }
  t.createClientSocketTransport = a;
  function s(e, t) {
   if (t === void 0) {
    t = "utf-8";
   }
   var n = r.createConnection(e, "127.0.0.1");
   return [ new i.SocketMessageReader(n, t), new o.SocketMessageWriter(n, t) ];
  }
  t.createServerSocketTransport = s;
 },
 "82c2": function(e, t, n) {
  "use strict";
  var r = n("1seS");
  var i = n("v61W");
  var o = typeof Symbol === "function" && typeof Symbol() === "symbol";
  var a = Object.prototype.toString;
  var s = function(e) {
   return typeof e === "function" && a.call(e) === "[object Function]";
  };
  var u = function() {
   var e = {};
   try {
    Object.defineProperty(e, "x", {
     enumerable: false,
     value: e
    });
    for (var t in e) {
     return false;
    }
    return e.x === e;
   } catch (e) {
    return false;
   }
  };
  var c = Object.defineProperty && u();
  var l = function(e, t, n, r) {
   if (t in e && (!s(r) || !r())) {
    return;
   }
   if (c) {
    Object.defineProperty(e, t, {
     configurable: true,
     enumerable: false,
     value: n,
     writable: true
    });
   } else {
    e[t] = n;
   }
  };
  var f = function(e, t) {
   var n = arguments.length > 2 ? arguments[2] : {};
   var a = r(t);
   if (o) {
    a = a.concat(Object.getOwnPropertySymbols(t));
   }
   i(a, function(r) {
    l(e, r, t[r], n[r]);
   });
  };
  f.supportsDescriptors = !!c;
  e.exports = f;
 },
 "8R9v": function(e, t, n) {
  "use strict";
  var r = n("82c2");
  var i = n("yLpt");
  e.exports = function e() {
   var t = i();
   r(Object, {
    assign: t
   }, {
    assign: function() {
     return Object.assign !== t;
    }
   });
   return t;
  };
 },
 BKyM: function(e, t) {
  e.exports = function(e, t, r) {
   var i = e.split("\n");
   return t.map(function(e) {
    var t = o(e.index);
    var a = 0;
    if (t.col > 25) {
     a = t.col - 25;
    }
    if (r) {
     return {
      reason: e.reason,
      line: t.line,
      col: t.col
     };
    }
    var s = i[t.line - 1].substr(a, 80);
    return [ s, n(" ", t.col - a) + n("^", e.offset), e.reason + " on line " + t.line + " at column " + t.col ].join("\n");
   });
   function o(t) {
    var n = e.substr(0, t).split("\n").length;
    var r = function() {
     var e = i.slice(0);
     e.splice(n - 1);
     return e.join("\n").length + (e.length > 0);
    }();
    var o = t - r;
    return {
     line: n,
     col: o
    };
   }
  };
  function n(e, t) {
   var n = "";
   for (var r = t; r > 0; r--) {
    n += e;
   }
   return n;
  }
 },
 BbeW: function(e, t) {
  var n = function(e, t, n) {
   var r = [];
   while (result = e.exec(t)) {
    r.push({
     index: result.index,
     offset: result[0].length
    });
   }
   return r;
  };
  e.exports = n;
 },
 Bx39: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("+mNA");
  const i = n("RWtI");
  t.ConfigurationFeature = (e => {
   return class extends e {
    getConfiguration(e) {
     if (!e) {
      return this._getConfiguration({});
     } else if (i.string(e)) {
      return this._getConfiguration({
       section: e
      });
     } else {
      return this._getConfiguration(e);
     }
    }
    _getConfiguration(e) {
     let t = {
      items: Array.isArray(e) ? e : [ e ]
     };
     return this.connection.sendRequest(r.Proposed.ConfigurationRequest.type, t).then(t => {
      return Array.isArray(e) ? t : t[0];
     });
    }
   };
  });
 },
 CidT: function(e, t) {
  var n = new RegExp("(\\s*)([^\\s]+)", "gi");
  var r = /\w+/;
  e.exports = function(e) {
   var t = [];
   var i = "";
   while (match = n.exec(e)) {
    if (r.test(match[2]) && match[2].toLowerCase() === i) {
     t.push({
      index: match.index + match[1].length,
      offset: match[2].length
     });
    }
    i = match[2].toLowerCase();
   }
   return t;
  };
 },
 D3N6: function(e, t, n) {
  var r = [ "a chip off the old block", "a clean slate", "a dark and stormy night", "a far cry", "a fine kettle of fish", "a loose cannon", "a penny saved is a penny earned", "a tough row to hoe", "a word to the wise", "ace in the hole", "acid test", "add insult to injury", "against all odds", "air your dirty laundry", "all fun and games", "all in a day's work", "all talk, no action", "all thumbs", "all your eggs in one basket", "all's fair in love and war", "all's well that ends well", "almighty dollar", "American as apple pie", "an axe to grind", "another day, another dollar", "armed to the teeth", "as luck would have it", "as old as time", "as the crow flies", "at loose ends", "at my wits end", "avoid like the plague", "babe in the woods", "back against the wall", "back in the saddle", "back to square one", "back to the drawing board", "bad to the bone", "badge of honor", "bald faced liar", "ballpark figure", "banging your head against a brick wall", "baptism by fire", "barking up the wrong tree", "bat out of hell", "be all and end all", "beat a dead horse", "beat around the bush", "been there, done that", "beggars can't be choosers", "behind the eight ball", "bend over backwards", "benefit of the doubt", "bent out of shape", "best thing since sliced bread", "bet your bottom dollar", "better half", "better late than never", "better mousetrap", "better safe than sorry", "between a rock and a hard place", "beyond the pale", "bide your time", "big as life", "big cheese", "big fish in a small pond", "big man on campus", "bigger they are the harder they fall", "bird in the hand", "bird's eye view", "birds and the bees", "birds of a feather flock together", "bit the hand that feeds you", "bite the bullet", "bite the dust", "bitten off more than he can chew", "black as coal", "black as pitch", "black as the ace of spades", "blast from the past", "bleeding heart", "blessing in disguise", "blind ambition", "blind as a bat", "blind leading the blind", "blood is thicker than water", "blood sweat and tears", "blow off steam", "blow your own horn", "blushing bride", "boils down to", "bolt from the blue", "bone to pick", "bored stiff", "bored to tears", "bottomless pit", "boys will be boys", "bright and early", "brings home the bacon", "broad across the beam", "broken record", "brought back to reality", "bull by the horns", "bull in a china shop", "burn the midnight oil", "burning question", "burning the candle at both ends", "burst your bubble", "bury the hatchet", "busy as a bee", "by hook or by crook", "call a spade a spade", "called onto the carpet", "calm before the storm", "can of worms", "can't cut the mustard", "can't hold a candle to", "case of mistaken identity", "cat got your tongue", "cat's meow", "caught in the crossfire", "caught red-handed", "checkered past", "chomping at the bit", "cleanliness is next to godliness", "clear as a bell", "clear as mud", "close to the vest", "cock and bull story", "cold shoulder", "come hell or high water", "cool as a cucumber", "cool, calm, and collected", "cost a king's ransom", "count your blessings", "crack of dawn", "crash course", "creature comforts", "cross that bridge when you come to it", "crushing blow", "cry like a baby", "cry me a river", "cry over spilt milk", "crystal clear", "curiosity killed the cat", "cut and dried", "cut through the red tape", "cut to the chase", "cute as a bugs ear", "cute as a button", "cute as a puppy", "cuts to the quick", "dark before the dawn", "day in, day out", "dead as a doornail", "devil is in the details", "dime a dozen", "divide and conquer", "dog and pony show", "dog days", "dog eat dog", "dog tired", "don't burn your bridges", "don't count your chickens", "don't look a gift horse in the mouth", "don't rock the boat", "don't step on anyone's toes", "don't take any wooden nickels", "down and out", "down at the heels", "down in the dumps", "down the hatch", "down to earth", "draw the line", "dressed to kill", "dressed to the nines", "drives me up the wall", "dull as dishwater", "dyed in the wool", "eagle eye", "ear to the ground", "early bird catches the worm", "easier said than done", "easy as pie", "eat your heart out", "eat your words", "eleventh hour", "even the playing field", "every dog has its day", "every fiber of my being", "everything but the kitchen sink", "eye for an eye", "face the music", "facts of life", "fair weather friend", "fall by the wayside", "fan the flames", "feast or famine", "feather your nest", "feathered friends", "few and far between", "fifteen minutes of fame", "filthy vermin", "fine kettle of fish", "fish out of water", "fishing for a compliment", "fit as a fiddle", "fit the bill", "fit to be tied", "flash in the pan", "flat as a pancake", "flip your lid", "flog a dead horse", "fly by night", "fly the coop", "follow your heart", "for all intents and purposes", "for the birds", "for what it's worth", "force of nature", "force to be reckoned with", "forgive and forget", "fox in the henhouse", "free and easy", "free as a bird", "fresh as a daisy", "full steam ahead", "fun in the sun", "garbage in, garbage out", "gentle as a lamb", "get a kick out of", "get a leg up", "get down and dirty", "get the lead out", "get to the bottom of", "get your feet wet", "gets my goat", "gilding the lily", "give and take", "go against the grain", "go at it tooth and nail", "go for broke", "go him one better", "go the extra mile", "go with the flow", "goes without saying", "good as gold", "good deed for the day", "good things come to those who wait", "good time was had by all", "good times were had by all", "greased lightning", "greek to me", "green thumb", "green-eyed monster", "grist for the mill", "growing like a weed", "hair of the dog", "hand to mouth", "happy as a clam", "happy as a lark", "hasn't a clue", "have a nice day", "have high hopes", "have the last laugh", "haven't got a row to hoe", "head honcho", "head over heels", "hear a pin drop", "heard it through the grapevine", "heart's content", "heavy as lead", "hem and haw", "high and dry", "high and mighty", "high as a kite", "hit paydirt", "hold your head up high", "hold your horses", "hold your own", "hold your tongue", "honest as the day is long", "horns of a dilemma", "horse of a different color", "hot under the collar", "hour of need", "I beg to differ", "icing on the cake", "if the shoe fits", "if the shoe were on the other foot", "in a jam", "in a jiffy", "in a nutshell", "in a pig's eye", "in a pinch", "in a word", "in hot water", "in the gutter", "in the nick of time", "in the thick of it", "in your dreams", "it ain't over till the fat lady sings", "it goes without saying", "it takes all kinds", "it takes one to know one", "it's a small world", "it's only a matter of time", "ivory tower", "Jack of all trades", "jockey for position", "jog your memory", "joined at the hip", "judge a book by its cover", "jump down your throat", "jump in with both feet", "jump on the bandwagon", "jump the gun", "jump to conclusions", "just a hop, skip, and a jump", "just the ticket", "justice is blind", "keep a stiff upper lip", "keep an eye on", "keep it simple, stupid", "keep the home fires burning", "keep up with the Joneses", "keep your chin up", "keep your fingers crossed", "kick the bucket", "kick up your heels", "kick your feet up", "kid in a candy store", "kill two birds with one stone", "kiss of death", "knock it out of the park", "knock on wood", "knock your socks off", "know him from Adam", "know the ropes", "know the score", "knuckle down", "knuckle sandwich", "knuckle under", "labor of love", "ladder of success", "land on your feet", "lap of luxury", "last but not least", "last hurrah", "last-ditch effort", "law of the jungle", "law of the land", "lay down the law", "leaps and bounds", "let sleeping dogs lie", "let the cat out of the bag", "let the good times roll", "let your hair down", "let's talk turkey", "letter perfect", "lick your wounds", "lies like a rug", "life's a bitch", "life's a grind", "light at the end of the tunnel", "lighter than a feather", "lighter than air", "like clockwork", "like father like son", "like taking candy from a baby", "like there's no tomorrow", "lion's share", "live and learn", "live and let live", "long and short of it", "long lost love", "look before you leap", "look down your nose", "look what the cat dragged in", "looking a gift horse in the mouth", "looks like death warmed over", "loose cannon", "lose your head", "lose your temper", "loud as a horn", "lounge lizard", "loved and lost", "low man on the totem pole", "luck of the draw", "luck of the Irish", "make hay while the sun shines", "make money hand over fist", "make my day", "make the best of a bad situation", "make the best of it", "make your blood boil", "man of few words", "man's best friend", "mark my words", "meaningful dialogue", "missed the boat on that one", "moment in the sun", "moment of glory", "moment of truth", "money to burn", "more power to you", "more than one way to skin a cat", "movers and shakers", "moving experience", "naked as a jaybird", "naked truth", "neat as a pin", "needle in a haystack", "needless to say", "neither here nor there", "never look back", "never say never", "nip and tuck", "nip it in the bud", "no guts, no glory", "no love lost", "no pain, no gain", "no skin off my back", "no stone unturned", "no time like the present", "no use crying over spilled milk", "nose to the grindstone", "not a hope in hell", "not a minute's peace", "not in my backyard", "not playing with a full deck", "not the end of the world", "not written in stone", "nothing to sneeze at", "nothing ventured nothing gained", "now we're cooking", "off the top of my head", "off the wagon", "off the wall", "old hat", "older and wiser", "older than dirt", "older than Methuselah", "on a roll", "on cloud nine", "on pins and needles", "on the bandwagon", "on the money", "on the nose", "on the rocks", "on the spot", "on the tip of my tongue", "on the wagon", "on thin ice", "once bitten, twice shy", "one bad apple doesn't spoil the bushel", "one born every minute", "one brick short", "one foot in the grave", "one in a million", "one red cent", "only game in town", "open a can of worms", "open and shut case", "open the flood gates", "opportunity doesn't knock twice", "out of pocket", "out of sight, out of mind", "out of the frying pan into the fire", "out of the woods", "out on a limb", "over a barrel", "over the hump", "pain and suffering", "pain in the", "panic button", "par for the course", "part and parcel", "party pooper", "pass the buck", "patience is a virtue", "pay through the nose", "penny pincher", "perfect storm", "pig in a poke", "pile it on", "pillar of the community", "pin your hopes on", "pitter patter of little feet", "plain as day", "plain as the nose on your face", "play by the rules", "play your cards right", "playing the field", "playing with fire", "pleased as punch", "plenty of fish in the sea", "point with pride", "poor as a church mouse", "pot calling the kettle black", "pretty as a picture", "pull a fast one", "pull your punches", "pulling your leg", "pure as the driven snow", "put it in a nutshell", "put one over on you", "put the cart before the horse", "put the pedal to the metal", "put your best foot forward", "put your foot down", "quick as a bunny", "quick as a lick", "quick as a wink", "quick as lightning", "quiet as a dormouse", "rags to riches", "raining buckets", "raining cats and dogs", "rank and file", "rat race", "reap what you sow", "red as a beet", "red herring", "reinvent the wheel", "rich and famous", "rings a bell", "ripe old age", "ripped me off", "rise and shine", "road to hell is paved with good intentions", "rob Peter to pay Paul", "roll over in the grave", "rub the wrong way", "ruled the roost", "running in circles", "sad but true", "sadder but wiser", "salt of the earth", "scared stiff", "scared to death", "sealed with a kiss", "second to none", "see eye to eye", "seen the light", "seize the day", "set the record straight", "set the world on fire", "set your teeth on edge", "sharp as a tack", "shoot for the moon", "shoot the breeze", "shot in the dark", "shoulder to the wheel", "sick as a dog", "sigh of relief", "signed, sealed, and delivered", "sink or swim", "six of one, half a dozen of another", "skating on thin ice", "slept like a log", "slinging mud", "slippery as an eel", "slow as molasses", "smart as a whip", "smooth as a baby's bottom", "sneaking suspicion", "snug as a bug in a rug", "sow wild oats", "spare the rod, spoil the child", "speak of the devil", "spilled the beans", "spinning your wheels", "spitting image of", "spoke with relish", "spread like wildfire", "spring to life", "squeaky wheel gets the grease", "stands out like a sore thumb", "start from scratch", "stick in the mud", "still waters run deep", "stitch in time", "stop and smell the roses", "straight as an arrow", "straw that broke the camel's back", "strong as an ox", "stubborn as a mule", "stuff that dreams are made of", "stuffed shirt", "sweating blood", "sweating bullets", "take a load off", "take one for the team", "take the bait", "take the bull by the horns", "take the plunge", "takes one to know one", "takes two to tango", "the more the merrier", "the real deal", "the real McCoy", "the red carpet treatment", "the same old story", "there is no accounting for taste", "thick as a brick", "thick as thieves", "thin as a rail", "think outside of the box", "third time's the charm", "this day and age", "this hurts me worse than it hurts you", "this point in time", "three sheets to the wind", "through thick and thin", "throw in the towel", "tie one on", "tighter than a drum", "time and time again", "time is of the essence", "tip of the iceberg", "tired but happy", "to coin a phrase", "to each his own", "to make a long story short", "to the best of my knowledge", "toe the line", "tongue in cheek", "too good to be true", "too hot to handle", "too numerous to mention", "touch with a ten foot pole", "tough as nails", "trial and error", "trials and tribulations", "tried and true", "trip down memory lane", "twist of fate", "two cents worth", "two peas in a pod", "ugly as sin", "under the counter", "under the gun", "under the same roof", "under the weather", "until the cows come home", "unvarnished truth", "up the creek", "uphill battle", "upper crust", "upset the applecart", "vain attempt", "vain effort", "vanquish the enemy", "vested interest", "waiting for the other shoe to drop", "wakeup call", "warm welcome", "watch your p's and q's", "watch your tongue", "watching the clock", "water under the bridge", "weather the storm", "weed them out", "week of Sundays", "went belly up", "wet behind the ears", "what goes around comes around", "what you see is what you get", "when it rains, it pours", "when push comes to shove", "when the cat's away", "when the going gets tough, the tough get going", "white as a sheet", "whole ball of wax", "whole hog", "whole nine yards", "wild goose chase", "will wonders never cease?", "wisdom of the ages", "wise as an owl", "wolf at the door", "words fail me", "work like a dog", "world weary", "worst nightmare", "worth its weight in gold", "wrong side of the bed", "yanking your chain", "yappy as a dog", "years young", "you are what you eat", "you can run but you can't hide", "you only live once", "you're the boss ", "young and foolish", "young and vibrant" ];
  var i = new RegExp("\\b(" + r.join("|") + ")\\b", "gi");
  var o = n("WaBv");
  e.exports = function(e) {
   return o(i, e, "clichés");
  };
 },
 D3zA: function(e, t, n) {
  "use strict";
  var r = n("aI7X");
  e.exports = Function.prototype.bind || r;
 },
 FpZJ: function(e, t, n) {
  "use strict";
  e.exports = function e() {
   if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
    return false;
   }
   if (typeof Symbol.iterator === "symbol") {
    return true;
   }
   var t = {};
   var n = Symbol("test");
   var r = Object(n);
   if (typeof n === "string") {
    return false;
   }
   if (Object.prototype.toString.call(n) !== "[object Symbol]") {
    return false;
   }
   if (Object.prototype.toString.call(r) !== "[object Symbol]") {
    return false;
   }
   var i = 42;
   t[n] = i;
   for (n in t) {
    return false;
   }
   if (typeof Object.keys === "function" && Object.keys(t).length !== 0) {
    return false;
   }
   if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(t).length !== 0) {
    return false;
   }
   var o = Object.getOwnPropertySymbols(t);
   if (o.length !== 1 || o[0] !== n) {
    return false;
   }
   if (!Object.prototype.propertyIsEnumerable.call(t, n)) {
    return false;
   }
   if (typeof Object.getOwnPropertyDescriptor === "function") {
    var a = Object.getOwnPropertyDescriptor(t, n);
    if (a.value !== i || a.enumerable !== true) {
     return false;
    }
   }
   return true;
  };
 },
 FufO: function(e, t, n) {
  "use strict";
  var r = n("1seS");
  var i = n("D3zA");
  var o = function(e) {
   return typeof e !== "undefined" && e !== null;
  };
  var a = n("FpZJ")();
  var s = Object;
  var u = i.call(Function.call, Array.prototype.push);
  var c = i.call(Function.call, Object.prototype.propertyIsEnumerable);
  var l = a ? Object.getOwnPropertySymbols : null;
  e.exports = function e(t, n) {
   if (!o(t)) {
    throw new TypeError("target must be an object");
   }
   var i = s(t);
   var f, d, h, p, g, m, v;
   for (f = 1; f < arguments.length; ++f) {
    d = s(arguments[f]);
    p = r(d);
    var y = a && (Object.getOwnPropertySymbols || l);
    if (y) {
     g = y(d);
     for (h = 0; h < g.length; ++h) {
      v = g[h];
      if (c(d, v)) {
       u(p, v);
      }
     }
    }
    for (h = 0; h < p.length; ++h) {
     v = p[h];
     m = d[v];
     if (c(d, v)) {
      i[v] = m;
     }
    }
   }
   return i;
  };
 },
 "Gr+f": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  class r {
   constructor(e) {
    this._value = e;
   }
   asHex() {
    return this._value;
   }
   equals(e) {
    return this.asHex() === e.asHex();
   }
  }
  class i extends r {
   constructor() {
    super([ i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), "-", i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), "-", "4", i._randomHex(), i._randomHex(), i._randomHex(), "-", i._oneOf(i._timeHighBits), i._randomHex(), i._randomHex(), i._randomHex(), "-", i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex(), i._randomHex() ].join(""));
   }
   static _oneOf(e) {
    return e[Math.floor(e.length * Math.random())];
   }
   static _randomHex() {
    return i._oneOf(i._chars);
   }
  }
  i._chars = [ "0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f" ];
  i._timeHighBits = [ "8", "9", "a", "b" ];
  t.empty = new r("00000000-0000-0000-0000-000000000000");
  function o() {
   return new i();
  }
  t.v4 = o;
  const a = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function s(e) {
   return a.test(e);
  }
  t.isUUID = s;
  function u(e) {
   if (!s(e)) {
    throw new Error("invalid uuid");
   }
   return new r(e);
  }
  t.parse = u;
  function c() {
   return o().asHex();
  }
  t.generateUuid = c;
 },
 JU0j: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("NVm0");
  var i;
  (function(e) {
   e.type = new r.RequestType0("workspace/workspaceFolders");
  })(i = t.WorkspaceFoldersRequest || (t.WorkspaceFoldersRequest = {}));
  var o;
  (function(e) {
   e.type = new r.NotificationType("workspace/didChangeWorkspaceFolders");
  })(o = t.DidChangeWorkspaceFoldersNotification || (t.DidChangeWorkspaceFoldersNotification = {}));
 },
 "Koq/": function(e, t, n) {
  "use strict";
  var r = n("82c2");
  var i = n("FufO");
  var o = n("yLpt");
  var a = n("8R9v");
  var s = o();
  r(s, {
   getPolyfill: o,
   implementation: i,
   shim: a
  });
  e.exports = s;
 },
 M7Cy: function(e, t) {
  var n = function(e, t, n) {
   var r = [];
   while (result = e.exec(t)) {
    r.push({
     index: result.index,
     offset: result[0].length
    });
   }
   return r;
  };
  e.exports = n;
 },
 NVm0: function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  function i(e) {
   for (var n in e) if (!t.hasOwnProperty(n)) t[n] = e[n];
  }
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var o = n("cBZp");
  var a = n("fTep");
  t.RequestType = a.RequestType;
  t.RequestType0 = a.RequestType0;
  t.RequestType1 = a.RequestType1;
  t.RequestType2 = a.RequestType2;
  t.RequestType3 = a.RequestType3;
  t.RequestType4 = a.RequestType4;
  t.RequestType5 = a.RequestType5;
  t.RequestType6 = a.RequestType6;
  t.RequestType7 = a.RequestType7;
  t.RequestType8 = a.RequestType8;
  t.RequestType9 = a.RequestType9;
  t.ResponseError = a.ResponseError;
  t.ErrorCodes = a.ErrorCodes;
  t.NotificationType = a.NotificationType;
  t.NotificationType0 = a.NotificationType0;
  t.NotificationType1 = a.NotificationType1;
  t.NotificationType2 = a.NotificationType2;
  t.NotificationType3 = a.NotificationType3;
  t.NotificationType4 = a.NotificationType4;
  t.NotificationType5 = a.NotificationType5;
  t.NotificationType6 = a.NotificationType6;
  t.NotificationType7 = a.NotificationType7;
  t.NotificationType8 = a.NotificationType8;
  t.NotificationType9 = a.NotificationType9;
  var s = n("eNxj");
  t.MessageReader = s.MessageReader;
  t.StreamMessageReader = s.StreamMessageReader;
  t.IPCMessageReader = s.IPCMessageReader;
  t.SocketMessageReader = s.SocketMessageReader;
  var u = n("/g5D");
  t.MessageWriter = u.MessageWriter;
  t.StreamMessageWriter = u.StreamMessageWriter;
  t.IPCMessageWriter = u.IPCMessageWriter;
  t.SocketMessageWriter = u.SocketMessageWriter;
  var c = n("ZH/z");
  t.Disposable = c.Disposable;
  t.Event = c.Event;
  t.Emitter = c.Emitter;
  var l = n("avou");
  t.CancellationTokenSource = l.CancellationTokenSource;
  t.CancellationToken = l.CancellationToken;
  var f = n("tAAh");
  i(n("6+Hu"));
  i(n("7wSx"));
  var d;
  (function(e) {
   e.type = new a.NotificationType("$/cancelRequest");
  })(d || (d = {}));
  t.NullLogger = Object.freeze({
   error: function() {},
   warn: function() {},
   info: function() {},
   log: function() {}
  });
  var h;
  (function(e) {
   e[e["Off"] = 0] = "Off";
   e[e["Messages"] = 1] = "Messages";
   e[e["Verbose"] = 2] = "Verbose";
  })(h = t.Trace || (t.Trace = {}));
  (function(e) {
   function t(t) {
    t = t.toLowerCase();
    switch (t) {
    case "off":
     return e.Off;

    case "messages":
     return e.Messages;

    case "verbose":
     return e.Verbose;

    default:
     return e.Off;
    }
   }
   e.fromString = t;
   function n(t) {
    switch (t) {
    case e.Off:
     return "off";

    case e.Messages:
     return "messages";

    case e.Verbose:
     return "verbose";

    default:
     return "off";
    }
   }
   e.toString = n;
  })(h = t.Trace || (t.Trace = {}));
  var p;
  (function(e) {
   e.type = new a.NotificationType("$/setTraceNotification");
  })(p = t.SetTraceNotification || (t.SetTraceNotification = {}));
  var g;
  (function(e) {
   e.type = new a.NotificationType("$/logTraceNotification");
  })(g = t.LogTraceNotification || (t.LogTraceNotification = {}));
  var m;
  (function(e) {
   e[e["Closed"] = 1] = "Closed";
   e[e["Disposed"] = 2] = "Disposed";
   e[e["AlreadyListening"] = 3] = "AlreadyListening";
  })(m = t.ConnectionErrors || (t.ConnectionErrors = {}));
  var v = function(e) {
   r(t, e);
   function t(n, r) {
    var i = e.call(this, r) || this;
    i.code = n;
    Object.setPrototypeOf(i, t.prototype);
    return i;
   }
   return t;
  }(Error);
  t.ConnectionError = v;
  var y;
  (function(e) {
   function t(e) {
    var t = e;
    return t && o.func(t.cancelUndispatched);
   }
   e.is = t;
  })(y = t.ConnectionStrategy || (t.ConnectionStrategy = {}));
  var b;
  (function(e) {
   e[e["New"] = 1] = "New";
   e[e["Listening"] = 2] = "Listening";
   e[e["Closed"] = 3] = "Closed";
   e[e["Disposed"] = 4] = "Disposed";
  })(b || (b = {}));
  function w(e, t, n, r) {
   var i = 0;
   var s = 0;
   var u = 0;
   var y = "2.0";
   var w = undefined;
   var k = Object.create(null);
   var _ = undefined;
   var x = Object.create(null);
   var R;
   var C = new f.LinkedMap();
   var T = Object.create(null);
   var E = Object.create(null);
   var S = h.Off;
   var q;
   var O = b.New;
   var D = new c.Emitter();
   var j = new c.Emitter();
   var N = new c.Emitter();
   var M = new c.Emitter();
   function P(e) {
    return "req-" + e.toString();
   }
   function I(e) {
    if (e === null) {
     return "res-unknown-" + (++u).toString();
    } else {
     return "res-" + e.toString();
    }
   }
   function W() {
    return "not-" + (++s).toString();
   }
   function F(e, t) {
    if (a.isRequestMessage(t)) {
     e.set(P(t.id), t);
    } else if (a.isResponseMessage(t)) {
     e.set(I(t.id), t);
    } else {
     e.set(W(), t);
    }
   }
   function L(e) {
    return undefined;
   }
   function A() {
    return O === b.Listening;
   }
   function H() {
    return O === b.Closed;
   }
   function z() {
    return O === b.Disposed;
   }
   function U() {
    if (O === b.New || O === b.Listening) {
     O = b.Closed;
     j.fire(undefined);
    }
   }
   function $(e) {
    D.fire([ e, undefined, undefined ]);
   }
   function B(e) {
    D.fire(e);
   }
   e.onClose(U);
   e.onError($);
   t.onClose(U);
   t.onError(B);
   function K() {
    if (R || C.size === 0) {
     return;
    }
    R = setImmediate(function() {
     R = undefined;
     V();
    });
   }
   function V() {
    if (C.size === 0) {
     return;
    }
    var e = C.shift();
    try {
     if (a.isRequestMessage(e)) {
      Z(e);
     } else if (a.isNotificationMessage(e)) {
      X(e);
     } else if (a.isResponseMessage(e)) {
      G(e);
     } else {
      Q(e);
     }
    } finally {
     K();
    }
   }
   var J = function(e) {
    try {
     if (a.isNotificationMessage(e) && e.method === d.type.method) {
      var n = P(e.params.id);
      var i = C.get(n);
      if (a.isRequestMessage(i)) {
       var o = r && r.cancelUndispatched ? r.cancelUndispatched(i, L) : L(i);
       if (o && (o.error !== void 0 || o.result !== void 0)) {
        C.delete(n);
        o.id = i.id;
        te(o, e.method, Date.now());
        t.write(o);
        return;
       }
      }
     }
     F(C, e);
    } finally {
     K();
    }
   };
   function Z(e) {
    if (z()) {
     return;
    }
    function n(n, r, i) {
     var o = {
      jsonrpc: y,
      id: e.id
     };
     if (n instanceof a.ResponseError) {
      o.error = n.toJson();
     } else {
      o.result = n === void 0 ? null : n;
     }
     te(o, r, i);
     t.write(o);
    }
    function r(n, r, i) {
     var o = {
      jsonrpc: y,
      id: e.id,
      error: n.toJson()
     };
     te(o, r, i);
     t.write(o);
    }
    function i(n, r, i) {
     if (n === void 0) {
      n = null;
     }
     var o = {
      jsonrpc: y,
      id: e.id,
      result: n
     };
     te(o, r, i);
     t.write(o);
    }
    ne(e);
    var s = k[e.method];
    var u;
    var c;
    if (s) {
     u = s.type;
     c = s.handler;
    }
    var f = Date.now();
    if (c || w) {
     var d = new l.CancellationTokenSource();
     var h = String(e.id);
     E[h] = d;
     try {
      var p = void 0;
      if (e.params === void 0 || u !== void 0 && u.numberOfParams === 0) {
       p = c ? c(d.token) : w(e.method, d.token);
      } else if (o.array(e.params) && (u === void 0 || u.numberOfParams > 1)) {
       p = c ? c.apply(void 0, e.params.concat([ d.token ])) : w.apply(void 0, [ e.method ].concat(e.params, [ d.token ]));
      } else {
       p = c ? c(e.params, d.token) : w(e.method, e.params, d.token);
      }
      var g = p;
      if (!p) {
       delete E[h];
       i(p, e.method, f);
      } else if (g.then) {
       g.then(function(t) {
        delete E[h];
        n(t, e.method, f);
       }, function(t) {
        delete E[h];
        if (t instanceof a.ResponseError) {
         r(t, e.method, f);
        } else if (t && o.string(t.message)) {
         r(new a.ResponseError(a.ErrorCodes.InternalError, "Request " + e.method + " failed with message: " + t.message), e.method, f);
        } else {
         r(new a.ResponseError(a.ErrorCodes.InternalError, "Request " + e.method + " failed unexpectedly without providing any details."), e.method, f);
        }
       });
      } else {
       delete E[h];
       n(p, e.method, f);
      }
     } catch (t) {
      delete E[h];
      if (t instanceof a.ResponseError) {
       n(t, e.method, f);
      } else if (t && o.string(t.message)) {
       r(new a.ResponseError(a.ErrorCodes.InternalError, "Request " + e.method + " failed with message: " + t.message), e.method, f);
      } else {
       r(new a.ResponseError(a.ErrorCodes.InternalError, "Request " + e.method + " failed unexpectedly without providing any details."), e.method, f);
      }
     }
    } else {
     r(new a.ResponseError(a.ErrorCodes.MethodNotFound, "Unhandled method " + e.method), e.method, f);
    }
   }
   function G(e) {
    if (z()) {
     return;
    }
    if (e.id === null) {
     if (e.error) {
      n.error("Received response message without id: Error is: \n" + JSON.stringify(e.error, undefined, 4));
     } else {
      n.error("Received response message without id. No further error information provided.");
     }
    } else {
     var t = String(e.id);
     var r = T[t];
     ie(e, r);
     if (r) {
      delete T[t];
      try {
       if (e.error) {
        var i = e.error;
        r.reject(new a.ResponseError(i.code, i.message, i.data));
       } else if (e.result !== void 0) {
        r.resolve(e.result);
       } else {
        throw new Error("Should never happen.");
       }
      } catch (i) {
       if (i.message) {
        n.error("Response handler '" + r.method + "' failed with message: " + i.message);
       } else {
        n.error("Response handler '" + r.method + "' failed unexpectedly.");
       }
      }
     }
    }
   }
   function X(e) {
    if (z()) {
     return;
    }
    var t = undefined;
    var r;
    if (e.method === d.type.method) {
     r = function(e) {
      var t = e.id;
      var n = E[String(t)];
      if (n) {
       n.cancel();
      }
     };
    } else {
     var i = x[e.method];
     if (i) {
      r = i.handler;
      t = i.type;
     }
    }
    if (r || _) {
     try {
      re(e);
      if (e.params === void 0 || t !== void 0 && t.numberOfParams === 0) {
       r ? r() : _(e.method);
      } else if (o.array(e.params) && (t === void 0 || t.numberOfParams > 1)) {
       r ? r.apply(void 0, e.params) : _.apply(void 0, [ e.method ].concat(e.params));
      } else {
       r ? r(e.params) : _(e.method, e.params);
      }
     } catch (t) {
      if (t.message) {
       n.error("Notification handler '" + e.method + "' failed with message: " + t.message);
      } else {
       n.error("Notification handler '" + e.method + "' failed unexpectedly.");
      }
     }
    } else {
     N.fire(e);
    }
   }
   function Q(e) {
    if (!e) {
     n.error("Received empty message.");
     return;
    }
    n.error("Received message which is neither a response nor a notification message:\n" + JSON.stringify(e, null, 4));
    var t = e;
    if (o.string(t.id) || o.number(t.id)) {
     var r = String(t.id);
     var i = T[r];
     if (i) {
      i.reject(new Error("The received response has neither a result nor an error property."));
     }
    }
   }
   function Y(e) {
    if (S === h.Off || !q) {
     return;
    }
    var t = undefined;
    if (S === h.Verbose && e.params) {
     t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
    }
    q.log("Sending request '" + e.method + " - (" + e.id + ")'.", t);
   }
   function ee(e) {
    if (S === h.Off || !q) {
     return;
    }
    var t = undefined;
    if (S === h.Verbose) {
     if (e.params) {
      t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
     } else {
      t = "No parameters provided.\n\n";
     }
    }
    q.log("Sending notification '" + e.method + "'.", t);
   }
   function te(e, t, n) {
    if (S === h.Off || !q) {
     return;
    }
    var r = undefined;
    if (S === h.Verbose) {
     if (e.error && e.error.data) {
      r = "Error data: " + JSON.stringify(e.error.data, null, 4) + "\n\n";
     } else {
      if (e.result) {
       r = "Result: " + JSON.stringify(e.result, null, 4) + "\n\n";
      } else if (e.error === void 0) {
       r = "No result returned.\n\n";
      }
     }
    }
    q.log("Sending response '" + t + " - (" + e.id + ")'. Processing request took " + (Date.now() - n) + "ms", r);
   }
   function ne(e) {
    if (S === h.Off || !q) {
     return;
    }
    var t = undefined;
    if (S === h.Verbose && e.params) {
     t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
    }
    q.log("Received request '" + e.method + " - (" + e.id + ")'.", t);
   }
   function re(e) {
    if (S === h.Off || !q || e.method === g.type.method) {
     return;
    }
    var t = undefined;
    if (S === h.Verbose) {
     if (e.params) {
      t = "Params: " + JSON.stringify(e.params, null, 4) + "\n\n";
     } else {
      t = "No parameters provided.\n\n";
     }
    }
    q.log("Received notification '" + e.method + "'.", t);
   }
   function ie(e, t) {
    if (S === h.Off || !q) {
     return;
    }
    var n = undefined;
    if (S === h.Verbose) {
     if (e.error && e.error.data) {
      n = "Error data: " + JSON.stringify(e.error.data, null, 4) + "\n\n";
     } else {
      if (e.result) {
       n = "Result: " + JSON.stringify(e.result, null, 4) + "\n\n";
      } else if (e.error === void 0) {
       n = "No result returned.\n\n";
      }
     }
    }
    if (t) {
     var r = e.error ? " Request failed: " + e.error.message + " (" + e.error.code + ")." : "";
     q.log("Received response '" + t.method + " - (" + e.id + ")' in " + (Date.now() - t.timerStart) + "ms." + r, n);
    } else {
     q.log("Received response " + e.id + " without active response promise.", n);
    }
   }
   function oe() {
    if (H()) {
     throw new v(m.Closed, "Connection is closed.");
    }
    if (z()) {
     throw new v(m.Disposed, "Connection is disposed.");
    }
   }
   function ae() {
    if (A()) {
     throw new v(m.AlreadyListening, "Connection is already listening");
    }
   }
   function se() {
    if (!A()) {
     throw new Error("Call listen() first.");
    }
   }
   function ue(e) {
    if (e === void 0) {
     return null;
    } else {
     return e;
    }
   }
   function ce(e, t) {
    var n;
    var r = e.numberOfParams;
    switch (r) {
    case 0:
     n = null;
     break;

    case 1:
     n = ue(t[0]);
     break;

    default:
     n = [];
     for (var i = 0; i < t.length && i < r; i++) {
      n.push(ue(t[i]));
     }
     if (t.length < r) {
      for (var i = t.length; i < r; i++) {
       n.push(null);
      }
     }
     break;
    }
    return n;
   }
   var le = {
    sendNotification: function(e) {
     var n = [];
     for (var r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
     }
     oe();
     var i;
     var a;
     if (o.string(e)) {
      i = e;
      switch (n.length) {
      case 0:
       a = null;
       break;

      case 1:
       a = n[0];
       break;

      default:
       a = n;
       break;
      }
     } else {
      i = e.method;
      a = ce(e, n);
     }
     var s = {
      jsonrpc: y,
      method: i,
      params: a
     };
     ee(s);
     t.write(s);
    },
    onNotification: function(e, t) {
     oe();
     if (o.func(e)) {
      _ = e;
     } else if (t) {
      if (o.string(e)) {
       x[e] = {
        type: undefined,
        handler: t
       };
      } else {
       x[e.method] = {
        type: e,
        handler: t
       };
      }
     }
    },
    sendRequest: function(e) {
     var n = [];
     for (var r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
     }
     oe();
     se();
     var s;
     var u;
     var c = undefined;
     if (o.string(e)) {
      s = e;
      switch (n.length) {
      case 0:
       u = null;
       break;

      case 1:
       if (l.CancellationToken.is(n[0])) {
        u = null;
        c = n[0];
       } else {
        u = ue(n[0]);
       }
       break;

      default:
       var f = n.length - 1;
       if (l.CancellationToken.is(n[f])) {
        c = n[f];
        if (n.length === 2) {
         u = ue(n[0]);
        } else {
         u = n.slice(0, f).map(function(e) {
          return ue(e);
         });
        }
       } else {
        u = n.map(function(e) {
         return ue(e);
        });
       }
       break;
      }
     } else {
      s = e.method;
      u = ce(e, n);
      var h = e.numberOfParams;
      c = l.CancellationToken.is(n[h]) ? n[h] : undefined;
     }
     var p = i++;
     var g = new Promise(function(e, n) {
      var r = {
       jsonrpc: y,
       id: p,
       method: s,
       params: u
      };
      var i = {
       method: s,
       timerStart: Date.now(),
       resolve: e,
       reject: n
      };
      Y(r);
      try {
       t.write(r);
      } catch (e) {
       i.reject(new a.ResponseError(a.ErrorCodes.MessageWriteError, e.message ? e.message : "Unknown reason"));
       i = null;
      }
      if (i) {
       T[String(p)] = i;
      }
     });
     if (c) {
      c.onCancellationRequested(function() {
       le.sendNotification(d.type, {
        id: p
       });
      });
     }
     return g;
    },
    onRequest: function(e, t) {
     oe();
     if (o.func(e)) {
      w = e;
     } else if (t) {
      if (o.string(e)) {
       k[e] = {
        type: undefined,
        handler: t
       };
      } else {
       k[e.method] = {
        type: e,
        handler: t
       };
      }
     }
    },
    trace: function(e, t, n) {
     if (n === void 0) {
      n = false;
     }
     S = e;
     if (S === h.Off) {
      q = undefined;
     } else {
      q = t;
     }
     if (n && !H() && !z()) {
      le.sendNotification(p.type, {
       value: h.toString(e)
      });
     }
    },
    onError: D.event,
    onClose: j.event,
    onUnhandledNotification: N.event,
    onDispose: M.event,
    dispose: function() {
     if (z()) {
      return;
     }
     O = b.Disposed;
     M.fire(undefined);
     var n = new Error("Connection got disposed.");
     Object.keys(T).forEach(function(e) {
      T[e].reject(n);
     });
     T = Object.create(null);
     E = Object.create(null);
     C = new f.LinkedMap();
     if (o.func(t.dispose)) {
      t.dispose();
     }
     if (o.func(e.dispose)) {
      e.dispose();
     }
    },
    listen: function() {
     oe();
     ae();
     O = b.Listening;
     e.listen(J);
    },
    inspect: function() {
     console.log("inspect");
    }
   };
   le.onNotification(g.type, function(e) {
    if (S === h.Off || !q) {
     return;
    }
    q.log(e.message, S === h.Verbose ? e.verbose : undefined);
   });
   return le;
  }
  function k(e) {
   return e.listen !== void 0 && e.read === void 0;
  }
  function _(e) {
   return e.write !== void 0 && e.end === void 0;
  }
  function x(e, n, r, i) {
   if (!r) {
    r = t.NullLogger;
   }
   var o = k(e) ? e : new s.StreamMessageReader(e);
   var a = _(n) ? n : new u.StreamMessageWriter(n);
   return w(o, a, r, i);
  }
  t.createMessageConnection = x;
 },
 PJMN: function(e, t) {
  e.exports = require("crypto");
 },
 QduZ: function(e, t) {
  e.exports = require("child_process");
 },
 Qs2e: function(e, t) {
  e.exports = require("net");
 },
 RWtI: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = Object.prototype.toString;
  function i(e) {
   return typeof e !== "undefined";
  }
  t.defined = i;
  function o(e) {
   return typeof e === "undefined";
  }
  t.undefined = o;
  function a(e) {
   return e === null;
  }
  t.nil = a;
  function s(e) {
   return e === true || e === false;
  }
  t.boolean = s;
  function u(e) {
   return r.call(e) === "[object String]";
  }
  t.string = u;
  function c(e) {
   return r.call(e) === "[object Number]";
  }
  t.number = c;
  function l(e) {
   return r.call(e) === "[object Error]";
  }
  t.error = l;
  function f(e) {
   return r.call(e) === "[object Function]";
  }
  t.func = f;
  function d(e) {
   return Array.isArray(e);
  }
  t.array = d;
  function h(e) {
   return d(e) && e.every(e => u(e));
  }
  t.stringArray = h;
  function p(e, t) {
   return Array.isArray(e) && e.every(t);
  }
  t.typedArray = p;
  function g(e) {
   return e && f(e.then);
  }
  t.thenable = g;
 },
 Va2M: function(e, t) {
  var n = [ "am", "are", "aren't", "be", "been", "being", "he's", "here's", "here's", "how's", "i'm", "is", "isn't", "she's", "that's", "there's", "they're", "was", "wasn't", "we're", "were", "weren't", "what's", "where's", "who's", "you're" ];
  var r = new RegExp("\\b(" + n.join("|") + ")\\b", "gi");
  e.exports = function(e) {
   var t = [];
   if (!e || e.length === 0) return t;
   e = e.replace(/[\u2018\u2019]/g, "'");
   while (match = r.exec(e)) {
    var n = match[0].toLowerCase();
    t.push({
     index: match.index,
     offset: n.length
    });
   }
   return t;
  };
 },
 WaBv: function(e, t) {
  var n = function(e, t, n) {
   var r = [];
   while (result = e.exec(t)) {
    r.push({
     index: result.index,
     offset: result[0].length
    });
   }
   return r;
  };
  e.exports = n;
 },
 WfeI: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = Object.prototype.toString;
  function i(e) {
   return e === true || e === false;
  }
  t.boolean = i;
  function o(e) {
   return r.call(e) === "[object String]";
  }
  t.string = o;
  function a(e) {
   return r.call(e) === "[object Number]";
  }
  t.number = a;
  function s(e) {
   return r.call(e) === "[object Error]";
  }
  t.error = s;
  function u(e) {
   return r.call(e) === "[object Function]";
  }
  t.func = u;
  function c(e) {
   return Array.isArray(e);
  }
  t.array = c;
  function l(e) {
   return c(e) && e.every(e => o(e));
  }
  t.stringArray = l;
  function f(e, t) {
   return Array.isArray(e) && e.every(t);
  }
  t.typedArray = f;
  function d(e) {
   return e && u(e.then);
  }
  t.thenable = d;
 },
 Xhok: function(e, t) {
  function n(e) {
   return require(e);
  }
  n.keys = function() {
   return [];
  };
  n.resolve = require.resolve;
  e.exports = n;
  n.id = "Xhok";
 },
 "ZH/z": function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r;
  (function(e) {
   function t(e) {
    return {
     dispose: e
    };
   }
   e.create = t;
  })(r = t.Disposable || (t.Disposable = {}));
  var i;
  (function(e) {
   var t = {
    dispose: function() {}
   };
   e.None = function() {
    return t;
   };
  })(i = t.Event || (t.Event = {}));
  var o = function() {
   function e() {}
   e.prototype.add = function(e, t, n) {
    var r = this;
    if (t === void 0) {
     t = null;
    }
    if (!this._callbacks) {
     this._callbacks = [];
     this._contexts = [];
    }
    this._callbacks.push(e);
    this._contexts.push(t);
    if (Array.isArray(n)) {
     n.push({
      dispose: function() {
       return r.remove(e, t);
      }
     });
    }
   };
   e.prototype.remove = function(e, t) {
    if (t === void 0) {
     t = null;
    }
    if (!this._callbacks) {
     return;
    }
    var n = false;
    for (var r = 0, i = this._callbacks.length; r < i; r++) {
     if (this._callbacks[r] === e) {
      if (this._contexts[r] === t) {
       this._callbacks.splice(r, 1);
       this._contexts.splice(r, 1);
       return;
      } else {
       n = true;
      }
     }
    }
    if (n) {
     throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
   };
   e.prototype.invoke = function() {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
     e[t] = arguments[t];
    }
    if (!this._callbacks) {
     return [];
    }
    var n = [], r = this._callbacks.slice(0), i = this._contexts.slice(0);
    for (var o = 0, a = r.length; o < a; o++) {
     try {
      n.push(r[o].apply(i[o], e));
     } catch (e) {
      console.error(e);
     }
    }
    return n;
   };
   e.prototype.isEmpty = function() {
    return !this._callbacks || this._callbacks.length === 0;
   };
   e.prototype.dispose = function() {
    this._callbacks = undefined;
    this._contexts = undefined;
   };
   return e;
  }();
  var a = function() {
   function e(e) {
    this._options = e;
   }
   Object.defineProperty(e.prototype, "event", {
    get: function() {
     var t = this;
     if (!this._event) {
      this._event = function(n, r, i) {
       if (!t._callbacks) {
        t._callbacks = new o();
       }
       if (t._options && t._options.onFirstListenerAdd && t._callbacks.isEmpty()) {
        t._options.onFirstListenerAdd(t);
       }
       t._callbacks.add(n, r);
       var a;
       a = {
        dispose: function() {
         t._callbacks.remove(n, r);
         a.dispose = e._noop;
         if (t._options && t._options.onLastListenerRemove && t._callbacks.isEmpty()) {
          t._options.onLastListenerRemove(t);
         }
        }
       };
       if (Array.isArray(i)) {
        i.push(a);
       }
       return a;
      };
     }
     return this._event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fire = function(e) {
    if (this._callbacks) {
     this._callbacks.invoke.call(this._callbacks, e);
    }
   };
   e.prototype.dispose = function() {
    if (this._callbacks) {
     this._callbacks.dispose();
     this._callbacks = undefined;
    }
   };
   e._noop = function() {};
   return e;
  }();
  t.Emitter = a;
 },
 aI7X: function(e, t, n) {
  "use strict";
  var r = "Function.prototype.bind called on incompatible ";
  var i = Array.prototype.slice;
  var o = Object.prototype.toString;
  var a = "[object Function]";
  e.exports = function e(t) {
   var n = this;
   if (typeof n !== "function" || o.call(n) !== a) {
    throw new TypeError(r + n);
   }
   var s = i.call(arguments, 1);
   var u;
   var c = function() {
    if (this instanceof u) {
     var e = n.apply(this, s.concat(i.call(arguments)));
     if (Object(e) === e) {
      return e;
     }
     return this;
    } else {
     return n.apply(t, s.concat(i.call(arguments)));
    }
   };
   var l = Math.max(0, n.length - s.length);
   var f = [];
   for (var d = 0; d < l; d++) {
    f.push("$" + d);
   }
   u = Function("binder", "return function (" + f.join(",") + "){ return binder.apply(this,arguments); }")(c);
   if (n.prototype) {
    var h = function e() {};
    h.prototype = n.prototype;
    u.prototype = new h();
    h.prototype = null;
   }
   return u;
  };
 },
 avou: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = n("ZH/z");
  var i = n("cBZp");
  var o;
  (function(e) {
   e.None = Object.freeze({
    isCancellationRequested: false,
    onCancellationRequested: r.Event.None
   });
   e.Cancelled = Object.freeze({
    isCancellationRequested: true,
    onCancellationRequested: r.Event.None
   });
   function t(t) {
    var n = t;
    return n && (n === e.None || n === e.Cancelled || i.boolean(n.isCancellationRequested) && !!n.onCancellationRequested);
   }
   e.is = t;
  })(o = t.CancellationToken || (t.CancellationToken = {}));
  var a = Object.freeze(function(e, t) {
   var n = setTimeout(e.bind(t), 0);
   return {
    dispose: function() {
     clearTimeout(n);
    }
   };
  });
  var s = function() {
   function e() {
    this._isCancelled = false;
   }
   e.prototype.cancel = function() {
    if (!this._isCancelled) {
     this._isCancelled = true;
     if (this._emitter) {
      this._emitter.fire(undefined);
      this._emitter = undefined;
     }
    }
   };
   Object.defineProperty(e.prototype, "isCancellationRequested", {
    get: function() {
     return this._isCancelled;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "onCancellationRequested", {
    get: function() {
     if (this._isCancelled) {
      return a;
     }
     if (!this._emitter) {
      this._emitter = new r.Emitter();
     }
     return this._emitter.event;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var u = function() {
   function e() {}
   Object.defineProperty(e.prototype, "token", {
    get: function() {
     if (!this._token) {
      this._token = new s();
     }
     return this._token;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.cancel = function() {
    if (!this._token) {
     this._token = o.Cancelled;
    } else {
     this._token.cancel();
    }
   };
   e.prototype.dispose = function() {
    this.cancel();
   };
   return e;
  }();
  t.CancellationTokenSource = u;
 },
 bzos: function(e, t) {
  e.exports = require("url");
 },
 cBZp: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r = Object.prototype.toString;
  function i(e) {
   return e === true || e === false;
  }
  t.boolean = i;
  function o(e) {
   return r.call(e) === "[object String]";
  }
  t.string = o;
  function a(e) {
   return r.call(e) === "[object Number]";
  }
  t.number = a;
  function s(e) {
   return r.call(e) === "[object Error]";
  }
  t.error = s;
  function u(e) {
   return r.call(e) === "[object Function]";
  }
  t.func = u;
  function c(e) {
   return Array.isArray(e);
  }
  t.array = c;
  function l(e) {
   return c(e) && e.every(function(e) {
    return o(e);
   });
  }
  t.stringArray = l;
 },
 dBsl: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("WfeI");
  const i = n("NVm0");
  var o;
  (function(e) {
   function t(e) {
    let t = e;
    return r.string(t.language) || r.string(t.scheme) || r.string(t.pattern);
   }
   e.is = t;
  })(o = t.DocumentFilter || (t.DocumentFilter = {}));
  var a;
  (function(e) {
   e.type = new i.RequestType("client/registerCapability");
  })(a = t.RegistrationRequest || (t.RegistrationRequest = {}));
  var s;
  (function(e) {
   e.type = new i.RequestType("client/unregisterCapability");
  })(s = t.UnregistrationRequest || (t.UnregistrationRequest = {}));
  var u;
  (function(e) {
   e.None = 0;
   e.Full = 1;
   e.Incremental = 2;
  })(u = t.TextDocumentSyncKind || (t.TextDocumentSyncKind = {}));
  var c;
  (function(e) {
   e.type = new i.RequestType("initialize");
  })(c = t.InitializeRequest || (t.InitializeRequest = {}));
  var l;
  (function(e) {
   e.unknownProtocolVersion = 1;
  })(l = t.InitializeError || (t.InitializeError = {}));
  var f;
  (function(e) {
   e.type = new i.NotificationType("initialized");
  })(f = t.InitializedNotification || (t.InitializedNotification = {}));
  var d;
  (function(e) {
   e.type = new i.RequestType0("shutdown");
  })(d = t.ShutdownRequest || (t.ShutdownRequest = {}));
  var h;
  (function(e) {
   e.type = new i.NotificationType0("exit");
  })(h = t.ExitNotification || (t.ExitNotification = {}));
  var p;
  (function(e) {
   e.type = new i.NotificationType("workspace/didChangeConfiguration");
  })(p = t.DidChangeConfigurationNotification || (t.DidChangeConfigurationNotification = {}));
  var g;
  (function(e) {
   e.Error = 1;
   e.Warning = 2;
   e.Info = 3;
   e.Log = 4;
  })(g = t.MessageType || (t.MessageType = {}));
  var m;
  (function(e) {
   e.type = new i.NotificationType("window/showMessage");
  })(m = t.ShowMessageNotification || (t.ShowMessageNotification = {}));
  var v;
  (function(e) {
   e.type = new i.RequestType("window/showMessageRequest");
  })(v = t.ShowMessageRequest || (t.ShowMessageRequest = {}));
  var y;
  (function(e) {
   e.type = new i.NotificationType("window/logMessage");
  })(y = t.LogMessageNotification || (t.LogMessageNotification = {}));
  var b;
  (function(e) {
   e.type = new i.NotificationType("telemetry/event");
  })(b = t.TelemetryEventNotification || (t.TelemetryEventNotification = {}));
  var w;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didOpen");
  })(w = t.DidOpenTextDocumentNotification || (t.DidOpenTextDocumentNotification = {}));
  var k;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didChange");
  })(k = t.DidChangeTextDocumentNotification || (t.DidChangeTextDocumentNotification = {}));
  var _;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didClose");
  })(_ = t.DidCloseTextDocumentNotification || (t.DidCloseTextDocumentNotification = {}));
  var x;
  (function(e) {
   e.type = new i.NotificationType("textDocument/didSave");
  })(x = t.DidSaveTextDocumentNotification || (t.DidSaveTextDocumentNotification = {}));
  var R;
  (function(e) {
   e.type = new i.NotificationType("textDocument/willSave");
  })(R = t.WillSaveTextDocumentNotification || (t.WillSaveTextDocumentNotification = {}));
  var C;
  (function(e) {
   e.type = new i.RequestType("textDocument/willSaveWaitUntil");
  })(C = t.WillSaveTextDocumentWaitUntilRequest || (t.WillSaveTextDocumentWaitUntilRequest = {}));
  var T;
  (function(e) {
   e.type = new i.NotificationType("workspace/didChangeWatchedFiles");
  })(T = t.DidChangeWatchedFilesNotification || (t.DidChangeWatchedFilesNotification = {}));
  var E;
  (function(e) {
   e.Created = 1;
   e.Changed = 2;
   e.Deleted = 3;
  })(E = t.FileChangeType || (t.FileChangeType = {}));
  var S;
  (function(e) {
   e.Create = 1;
   e.Change = 2;
   e.Delete = 4;
  })(S = t.WatchKind || (t.WatchKind = {}));
  var q;
  (function(e) {
   e.type = new i.NotificationType("textDocument/publishDiagnostics");
  })(q = t.PublishDiagnosticsNotification || (t.PublishDiagnosticsNotification = {}));
  var O;
  (function(e) {
   e.type = new i.RequestType("textDocument/completion");
  })(O = t.CompletionRequest || (t.CompletionRequest = {}));
  var D;
  (function(e) {
   e.type = new i.RequestType("completionItem/resolve");
  })(D = t.CompletionResolveRequest || (t.CompletionResolveRequest = {}));
  var j;
  (function(e) {
   e.type = new i.RequestType("textDocument/hover");
  })(j = t.HoverRequest || (t.HoverRequest = {}));
  var N;
  (function(e) {
   e.type = new i.RequestType("textDocument/signatureHelp");
  })(N = t.SignatureHelpRequest || (t.SignatureHelpRequest = {}));
  var M;
  (function(e) {
   e.type = new i.RequestType("textDocument/definition");
  })(M = t.DefinitionRequest || (t.DefinitionRequest = {}));
  var P;
  (function(e) {
   e.type = new i.RequestType("textDocument/references");
  })(P = t.ReferencesRequest || (t.ReferencesRequest = {}));
  var I;
  (function(e) {
   e.type = new i.RequestType("textDocument/documentHighlight");
  })(I = t.DocumentHighlightRequest || (t.DocumentHighlightRequest = {}));
  var W;
  (function(e) {
   e.type = new i.RequestType("textDocument/documentSymbol");
  })(W = t.DocumentSymbolRequest || (t.DocumentSymbolRequest = {}));
  var F;
  (function(e) {
   e.type = new i.RequestType("workspace/symbol");
  })(F = t.WorkspaceSymbolRequest || (t.WorkspaceSymbolRequest = {}));
  var L;
  (function(e) {
   e.type = new i.RequestType("textDocument/codeAction");
  })(L = t.CodeActionRequest || (t.CodeActionRequest = {}));
  var A;
  (function(e) {
   e.type = new i.RequestType("textDocument/codeLens");
  })(A = t.CodeLensRequest || (t.CodeLensRequest = {}));
  var H;
  (function(e) {
   e.type = new i.RequestType("codeLens/resolve");
  })(H = t.CodeLensResolveRequest || (t.CodeLensResolveRequest = {}));
  var z;
  (function(e) {
   e.type = new i.RequestType("textDocument/formatting");
  })(z = t.DocumentFormattingRequest || (t.DocumentFormattingRequest = {}));
  var U;
  (function(e) {
   e.type = new i.RequestType("textDocument/rangeFormatting");
  })(U = t.DocumentRangeFormattingRequest || (t.DocumentRangeFormattingRequest = {}));
  var $;
  (function(e) {
   e.type = new i.RequestType("textDocument/onTypeFormatting");
  })($ = t.DocumentOnTypeFormattingRequest || (t.DocumentOnTypeFormattingRequest = {}));
  var B;
  (function(e) {
   e.type = new i.RequestType("textDocument/rename");
  })(B = t.RenameRequest || (t.RenameRequest = {}));
  var K;
  (function(e) {
   e.type = new i.RequestType("textDocument/documentLink");
  })(K = t.DocumentLinkRequest || (t.DocumentLinkRequest = {}));
  var V;
  (function(e) {
   e.type = new i.RequestType("documentLink/resolve");
  })(V = t.DocumentLinkResolveRequest || (t.DocumentLinkResolveRequest = {}));
  var J;
  (function(e) {
   e.type = new i.RequestType("workspace/executeCommand");
  })(J = t.ExecuteCommandRequest || (t.ExecuteCommandRequest = {}));
  var Z;
  (function(e) {
   e.type = new i.RequestType("workspace/applyEdit");
  })(Z = t.ApplyWorkspaceEditRequest || (t.ApplyWorkspaceEditRequest = {}));
 },
 eNxj: function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("ZH/z");
  var o = n("cBZp");
  var a = 8192;
  var s = new Buffer("\r", "ascii")[0];
  var u = new Buffer("\n", "ascii")[0];
  var c = "\r\n";
  var l = function() {
   function e(e) {
    if (e === void 0) {
     e = "utf8";
    }
    this.encoding = e;
    this.index = 0;
    this.buffer = new Buffer(a);
   }
   e.prototype.append = function(e) {
    var t = e;
    if (typeof e == "string") {
     var n = e;
     var r = Buffer.byteLength(n, this.encoding);
     t = new Buffer(r);
     t.write(n, 0, r, this.encoding);
    }
    if (this.buffer.length - this.index >= t.length) {
     t.copy(this.buffer, this.index, 0, t.length);
    } else {
     var i = (Math.ceil((this.index + t.length) / a) + 1) * a;
     if (this.index === 0) {
      this.buffer = new Buffer(i);
      t.copy(this.buffer, 0, 0, t.length);
     } else {
      this.buffer = Buffer.concat([ this.buffer.slice(0, this.index), t ], i);
     }
    }
    this.index += t.length;
   };
   e.prototype.tryReadHeaders = function() {
    var e = undefined;
    var t = 0;
    while (t + 3 < this.index && (this.buffer[t] !== s || this.buffer[t + 1] !== u || this.buffer[t + 2] !== s || this.buffer[t + 3] !== u)) {
     t++;
    }
    if (t + 3 >= this.index) {
     return e;
    }
    e = Object.create(null);
    var n = this.buffer.toString("ascii", 0, t).split(c);
    n.forEach(function(t) {
     var n = t.indexOf(":");
     if (n === -1) {
      throw new Error("Message header must separate key and value using :");
     }
     var r = t.substr(0, n);
     var i = t.substr(n + 1).trim();
     e[r] = i;
    });
    var r = t + 4;
    this.buffer = this.buffer.slice(r);
    this.index = this.index - r;
    return e;
   };
   e.prototype.tryReadContent = function(e) {
    if (this.index < e) {
     return null;
    }
    var t = this.buffer.toString(this.encoding, 0, e);
    var n = e;
    this.buffer.copy(this.buffer, 0, n);
    this.index = this.index - n;
    return t;
   };
   Object.defineProperty(e.prototype, "numberOfBytes", {
    get: function() {
     return this.index;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var f;
  (function(e) {
   function t(e) {
    var t = e;
    return t && o.func(t.listen) && o.func(t.dispose) && o.func(t.onError) && o.func(t.onClose) && o.func(t.onPartialMessage);
   }
   e.is = t;
  })(f = t.MessageReader || (t.MessageReader = {}));
  var d = function() {
   function e() {
    this.errorEmitter = new i.Emitter();
    this.closeEmitter = new i.Emitter();
    this.partialMessageEmitter = new i.Emitter();
   }
   e.prototype.dispose = function() {
    this.errorEmitter.dispose();
    this.closeEmitter.dispose();
   };
   Object.defineProperty(e.prototype, "onError", {
    get: function() {
     return this.errorEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireError = function(e) {
    this.errorEmitter.fire(this.asError(e));
   };
   Object.defineProperty(e.prototype, "onClose", {
    get: function() {
     return this.closeEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.fireClose = function() {
    this.closeEmitter.fire(undefined);
   };
   Object.defineProperty(e.prototype, "onPartialMessage", {
    get: function() {
     return this.partialMessageEmitter.event;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.firePartialMessage = function(e) {
    this.partialMessageEmitter.fire(e);
   };
   e.prototype.asError = function(e) {
    if (e instanceof Error) {
     return e;
    } else {
     return new Error("Reader recevied error. Reason: " + (o.string(e.message) ? e.message : "unknown"));
    }
   };
   return e;
  }();
  t.AbstractMessageReader = d;
  var h = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf8";
    }
    var r = e.call(this) || this;
    r.readable = t;
    r.buffer = new l(n);
    r._partialMessageTimeout = 1e4;
    return r;
   }
   Object.defineProperty(t.prototype, "partialMessageTimeout", {
    get: function() {
     return this._partialMessageTimeout;
    },
    set: function(e) {
     this._partialMessageTimeout = e;
    },
    enumerable: true,
    configurable: true
   });
   t.prototype.listen = function(e) {
    var t = this;
    this.nextMessageLength = -1;
    this.messageToken = 0;
    this.partialMessageTimer = undefined;
    this.callback = e;
    this.readable.on("data", function(e) {
     t.onData(e);
    });
    this.readable.on("error", function(e) {
     return t.fireError(e);
    });
    this.readable.on("close", function() {
     return t.fireClose();
    });
   };
   t.prototype.onData = function(e) {
    this.buffer.append(e);
    while (true) {
     if (this.nextMessageLength === -1) {
      var t = this.buffer.tryReadHeaders();
      if (!t) {
       return;
      }
      var n = t["Content-Length"];
      if (!n) {
       throw new Error("Header must provide a Content-Length property.");
      }
      var r = parseInt(n);
      if (isNaN(r)) {
       throw new Error("Content-Length value must be a number.");
      }
      this.nextMessageLength = r;
     }
     var i = this.buffer.tryReadContent(this.nextMessageLength);
     if (i === null) {
      this.setPartialMessageTimer();
      return;
     }
     this.clearPartialMessageTimer();
     this.nextMessageLength = -1;
     this.messageToken++;
     var o = JSON.parse(i);
     this.callback(o);
    }
   };
   t.prototype.clearPartialMessageTimer = function() {
    if (this.partialMessageTimer) {
     clearTimeout(this.partialMessageTimer);
     this.partialMessageTimer = undefined;
    }
   };
   t.prototype.setPartialMessageTimer = function() {
    var e = this;
    this.clearPartialMessageTimer();
    if (this._partialMessageTimeout <= 0) {
     return;
    }
    this.partialMessageTimer = setTimeout(function(t, n) {
     e.partialMessageTimer = undefined;
     if (t === e.messageToken) {
      e.firePartialMessage({
       messageToken: t,
       waitingTime: n
      });
      e.setPartialMessageTimer();
     }
    }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
   };
   return t;
  }(d);
  t.StreamMessageReader = h;
  var p = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this) || this;
    n.process = t;
    var r = n.process;
    r.on("error", function(e) {
     return n.fireError(e);
    });
    r.on("close", function() {
     return n.fireClose();
    });
    return n;
   }
   t.prototype.listen = function(e) {
    this.process.on("message", e);
   };
   return t;
  }(d);
  t.IPCMessageReader = p;
  var g = function(e) {
   r(t, e);
   function t(t, n) {
    if (n === void 0) {
     n = "utf-8";
    }
    return e.call(this, t, n) || this;
   }
   return t;
  }(h);
  t.SocketMessageReader = g;
 },
 fTep: function(e, t, n) {
  "use strict";
  var r = this && this.__extends || function() {
   var e = Object.setPrototypeOf || {
    __proto__: []
   } instanceof Array && function(e, t) {
    e.__proto__ = t;
   } || function(e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
   };
   return function(t, n) {
    e(t, n);
    function r() {
     this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
   };
  }();
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var i = n("cBZp");
  var o;
  (function(e) {
   e.ParseError = -32700;
   e.InvalidRequest = -32600;
   e.MethodNotFound = -32601;
   e.InvalidParams = -32602;
   e.InternalError = -32603;
   e.serverErrorStart = -32099;
   e.serverErrorEnd = -32e3;
   e.ServerNotInitialized = -32002;
   e.UnknownErrorCode = -32001;
   e.RequestCancelled = -32800;
   e.MessageWriteError = 1;
   e.MessageReadError = 2;
  })(o = t.ErrorCodes || (t.ErrorCodes = {}));
  var a = function(e) {
   r(t, e);
   function t(n, r, a) {
    var s = e.call(this, r) || this;
    s.code = i.number(n) ? n : o.UnknownErrorCode;
    if (a !== void 0) {
     s.data = a;
    }
    Object.setPrototypeOf(s, t.prototype);
    return s;
   }
   t.prototype.toJson = function() {
    var e = {
     code: this.code,
     message: this.message
    };
    if (this.data !== void 0) {
     e.data = this.data;
    }
    return e;
   };
   return t;
  }(Error);
  t.ResponseError = a;
  var s = function() {
   function e(e, t) {
    this._method = e;
    this._numberOfParams = t;
   }
   Object.defineProperty(e.prototype, "method", {
    get: function() {
     return this._method;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "numberOfParams", {
    get: function() {
     return this._numberOfParams;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  t.AbstractMessageType = s;
  var u = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 0) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType0 = u;
  var c = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType = c;
  var l = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType1 = l;
  var f = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 2) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType2 = f;
  var d = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 3) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType3 = d;
  var h = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 4) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType4 = h;
  var p = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 5) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType5 = p;
  var g = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 6) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType6 = g;
  var m = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 7) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType7 = m;
  var v = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 8) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType8 = v;
  var y = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 9) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.RequestType9 = y;
  var b = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType = b;
  var w = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 0) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType0 = w;
  var k = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 1) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType1 = k;
  var _ = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 2) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType2 = _;
  var x = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 3) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType3 = x;
  var R = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 4) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType4 = R;
  var C = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 5) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType5 = C;
  var T = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 6) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType6 = T;
  var E = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 7) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType7 = E;
  var S = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 8) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType8 = S;
  var q = function(e) {
   r(t, e);
   function t(t) {
    var n = e.call(this, t, 9) || this;
    n._ = undefined;
    return n;
   }
   return t;
  }(s);
  t.NotificationType9 = q;
  function O(e) {
   var t = e;
   return t && i.string(t.method) && (i.string(t.id) || i.number(t.id));
  }
  t.isRequestMessage = O;
  function D(e) {
   var t = e;
   return t && i.string(t.method) && e.id === void 0;
  }
  t.isNotificationMessage = D;
  function j(e) {
   var t = e;
   return t && (t.result !== void 0 || !!t.error) && (i.string(t.id) || i.number(t.id) || t.id === null);
  }
  t.isResponseMessage = j;
 },
 g2g7: function(e, t) {
  var n = [ "are a number", "clearly", "completely", "exceedingly", "excellent", "extremely", "fairly", "few", "huge", "interestingly", "is a number", "largely", "many", "mostly", "obviously", "quite", "relatively", "remarkably", "several", "significantly", "substantially", "surprisingly", "tiny", "various", "vast", "very" ];
  var r = [ "many", "few" ];
  var i = new RegExp("\\b(" + n.join("|") + ")\\b", "gi");
  e.exports = function(e, t) {
   var n = [];
   while (match = i.exec(e)) {
    var o = match[0].toLowerCase();
    if (r.indexOf(o) === -1 || e.substr(match.index - 4, 4) !== "too ") {
     n.push({
      index: match.index,
      offset: o.length
     });
    }
   }
   return n;
  };
 },
 iDpV: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("bzos");
  const i = n("oyvS");
  const o = n("mw/K");
  const a = n("QduZ");
  function s(e) {
   let t = r.parse(e);
   if (t.protocol !== "file:" || !t.path) {
    return undefined;
   }
   let n = t.path.split("/");
   for (var o = 0, a = n.length; o < a; o++) {
    n[o] = decodeURIComponent(n[o]);
   }
   if (process.platform === "win32" && n.length > 1) {
    let e = n[0];
    let t = n[1];
    if (e.length === 0 && t.length > 1 && t[1] === ":") {
     n.shift();
    }
   }
   return i.normalize(n.join("/"));
  }
  t.uriToFilePath = s;
  function u() {
   return process.platform === "win32";
  }
  function c(e, t) {
   let r = "NODE_PATH";
   return new Promise((o, s) => {
    let c = [];
    if (e) {
     c.push(i.join(e, "node_modules"));
    }
    a.exec("npm config get prefix", (e, l, f) => {
     if (!e) {
      let e = l.replace(/[\s\r\n]+$/, "");
      if (e.length > 0) {
       if (u()) {
        c.push(i.join(e, "node_modules"));
       } else {
        c.push(i.join(e, "lib", "node_modules"));
       }
      }
     }
     let d = u() ? ";" : ":";
     let h = process.env;
     let p = Object.create(null);
     Object.keys(h).forEach(e => p[e] = h[e]);
     if (p[r]) {
      p[r] = c.join(d) + d + p[r];
     } else {
      p[r] = c.join(d);
     }
     try {
      let r = a.fork(i.join(__dirname, "resolve.js"), [], {
       env: p,
       execArgv: []
      });
      r.on("message", e => {
       if (e.command === "resolve") {
        let i = t;
        if (e.success) {
         i = e.result;
        }
        r.send({
         command: "exit"
        });
        try {
         o(n("Xhok")(i));
        } catch (e) {
         s(e);
        }
       }
      });
      let u = {
       command: "resolve",
       args: t
      };
      r.send(u);
     } catch (e) {
      s(e);
     }
    });
   });
  }
  t.resolveModule = c;
  function l(e, t, n, r) {
   const o = "NODE_PATH";
   const s = [ "var p = process;", "p.on('message',function(m){", "if(m.c==='e'){", "p.exit(0);", "}", "else if(m.c==='rs'){", "try{", "var r=require.resolve(m.a);", "p.send({c:'r',s:true,r:r});", "}", "catch(err){", "p.send({c:'r',s:false});", "}", "}", "});" ].join("");
   return new Promise((u, c) => {
    let l = process.env;
    let f = Object.create(null);
    Object.keys(l).forEach(e => f[e] = l[e]);
    if (t) {
     if (f[o]) {
      f[o] = t + i.delimiter + f[o];
     } else {
      f[o] = t;
     }
     if (r) {
      r(`NODE_PATH value is: ${f[o]}`);
     }
    }
    f["ATOM_SHELL_INTERNAL_RUN_AS_NODE"] = "1";
    try {
     let t = a.fork("", [], {
      cwd: n,
      env: f,
      execArgv: [ "-e", s ]
     });
     t.on("error", e => {
      c(e);
     });
     t.on("message", n => {
      if (n.c === "r") {
       t.send({
        c: "e"
       });
       if (n.s) {
        u(n.r);
       } else {
        c(new Error(`Failed to resolve module: ${e}`));
       }
      }
     });
     let r = {
      c: "rs",
      a: e
     };
     t.send(r);
    } catch (e) {
     c(e);
    }
   });
  }
  t.resolve = l;
  function f(e) {
   let t = u() ? "npm.cmd" : "npm";
   let n = a.spawnSync(t, [ "config", "get", "prefix" ], {
    encoding: "utf8"
   }).stdout;
   if (!n) {
    if (e) {
     e(`'npm config get prefix' didn't return a value.`);
    }
    return undefined;
   }
   let r = n.trim();
   if (e) {
    e(`'npm config get prefix' value is: ${r}`);
   }
   if (r.length > 0) {
    if (u()) {
     return i.join(r, "node_modules");
    } else {
     return i.join(r, "lib", "node_modules");
    }
   }
   return undefined;
  }
  t.resolveGlobalNodePath = f;
  function d(e) {
   let t = u() ? "yarn.cmd" : "yarn";
   let n = a.spawnSync(t, [ "global", "dir", "--json" ], {
    encoding: "utf8"
   });
   let r = n.stdout;
   if (!r) {
    if (e) {
     e(`'yarn global dir' didn't return a value.`);
     if (n.stderr) {
      e(n.stderr);
     }
    }
    return undefined;
   }
   let o = r.trim().split(/\r?\n/);
   for (let e of o) {
    try {
     let t = JSON.parse(e);
     if (t.type === "log") {
      return i.join(t.data, "node_modules");
     }
    } catch (e) {}
   }
   return undefined;
  }
  t.resolveGlobalYarnPath = d;
  var h;
  (function(e) {
   let t = undefined;
   function n() {
    if (t !== void 0) {
     return t;
    }
    if (process.platform === "win32") {
     t = false;
    } else {
     t = !o.existsSync(__filename.toUpperCase()) || !o.existsSync(__filename.toLowerCase());
    }
    return t;
   }
   e.isCaseSensitive = n;
   function r(e, t) {
    if (n()) {
     return i.normalize(t).indexOf(i.normalize(e)) === 0;
    } else {
     return i.normalize(t).toLowerCase().indexOf(i.normalize(e).toLowerCase()) == 0;
    }
   }
   e.isParent = r;
  })(h = t.FileSystem || (t.FileSystem = {}));
  function p(e, t, n, r) {
   if (n) {
    if (!i.isAbsolute(n)) {
     n = i.join(e, n);
    }
    return l(t, n, n, r).then(e => {
     if (h.isParent(n, e)) {
      return e;
     } else {
      return Promise.reject(new Error(`Failed to load ${t} from node path location.`));
     }
    }).then(undefined, n => {
     return l(t, f(r), e, r);
    });
   } else {
    return l(t, f(r), e, r);
   }
  }
  t.resolveModulePath = p;
  function g(e, t, r, i) {
   return p(e, t, r, i).then(e => {
    if (i) {
     i(`Module ${t} got resolved to ${e}`);
    }
    return n("Xhok")(e);
   });
  }
  t.resolveModule2 = g;
 },
 "j5+q": function(e, t, n) {
  var r = n("M7Cy");
  var i = [ "a number of", "abundance", "accede to", "accelerate", "accentuate", "accompany", "accomplish", "accorded", "accrue", "acquiesce", "acquire", "additional", "adjacent to", "adjustment", "admissible", "advantageous", "adversely impact", "advise", "aforementioned", "aggregate", "aircraft", "all of", "all things considered", "alleviate", "allocate", "along the lines of", "already existing", "alternatively", "amazing", "ameliorate", "anticipate", "apparent", "appreciable", "as a matter of fact", "as a means of", "as far as I'm concerned", "as of yet", "as to", "as yet", "ascertain", "assistance", "at the present time", "at this time", "attain", "attributable to", "authorize", "because of the fact that", "belated", "benefit from", "bestow", "by means of", "by virtue of the fact that", "by virtue of", "cease", "close proximity", "commence", "comply with", "concerning", "consequently", "consolidate", "constitutes", "demonstrate", "depart", "designate", "discontinue", "due to the fact that", "each and every", "economical", "eliminate", "elucidate", "employ", "endeavor", "enumerate", "equitable", "equivalent", "evaluate", "evidenced", "exclusively", "expedite", "expend", "expiration", "facilitate", "factual evidence", "feasible", "finalize", "first and foremost", "for all intents and purposes", "for the most part", "for the purpose of", "forfeit", "formulate", "have a tendency to", "honest truth", "however", "if and when", "impacted", "implement", "in a manner of speaking", "in a timely manner", "in a very real sense", "in accordance with", "in addition", "in all likelihood", "in an effort to", "in between", "in excess of", "in lieu of", "in light of the fact that", "in many cases", "in my opinion", "in order to", "in regard to", "in some instances", "in terms of", "in the case of ", "in the event that", "in the final analysis", "in the nature of", "in the near future", "in the process of", "inception", "incumbent upon", "indicate", "indication", "initiate", "irregardless", "is applicable to", "is authorized to", "is responsible for", "it is essential", "it is", "it seems that", "it was", "magnitude", "maximum", "methodology", "minimize", "minimum", "modify", "monitor", "multiple", "necessitate", "nevertheless", "not certain", "not many", "not often", "not unless", "not unlike", "notwithstanding", "null and void", "numerous", "objective", "obligate", "obtain", "on the contrary", "on the other hand", "one particular", "optimum", "overall", "owing to the fact that", "participate", "particulars", "pass away", "pertaining to", "point in time", "portion", "possess", "preclude", "previously", "prior to", "prioritize", "procure", "proficiency", "provided that", "purchase", "put simply", "readily apparent", "refer back", "regarding", "relocate", "remainder", "remuneration", "requirement", "reside", "residence", "retain", "satisfy", "shall", "should you wish", "similar to", "solicit", "span across", "strategize", "subsequent", "substantial", "successfully complete", "sufficient", "terminate", "the month of", "the point I am trying to make", "therefore", "time period", "took advantage of", "transmit", "transpire", "type of", "until such time as", "utilization", "utilize", "validate", "various different", "what I mean to say is", "whether or not", "with respect to", "with the exception of", "witnessed" ];
  var o = new RegExp("\\b(" + i.join("|") + ")\\b", "gi");
  e.exports = function(e) {
   return r(o, e, "wordy");
  };
 },
 "jle/": function(e, t) {
  e.exports = require("os");
 },
 kBpC: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("NVm0");
  var i;
  (function(e) {
   e.type = new r.RequestType("workspace/configuration");
  })(i = t.ConfigurationRequest || (t.ConfigurationRequest = {}));
 },
 kmEW: function(e, t, n) {
  "use strict";
  n.r(t);
  n.d(t, "Position", function() {
   return r;
  });
  n.d(t, "Range", function() {
   return i;
  });
  n.d(t, "Location", function() {
   return o;
  });
  n.d(t, "DiagnosticRelatedInformation", function() {
   return a;
  });
  n.d(t, "DiagnosticSeverity", function() {
   return s;
  });
  n.d(t, "Diagnostic", function() {
   return u;
  });
  n.d(t, "Command", function() {
   return c;
  });
  n.d(t, "TextEdit", function() {
   return l;
  });
  n.d(t, "TextDocumentEdit", function() {
   return f;
  });
  n.d(t, "WorkspaceEdit", function() {
   return d;
  });
  n.d(t, "WorkspaceChange", function() {
   return p;
  });
  n.d(t, "TextDocumentIdentifier", function() {
   return g;
  });
  n.d(t, "VersionedTextDocumentIdentifier", function() {
   return m;
  });
  n.d(t, "TextDocumentItem", function() {
   return v;
  });
  n.d(t, "MarkupKind", function() {
   return y;
  });
  n.d(t, "MarkupContent", function() {
   return b;
  });
  n.d(t, "CompletionItemKind", function() {
   return w;
  });
  n.d(t, "InsertTextFormat", function() {
   return k;
  });
  n.d(t, "CompletionItem", function() {
   return _;
  });
  n.d(t, "CompletionList", function() {
   return x;
  });
  n.d(t, "MarkedString", function() {
   return R;
  });
  n.d(t, "Hover", function() {
   return C;
  });
  n.d(t, "ParameterInformation", function() {
   return T;
  });
  n.d(t, "SignatureInformation", function() {
   return E;
  });
  n.d(t, "DocumentHighlightKind", function() {
   return S;
  });
  n.d(t, "DocumentHighlight", function() {
   return q;
  });
  n.d(t, "SymbolKind", function() {
   return O;
  });
  n.d(t, "SymbolInformation", function() {
   return D;
  });
  n.d(t, "CodeActionKind", function() {
   return j;
  });
  n.d(t, "CodeActionContext", function() {
   return N;
  });
  n.d(t, "CodeAction", function() {
   return M;
  });
  n.d(t, "CodeLens", function() {
   return P;
  });
  n.d(t, "FormattingOptions", function() {
   return I;
  });
  n.d(t, "DocumentLink", function() {
   return W;
  });
  n.d(t, "EOL", function() {
   return F;
  });
  n.d(t, "TextDocument", function() {
   return L;
  });
  n.d(t, "TextDocumentSaveReason", function() {
   return A;
  });
  var r;
  (function(e) {
   function t(e, t) {
    return {
     line: e,
     character: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.objectLiteral(t) && z.number(t.line) && z.number(t.character);
   }
   e.is = n;
  })(r || (r = {}));
  var i;
  (function(e) {
   function t(e, t, n, i) {
    if (z.number(e) && z.number(t) && z.number(n) && z.number(i)) {
     return {
      start: r.create(e, t),
      end: r.create(n, i)
     };
    } else if (r.is(e) && r.is(t)) {
     return {
      start: e,
      end: t
     };
    } else {
     throw new Error("Range#create called with invalid arguments[" + e + ", " + t + ", " + n + ", " + i + "]");
    }
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.objectLiteral(t) && r.is(t.start) && r.is(t.end);
   }
   e.is = n;
  })(i || (i = {}));
  var o;
  (function(e) {
   function t(e, t) {
    return {
     uri: e,
     range: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && i.is(t.range) && (z.string(t.uri) || z.undefined(t.uri));
   }
   e.is = n;
  })(o || (o = {}));
  var a;
  (function(e) {
   function t(e, t) {
    return {
     location: e,
     message: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && o.is(t.location) && z.string(t.message);
   }
   e.is = n;
  })(a || (a = {}));
  var s;
  (function(e) {
   e.Error = 1;
   e.Warning = 2;
   e.Information = 3;
   e.Hint = 4;
  })(s || (s = {}));
  var u;
  (function(e) {
   function t(e, t, n, r, i, o) {
    var a = {
     range: e,
     message: t
    };
    if (z.defined(n)) {
     a.severity = n;
    }
    if (z.defined(r)) {
     a.code = r;
    }
    if (z.defined(i)) {
     a.source = i;
    }
    if (z.defined(o)) {
     a.relatedInformation = o;
    }
    return a;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && i.is(t.range) && z.string(t.message) && (z.number(t.severity) || z.undefined(t.severity)) && (z.number(t.code) || z.string(t.code) || z.undefined(t.code)) && (z.string(t.source) || z.undefined(t.source)) && (z.undefined(t.relatedInformation) || z.typedArray(t.relatedInformation, a.is));
   }
   e.is = n;
  })(u || (u = {}));
  var c;
  (function(e) {
   function t(e, t) {
    var n = [];
    for (var r = 2; r < arguments.length; r++) {
     n[r - 2] = arguments[r];
    }
    var i = {
     title: e,
     command: t
    };
    if (z.defined(n) && n.length > 0) {
     i.arguments = n;
    }
    return i;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && z.string(t.title) && z.string(t.command);
   }
   e.is = n;
  })(c || (c = {}));
  var l;
  (function(e) {
   function t(e, t) {
    return {
     range: e,
     newText: t
    };
   }
   e.replace = t;
   function n(e, t) {
    return {
     range: {
      start: e,
      end: e
     },
     newText: t
    };
   }
   e.insert = n;
   function r(e) {
    return {
     range: e,
     newText: ""
    };
   }
   e.del = r;
  })(l || (l = {}));
  var f;
  (function(e) {
   function t(e, t) {
    return {
     textDocument: e,
     edits: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && m.is(t.textDocument) && Array.isArray(t.edits);
   }
   e.is = n;
  })(f || (f = {}));
  var d;
  (function(e) {
   function t(e) {
    var t = e;
    return t && (t.changes !== void 0 || t.documentChanges !== void 0) && (t.documentChanges === void 0 || z.typedArray(t.documentChanges, f.is));
   }
   e.is = t;
  })(d || (d = {}));
  var h = function() {
   function e(e) {
    this.edits = e;
   }
   e.prototype.insert = function(e, t) {
    this.edits.push(l.insert(e, t));
   };
   e.prototype.replace = function(e, t) {
    this.edits.push(l.replace(e, t));
   };
   e.prototype.delete = function(e) {
    this.edits.push(l.del(e));
   };
   e.prototype.add = function(e) {
    this.edits.push(e);
   };
   e.prototype.all = function() {
    return this.edits;
   };
   e.prototype.clear = function() {
    this.edits.splice(0, this.edits.length);
   };
   return e;
  }();
  var p = function() {
   function e(e) {
    var t = this;
    this._textEditChanges = Object.create(null);
    if (e) {
     this._workspaceEdit = e;
     if (e.documentChanges) {
      e.documentChanges.forEach(function(e) {
       var n = new h(e.edits);
       t._textEditChanges[e.textDocument.uri] = n;
      });
     } else if (e.changes) {
      Object.keys(e.changes).forEach(function(n) {
       var r = new h(e.changes[n]);
       t._textEditChanges[n] = r;
      });
     }
    }
   }
   Object.defineProperty(e.prototype, "edit", {
    get: function() {
     return this._workspaceEdit;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.getTextEditChange = function(e) {
    if (m.is(e)) {
     if (!this._workspaceEdit) {
      this._workspaceEdit = {
       documentChanges: []
      };
     }
     if (!this._workspaceEdit.documentChanges) {
      throw new Error("Workspace edit is not configured for versioned document changes.");
     }
     var t = e;
     var n = this._textEditChanges[t.uri];
     if (!n) {
      var r = [];
      var i = {
       textDocument: t,
       edits: r
      };
      this._workspaceEdit.documentChanges.push(i);
      n = new h(r);
      this._textEditChanges[t.uri] = n;
     }
     return n;
    } else {
     if (!this._workspaceEdit) {
      this._workspaceEdit = {
       changes: Object.create(null)
      };
     }
     if (!this._workspaceEdit.changes) {
      throw new Error("Workspace edit is not configured for normal text edit changes.");
     }
     var n = this._textEditChanges[e];
     if (!n) {
      var r = [];
      this._workspaceEdit.changes[e] = r;
      n = new h(r);
      this._textEditChanges[e] = n;
     }
     return n;
    }
   };
   return e;
  }();
  var g;
  (function(e) {
   function t(e) {
    return {
     uri: e
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && z.string(t.uri);
   }
   e.is = n;
  })(g || (g = {}));
  var m;
  (function(e) {
   function t(e, t) {
    return {
     uri: e,
     version: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && z.string(t.uri) && z.number(t.version);
   }
   e.is = n;
  })(m || (m = {}));
  var v;
  (function(e) {
   function t(e, t, n, r) {
    return {
     uri: e,
     languageId: t,
     version: n,
     text: r
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && z.string(t.uri) && z.string(t.languageId) && z.number(t.version) && z.string(t.text);
   }
   e.is = n;
  })(v || (v = {}));
  var y;
  (function(e) {
   e.PlainText = "plaintext";
   e.Markdown = "markdown";
  })(y || (y = {}));
  (function(e) {
   function t(t) {
    var n = t;
    return n === e.PlainText || n === e.Markdown;
   }
   e.is = t;
  })(y || (y = {}));
  var b;
  (function(e) {
   function t(e) {
    var t = e;
    return z.objectLiteral(e) && y.is(t.kind) && z.string(t.value);
   }
   e.is = t;
  })(b || (b = {}));
  var w;
  (function(e) {
   e.Text = 1;
   e.Method = 2;
   e.Function = 3;
   e.Constructor = 4;
   e.Field = 5;
   e.Variable = 6;
   e.Class = 7;
   e.Interface = 8;
   e.Module = 9;
   e.Property = 10;
   e.Unit = 11;
   e.Value = 12;
   e.Enum = 13;
   e.Keyword = 14;
   e.Snippet = 15;
   e.Color = 16;
   e.File = 17;
   e.Reference = 18;
   e.Folder = 19;
   e.EnumMember = 20;
   e.Constant = 21;
   e.Struct = 22;
   e.Event = 23;
   e.Operator = 24;
   e.TypeParameter = 25;
  })(w || (w = {}));
  var k;
  (function(e) {
   e.PlainText = 1;
   e.Snippet = 2;
  })(k || (k = {}));
  var _;
  (function(e) {
   function t(e) {
    return {
     label: e
    };
   }
   e.create = t;
  })(_ || (_ = {}));
  var x;
  (function(e) {
   function t(e, t) {
    return {
     items: e ? e : [],
     isIncomplete: !!t
    };
   }
   e.create = t;
  })(x || (x = {}));
  var R;
  (function(e) {
   function t(e) {
    return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
   }
   e.fromPlainText = t;
   function n(e) {
    var t = e;
    return z.string(t) || z.objectLiteral(t) && z.string(t.language) && z.string(t.value);
   }
   e.is = n;
  })(R || (R = {}));
  var C;
  (function(e) {
   function t(e) {
    var t = e;
    return z.objectLiteral(t) && (b.is(t.contents) || R.is(t.contents) || z.typedArray(t.contents, R.is)) && (e.range === void 0 || i.is(e.range));
   }
   e.is = t;
  })(C || (C = {}));
  var T;
  (function(e) {
   function t(e, t) {
    return t ? {
     label: e,
     documentation: t
    } : {
     label: e
    };
   }
   e.create = t;
  })(T || (T = {}));
  var E;
  (function(e) {
   function t(e, t) {
    var n = [];
    for (var r = 2; r < arguments.length; r++) {
     n[r - 2] = arguments[r];
    }
    var i = {
     label: e
    };
    if (z.defined(t)) {
     i.documentation = t;
    }
    if (z.defined(n)) {
     i.parameters = n;
    } else {
     i.parameters = [];
    }
    return i;
   }
   e.create = t;
  })(E || (E = {}));
  var S;
  (function(e) {
   e.Text = 1;
   e.Read = 2;
   e.Write = 3;
  })(S || (S = {}));
  var q;
  (function(e) {
   function t(e, t) {
    var n = {
     range: e
    };
    if (z.number(t)) {
     n.kind = t;
    }
    return n;
   }
   e.create = t;
  })(q || (q = {}));
  var O;
  (function(e) {
   e.File = 1;
   e.Module = 2;
   e.Namespace = 3;
   e.Package = 4;
   e.Class = 5;
   e.Method = 6;
   e.Property = 7;
   e.Field = 8;
   e.Constructor = 9;
   e.Enum = 10;
   e.Interface = 11;
   e.Function = 12;
   e.Variable = 13;
   e.Constant = 14;
   e.String = 15;
   e.Number = 16;
   e.Boolean = 17;
   e.Array = 18;
   e.Object = 19;
   e.Key = 20;
   e.Null = 21;
   e.EnumMember = 22;
   e.Struct = 23;
   e.Event = 24;
   e.Operator = 25;
   e.TypeParameter = 26;
  })(O || (O = {}));
  var D;
  (function(e) {
   function t(e, t, n, r, i) {
    var o = {
     name: e,
     kind: t,
     location: {
      uri: r,
      range: n
     }
    };
    if (i) {
     o.containerName = i;
    }
    return o;
   }
   e.create = t;
  })(D || (D = {}));
  var j;
  (function(e) {
   e.QuickFix = "quickfix";
   e.Refactor = "refactor";
   e.RefactorExtract = "refactor.extract";
   e.RefactorInline = "refactor.inline";
   e.RefactorRewrite = "refactor.rewrite";
   e.Source = "source";
   e.SourceOrganizeImports = "source.organizeImports";
  })(j || (j = {}));
  var N;
  (function(e) {
   function t(e, t) {
    var n = {
     diagnostics: e
    };
    if (t !== void 0 && t !== null) {
     n.only = t;
    }
    return n;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && z.typedArray(t.diagnostics, u.is) && (t.only === void 0 || z.typedArray(t.only, z.string));
   }
   e.is = n;
  })(N || (N = {}));
  var M;
  (function(e) {
   function t(e, t, n) {
    var r = {
     title: e
    };
    if (c.is(t)) {
     r.command = t;
    } else {
     r.edit = t;
    }
    if (n !== void null) {
     r.kind = n;
    }
    return r;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return t && z.string(t.title) && (t.diagnostics === void 0 || z.typedArray(t.diagnostics, u.is)) && (t.kind === void 0 || z.string(t.kind)) && (t.edit !== void 0 || t.command !== void 0) && (t.command === void 0 || c.is(t.command)) && (t.edit === void 0 || d.is(t.edit));
   }
   e.is = n;
  })(M || (M = {}));
  var P;
  (function(e) {
   function t(e, t) {
    var n = {
     range: e
    };
    if (z.defined(t)) n.data = t;
    return n;
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && i.is(t.range) && (z.undefined(t.command) || c.is(t.command));
   }
   e.is = n;
  })(P || (P = {}));
  var I;
  (function(e) {
   function t(e, t) {
    return {
     tabSize: e,
     insertSpaces: t
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && z.number(t.tabSize) && z.boolean(t.insertSpaces);
   }
   e.is = n;
  })(I || (I = {}));
  var W = function() {
   function e() {}
   return e;
  }();
  (function(e) {
   function t(e, t, n) {
    return {
     range: e,
     target: t,
     data: n
    };
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && i.is(t.range) && (z.undefined(t.target) || z.string(t.target));
   }
   e.is = n;
  })(W || (W = {}));
  var F = [ "\n", "\r\n", "\r" ];
  var L;
  (function(e) {
   function t(e, t, n, r) {
    return new H(e, t, n, r);
   }
   e.create = t;
   function n(e) {
    var t = e;
    return z.defined(t) && z.string(t.uri) && (z.undefined(t.languageId) || z.string(t.languageId)) && z.number(t.lineCount) && z.func(t.getText) && z.func(t.positionAt) && z.func(t.offsetAt) ? true : false;
   }
   e.is = n;
   function r(e, t) {
    var n = e.getText();
    var r = i(t, function(e, t) {
     var n = e.range.start.line - t.range.start.line;
     if (n === 0) {
      return e.range.start.character - t.range.start.character;
     }
     return n;
    });
    var o = n.length;
    for (var a = r.length - 1; a >= 0; a--) {
     var s = r[a];
     var u = e.offsetAt(s.range.start);
     var c = e.offsetAt(s.range.end);
     if (c <= o) {
      n = n.substring(0, u) + s.newText + n.substring(c, n.length);
     } else {
      throw new Error("Ovelapping edit");
     }
     o = u;
    }
    return n;
   }
   e.applyEdits = r;
   function i(e, t) {
    if (e.length <= 1) {
     return e;
    }
    var n = e.length / 2 | 0;
    var r = e.slice(0, n);
    var o = e.slice(n);
    i(r, t);
    i(o, t);
    var a = 0;
    var s = 0;
    var u = 0;
    while (a < r.length && s < o.length) {
     var c = t(r[a], o[s]);
     if (c <= 0) {
      e[u++] = r[a++];
     } else {
      e[u++] = o[s++];
     }
    }
    while (a < r.length) {
     e[u++] = r[a++];
    }
    while (s < o.length) {
     e[u++] = o[s++];
    }
    return e;
   }
  })(L || (L = {}));
  var A;
  (function(e) {
   e.Manual = 1;
   e.AfterDelay = 2;
   e.FocusOut = 3;
  })(A || (A = {}));
  var H = function() {
   function e(e, t, n, r) {
    this._uri = e;
    this._languageId = t;
    this._version = n;
    this._content = r;
    this._lineOffsets = null;
   }
   Object.defineProperty(e.prototype, "uri", {
    get: function() {
     return this._uri;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "languageId", {
    get: function() {
     return this._languageId;
    },
    enumerable: true,
    configurable: true
   });
   Object.defineProperty(e.prototype, "version", {
    get: function() {
     return this._version;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.getText = function(e) {
    if (e) {
     var t = this.offsetAt(e.start);
     var n = this.offsetAt(e.end);
     return this._content.substring(t, n);
    }
    return this._content;
   };
   e.prototype.update = function(e, t) {
    this._content = e.text;
    this._version = t;
    this._lineOffsets = null;
   };
   e.prototype.getLineOffsets = function() {
    if (this._lineOffsets === null) {
     var e = [];
     var t = this._content;
     var n = true;
     for (var r = 0; r < t.length; r++) {
      if (n) {
       e.push(r);
       n = false;
      }
      var i = t.charAt(r);
      n = i === "\r" || i === "\n";
      if (i === "\r" && r + 1 < t.length && t.charAt(r + 1) === "\n") {
       r++;
      }
     }
     if (n && t.length > 0) {
      e.push(t.length);
     }
     this._lineOffsets = e;
    }
    return this._lineOffsets;
   };
   e.prototype.positionAt = function(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    var t = this.getLineOffsets();
    var n = 0, i = t.length;
    if (i === 0) {
     return r.create(0, e);
    }
    while (n < i) {
     var o = Math.floor((n + i) / 2);
     if (t[o] > e) {
      i = o;
     } else {
      n = o + 1;
     }
    }
    var a = n - 1;
    return r.create(a, e - t[a]);
   };
   e.prototype.offsetAt = function(e) {
    var t = this.getLineOffsets();
    if (e.line >= t.length) {
     return this._content.length;
    } else if (e.line < 0) {
     return 0;
    }
    var n = t[e.line];
    var r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
    return Math.max(Math.min(n + e.character, r), n);
   };
   Object.defineProperty(e.prototype, "lineCount", {
    get: function() {
     return this.getLineOffsets().length;
    },
    enumerable: true,
    configurable: true
   });
   return e;
  }();
  var z;
  (function(e) {
   var t = Object.prototype.toString;
   function n(e) {
    return typeof e !== "undefined";
   }
   e.defined = n;
   function r(e) {
    return typeof e === "undefined";
   }
   e.undefined = r;
   function i(e) {
    return e === true || e === false;
   }
   e.boolean = i;
   function o(e) {
    return t.call(e) === "[object String]";
   }
   e.string = o;
   function a(e) {
    return t.call(e) === "[object Number]";
   }
   e.number = a;
   function s(e) {
    return t.call(e) === "[object Function]";
   }
   e.func = s;
   function u(e) {
    return e !== null && typeof e === "object";
   }
   e.objectLiteral = u;
   function c(e, t) {
    return Array.isArray(e) && e.every(t);
   }
   e.typedArray = c;
  })(z || (z = {}));
 },
 kpHM: function(e, t) {
  var n = new RegExp("([^\n\\.;!?]+)([\\.;!?]+)", "gi");
  var r = new RegExp("^(\\s)*there\\b\\s(is|are)\\b", "i");
  e.exports = function(e) {
   var t = [];
   var i, o;
   while (i = n.exec(e)) {
    if (o = r.exec(i[1])) {
     t.push({
      index: i.index + (o[1] || "").length,
      offset: o[0].length - (o[1] || "").length
     });
    }
   }
   return t;
  };
 },
 "mw/K": function(e, t) {
  e.exports = require("fs");
 },
 oISm: function(e, t, n) {
  var r = [ "absolutel", "accidentall", "additionall", "allegedl", "alternativel", "angril", "anxiousl", "approximatel", "awkwardl", "badl", "barel", "beautifull", "blindl", "boldl", "bravel", "brightl", "briskl", "bristl", "bubbl", "busil", "calml", "carefull", "carelessl", "cautiousl", "cheerfull", "clearl", "closel", "coldl", "completel", "consequentl", "correctl", "courageousl", "crinkl", "cruell", "crumbl", "cuddl", "currentl", "dail", "daringl", "deadl", "definitel", "deliberatel", "doubtfull", "dumbl", "eagerl", "earl", "easil", "elegantl", "enormousl", "enthusiasticall", "equall", "especiall", "eventuall", "exactl", "exceedingl", "exclusivel", "extremel", "fairl", "faithfull", "fatall", "fiercel", "finall", "fondl", "foolishl", "fortunatel", "frankl", "franticall", "generousl", "gentl", "giggl", "gladl", "gracefull", "greedil", "happil", "hardl", "hastil", "healthil", "heartil", "helpfull", "honestl", "hourl", "hungril", "hurriedl", "immediatel", "impatientl", "inadequatel", "ingeniousl", "innocentl", "inquisitivel", "interestingl", "irritabl", "jiggl", "joyousl", "justl", "kindl", "largel", "latel", "lazil", "likel", "literall", "lonel", "loosel", "loudl", "loudl", "luckil", "madl", "man", "mentall", "mildl", "monthl", "mortall", "mostl", "mysteriousl", "neatl", "nervousl", "nightl", "noisil", "normall", "obedientl", "occasionall", "onl", "openl", "painfull", "particularl", "patientl", "perfectl", "politel", "poorl", "powerfull", "presumabl", "previousl", "promptl", "punctuall", "quarterl", "quickl", "quietl", "rapidl", "rarel", "reall", "recentl", "recklessl", "regularl", "relativel", "reluctantl", "remarkabl", "repeatedl", "rightfull", "roughl", "rudel", "sadl", "safel", "selfishl", "sensibl", "seriousl", "sharpl", "shortl", "shyl", "significantl", "silentl", "simpl", "sleepil", "slowl", "smartl", "smell", "smoothl", "softl", "solemnl", "sparkl", "speedil", "stealthil", "sternl", "stupidl", "substantiall", "successfull", "suddenl", "surprisingl", "suspiciousl", "swiftl", "tenderl", "tensel", "thoughtfull", "tightl", "timel", "truthfull", "unexpectedl", "unfortunatel", "usuall", "ver", "victoriousl", "violentl", "vivaciousl", "warml", "waverl", "weakl", "wearil", "weekl", "wildl", "wisel", "worldl", "wrinkl", "yearl" ];
  var i = [ "just", "maybe", "stuff", "things" ];
  var o = new RegExp("\\b(" + "(" + r.join("|") + ")(y)" + "|(" + i.join("|") + "))\\b", "gi");
  var a = n("BbeW");
  e.exports = function(e) {
   return a(o, e, "adverbs");
  };
 },
 oyvS: function(e, t) {
  e.exports = require("path");
 },
 pVa5: function(e, t, n) {
  var r = Object.assign || n("Koq/");
  var i = {
   weasel: {
    fn: n("g2g7"),
    explanation: "is a weasel word"
   },
   illusion: {
    fn: n("CidT"),
    explanation: "is repeated"
   },
   so: {
    fn: n("uJGL"),
    explanation: "adds no meaning"
   },
   thereIs: {
    fn: n("kpHM"),
    explanation: "is unnecessary verbiage"
   },
   passive: {
    fn: n("/0xf"),
    explanation: "may be passive voice"
   },
   adverb: {
    fn: n("oISm"),
    explanation: "can weaken meaning"
   },
   tooWordy: {
    fn: n("j5+q"),
    explanation: "is wordy or unneeded"
   },
   cliches: {
    fn: n("D3N6"),
    explanation: "is a cliche"
   },
   eprime: {
    fn: n("Va2M"),
    explanation: "is a form of 'to be'"
   }
  };
  var o = {
   eprime: false
  };
  e.exports = function(e, t) {
   t = t ? t : {};
   var n = {};
   t = r({}, o, t);
   Object.keys(t).map(function(e) {
    if (e !== "checks") {
     n[e] = t[e];
    }
   });
   var s = t.checks || i;
   var u = [];
   Object.keys(s).forEach(function(t) {
    if (n[t] !== false) {
     u = u.concat(s[t].fn(e).map(c(s[t].explanation)));
    }
   });
   return a(u).sort(function(e, t) {
    return e.index < t.index ? -1 : 1;
   });
   function c(t) {
    return function(n) {
     n.reason = '"' + e.substr(n.index, n.offset) + '" ' + t;
     return n;
    };
   }
  };
  function a(e) {
   var t = {};
   return e.reduce(function(e, n) {
    var r = n.index + ":" + n.offset;
    if (!t[r]) {
     t[r] = n;
     e.push(n);
    } else {
     t[r].reason += " and " + n.reason.substring(n.offset + 3);
    }
    return e;
   }, []);
  }
  e.exports.annotate = n("BKyM");
 },
 rZ7H: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  const r = n("+mNA");
  t.WorkspaceFoldersFeature = (e => {
   return class extends e {
    initialize(e) {
     let t = e.workspace;
     if (t && t.workspaceFolders) {
      this._onDidChangeWorkspaceFolders = new r.Emitter();
      this.connection.onNotification(r.Proposed.DidChangeWorkspaceFoldersNotification.type, e => {
       this._onDidChangeWorkspaceFolders.fire(e.event);
      });
     }
    }
    getWorkspaceFolders() {
     return this.connection.sendRequest(r.Proposed.WorkspaceFoldersRequest.type);
    }
    get onDidChangeWorkspaceFolders() {
     if (!this._onDidChangeWorkspaceFolders) {
      throw new Error("Client doesn't support sending workspace folder change events.");
     }
     if (!this._unregistration) {
      this._unregistration = this.connection.client.register(r.Proposed.DidChangeWorkspaceFoldersNotification.type);
     }
     return this._onDidChangeWorkspaceFolders.event;
    }
   };
  });
 },
 siE0: function(e, t, n) {
  var r, i, o;
  (function(a) {
   if (typeof e === "object" && typeof e.exports === "object") {
    var s = a(n("+vTa"), t);
    if (s !== undefined) e.exports = s;
   } else if (true) {
    !(i = [ n, t ], r = a, o = typeof r === "function" ? r.apply(t, i) : r, o !== undefined && (e.exports = o));
   }
  })(function(e, t) {
   "use strict";
   Object.defineProperty(t, "__esModule", {
    value: true
   });
   var n;
   (function(e) {
    function t(e, t) {
     return {
      line: e,
      character: t
     };
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && N.number(t.line) && N.number(t.character);
    }
    e.is = n;
   })(n = t.Position || (t.Position = {}));
   var r;
   (function(e) {
    function t(e, t, r, i) {
     if (N.number(e) && N.number(t) && N.number(r) && N.number(i)) {
      return {
       start: n.create(e, t),
       end: n.create(r, i)
      };
     } else if (n.is(e) && n.is(t)) {
      return {
       start: e,
       end: t
      };
     } else {
      throw new Error("Range#create called with invalid arguments[" + e + ", " + t + ", " + r + ", " + i + "]");
     }
    }
    e.create = t;
    function r(e) {
     var t = e;
     return N.defined(t) && n.is(t.start) && n.is(t.end);
    }
    e.is = r;
   })(r = t.Range || (t.Range = {}));
   var i;
   (function(e) {
    function t(e, t) {
     return {
      uri: e,
      range: t
     };
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && r.is(t.range) && (N.string(t.uri) || N.undefined(t.uri));
    }
    e.is = n;
   })(i = t.Location || (t.Location = {}));
   var o;
   (function(e) {
    e.Error = 1;
    e.Warning = 2;
    e.Information = 3;
    e.Hint = 4;
   })(o = t.DiagnosticSeverity || (t.DiagnosticSeverity = {}));
   var a;
   (function(e) {
    function t(e, t, n, r, i) {
     var o = {
      range: e,
      message: t
     };
     if (N.defined(n)) {
      o.severity = n;
     }
     if (N.defined(r)) {
      o.code = r;
     }
     if (N.defined(i)) {
      o.source = i;
     }
     return o;
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && r.is(t.range) && N.string(t.message) && (N.number(t.severity) || N.undefined(t.severity)) && (N.number(t.code) || N.string(t.code) || N.undefined(t.code)) && (N.string(t.source) || N.undefined(t.source));
    }
    e.is = n;
   })(a = t.Diagnostic || (t.Diagnostic = {}));
   var s;
   (function(e) {
    function t(e, t) {
     var n = [];
     for (var r = 2; r < arguments.length; r++) {
      n[r - 2] = arguments[r];
     }
     var i = {
      title: e,
      command: t
     };
     if (N.defined(n) && n.length > 0) {
      i.arguments = n;
     }
     return i;
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && N.string(t.title) && N.string(t.title);
    }
    e.is = n;
   })(s = t.Command || (t.Command = {}));
   var u;
   (function(e) {
    function t(e, t) {
     return {
      range: e,
      newText: t
     };
    }
    e.replace = t;
    function n(e, t) {
     return {
      range: {
       start: e,
       end: e
      },
      newText: t
     };
    }
    e.insert = n;
    function r(e) {
     return {
      range: e,
      newText: ""
     };
    }
    e.del = r;
   })(u = t.TextEdit || (t.TextEdit = {}));
   var c;
   (function(e) {
    function t(e, t) {
     return {
      textDocument: e,
      edits: t
     };
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && h.is(t.textDocument) && Array.isArray(t.edits);
    }
    e.is = n;
   })(c = t.TextDocumentEdit || (t.TextDocumentEdit = {}));
   var l = function() {
    function e(e) {
     this.edits = e;
    }
    e.prototype.insert = function(e, t) {
     this.edits.push(u.insert(e, t));
    };
    e.prototype.replace = function(e, t) {
     this.edits.push(u.replace(e, t));
    };
    e.prototype.delete = function(e) {
     this.edits.push(u.del(e));
    };
    e.prototype.add = function(e) {
     this.edits.push(e);
    };
    e.prototype.all = function() {
     return this.edits;
    };
    e.prototype.clear = function() {
     this.edits.splice(0, this.edits.length);
    };
    return e;
   }();
   var f = function() {
    function e(e) {
     var t = this;
     this._textEditChanges = Object.create(null);
     if (e) {
      this._workspaceEdit = e;
      if (e.documentChanges) {
       e.documentChanges.forEach(function(e) {
        var n = new l(e.edits);
        t._textEditChanges[e.textDocument.uri] = n;
       });
      } else if (e.changes) {
       Object.keys(e.changes).forEach(function(n) {
        var r = new l(e.changes[n]);
        t._textEditChanges[n] = r;
       });
      }
     }
    }
    Object.defineProperty(e.prototype, "edit", {
     get: function() {
      return this._workspaceEdit;
     },
     enumerable: true,
     configurable: true
    });
    e.prototype.getTextEditChange = function(e) {
     if (h.is(e)) {
      if (!this._workspaceEdit) {
       this._workspaceEdit = {
        documentChanges: []
       };
      }
      if (!this._workspaceEdit.documentChanges) {
       throw new Error("Workspace edit is not configured for versioned document changes.");
      }
      var t = e;
      var n = this._textEditChanges[t.uri];
      if (!n) {
       var r = [];
       var i = {
        textDocument: t,
        edits: r
       };
       this._workspaceEdit.documentChanges.push(i);
       n = new l(r);
       this._textEditChanges[t.uri] = n;
      }
      return n;
     } else {
      if (!this._workspaceEdit) {
       this._workspaceEdit = {
        changes: Object.create(null)
       };
      }
      if (!this._workspaceEdit.changes) {
       throw new Error("Workspace edit is not configured for normal text edit changes.");
      }
      var n = this._textEditChanges[e];
      if (!n) {
       var r = [];
       this._workspaceEdit.changes[e] = r;
       n = new l(r);
       this._textEditChanges[e] = n;
      }
      return n;
     }
    };
    return e;
   }();
   t.WorkspaceChange = f;
   var d;
   (function(e) {
    function t(e) {
     return {
      uri: e
     };
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && N.string(t.uri);
    }
    e.is = n;
   })(d = t.TextDocumentIdentifier || (t.TextDocumentIdentifier = {}));
   var h;
   (function(e) {
    function t(e, t) {
     return {
      uri: e,
      version: t
     };
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && N.string(t.uri) && N.number(t.version);
    }
    e.is = n;
   })(h = t.VersionedTextDocumentIdentifier || (t.VersionedTextDocumentIdentifier = {}));
   var p;
   (function(e) {
    function t(e, t, n, r) {
     return {
      uri: e,
      languageId: t,
      version: n,
      text: r
     };
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && N.string(t.uri) && N.string(t.languageId) && N.number(t.version) && N.string(t.text);
    }
    e.is = n;
   })(p = t.TextDocumentItem || (t.TextDocumentItem = {}));
   var g;
   (function(e) {
    e.Text = 1;
    e.Method = 2;
    e.Function = 3;
    e.Constructor = 4;
    e.Field = 5;
    e.Variable = 6;
    e.Class = 7;
    e.Interface = 8;
    e.Module = 9;
    e.Property = 10;
    e.Unit = 11;
    e.Value = 12;
    e.Enum = 13;
    e.Keyword = 14;
    e.Snippet = 15;
    e.Color = 16;
    e.File = 17;
    e.Reference = 18;
   })(g = t.CompletionItemKind || (t.CompletionItemKind = {}));
   var m;
   (function(e) {
    e.PlainText = 1;
    e.Snippet = 2;
   })(m = t.InsertTextFormat || (t.InsertTextFormat = {}));
   var v;
   (function(e) {
    function t(e) {
     return {
      label: e
     };
    }
    e.create = t;
   })(v = t.CompletionItem || (t.CompletionItem = {}));
   var y;
   (function(e) {
    function t(e, t) {
     return {
      items: e ? e : [],
      isIncomplete: !!t
     };
    }
    e.create = t;
   })(y = t.CompletionList || (t.CompletionList = {}));
   var b;
   (function(e) {
    function t(e) {
     return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    e.fromPlainText = t;
   })(b = t.MarkedString || (t.MarkedString = {}));
   var w;
   (function(e) {
    function t(e, t) {
     return t ? {
      label: e,
      documentation: t
     } : {
      label: e
     };
    }
    e.create = t;
   })(w = t.ParameterInformation || (t.ParameterInformation = {}));
   var k;
   (function(e) {
    function t(e, t) {
     var n = [];
     for (var r = 2; r < arguments.length; r++) {
      n[r - 2] = arguments[r];
     }
     var i = {
      label: e
     };
     if (N.defined(t)) {
      i.documentation = t;
     }
     if (N.defined(n)) {
      i.parameters = n;
     } else {
      i.parameters = [];
     }
     return i;
    }
    e.create = t;
   })(k = t.SignatureInformation || (t.SignatureInformation = {}));
   var _;
   (function(e) {
    e.Text = 1;
    e.Read = 2;
    e.Write = 3;
   })(_ = t.DocumentHighlightKind || (t.DocumentHighlightKind = {}));
   var x;
   (function(e) {
    function t(e, t) {
     var n = {
      range: e
     };
     if (N.number(t)) {
      n.kind = t;
     }
     return n;
    }
    e.create = t;
   })(x = t.DocumentHighlight || (t.DocumentHighlight = {}));
   var R;
   (function(e) {
    e.File = 1;
    e.Module = 2;
    e.Namespace = 3;
    e.Package = 4;
    e.Class = 5;
    e.Method = 6;
    e.Property = 7;
    e.Field = 8;
    e.Constructor = 9;
    e.Enum = 10;
    e.Interface = 11;
    e.Function = 12;
    e.Variable = 13;
    e.Constant = 14;
    e.String = 15;
    e.Number = 16;
    e.Boolean = 17;
    e.Array = 18;
   })(R = t.SymbolKind || (t.SymbolKind = {}));
   var C;
   (function(e) {
    function t(e, t, n, r, i) {
     var o = {
      name: e,
      kind: t,
      location: {
       uri: r,
       range: n
      }
     };
     if (i) {
      o.containerName = i;
     }
     return o;
    }
    e.create = t;
   })(C = t.SymbolInformation || (t.SymbolInformation = {}));
   var T;
   (function(e) {
    function t(e) {
     return {
      diagnostics: e
     };
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && N.typedArray(t.diagnostics, a.is);
    }
    e.is = n;
   })(T = t.CodeActionContext || (t.CodeActionContext = {}));
   var E;
   (function(e) {
    function t(e, t) {
     var n = {
      range: e
     };
     if (N.defined(t)) n.data = t;
     return n;
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && r.is(t.range) && (N.undefined(t.command) || s.is(t.command));
    }
    e.is = n;
   })(E = t.CodeLens || (t.CodeLens = {}));
   var S;
   (function(e) {
    function t(e, t) {
     return {
      tabSize: e,
      insertSpaces: t
     };
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && N.number(t.tabSize) && N.boolean(t.insertSpaces);
    }
    e.is = n;
   })(S = t.FormattingOptions || (t.FormattingOptions = {}));
   var q = function() {
    function e() {}
    return e;
   }();
   t.DocumentLink = q;
   (function(e) {
    function t(e, t) {
     return {
      range: e,
      target: t
     };
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && r.is(t.range) && (N.undefined(t.target) || N.string(t.target));
    }
    e.is = n;
   })(q = t.DocumentLink || (t.DocumentLink = {}));
   t.DocumentLink = q;
   t.EOL = [ "\n", "\r\n", "\r" ];
   var O;
   (function(e) {
    function t(e, t, n, r) {
     return new j(e, t, n, r);
    }
    e.create = t;
    function n(e) {
     var t = e;
     return N.defined(t) && N.string(t.uri) && (N.undefined(t.languageId) || N.string(t.languageId)) && N.number(t.lineCount) && N.func(t.getText) && N.func(t.positionAt) && N.func(t.offsetAt) ? true : false;
    }
    e.is = n;
   })(O = t.TextDocument || (t.TextDocument = {}));
   var D;
   (function(e) {
    e.Manual = 1;
    e.AfterDelay = 2;
    e.FocusOut = 3;
   })(D = t.TextDocumentSaveReason || (t.TextDocumentSaveReason = {}));
   var j = function() {
    function e(e, t, n, r) {
     this._uri = e;
     this._languageId = t;
     this._version = n;
     this._content = r;
     this._lineOffsets = null;
    }
    Object.defineProperty(e.prototype, "uri", {
     get: function() {
      return this._uri;
     },
     enumerable: true,
     configurable: true
    });
    Object.defineProperty(e.prototype, "languageId", {
     get: function() {
      return this._languageId;
     },
     enumerable: true,
     configurable: true
    });
    Object.defineProperty(e.prototype, "version", {
     get: function() {
      return this._version;
     },
     enumerable: true,
     configurable: true
    });
    e.prototype.getText = function() {
     return this._content;
    };
    e.prototype.update = function(e, t) {
     this._content = e.text;
     this._version = t;
     this._lineOffsets = null;
    };
    e.prototype.getLineOffsets = function() {
     if (this._lineOffsets === null) {
      var e = [];
      var t = this._content;
      var n = true;
      for (var r = 0; r < t.length; r++) {
       if (n) {
        e.push(r);
        n = false;
       }
       var i = t.charAt(r);
       n = i === "\r" || i === "\n";
       if (i === "\r" && r + 1 < t.length && t.charAt(r + 1) === "\n") {
        r++;
       }
      }
      if (n && t.length > 0) {
       e.push(t.length);
      }
      this._lineOffsets = e;
     }
     return this._lineOffsets;
    };
    e.prototype.positionAt = function(e) {
     e = Math.max(Math.min(e, this._content.length), 0);
     var t = this.getLineOffsets();
     var r = 0, i = t.length;
     if (i === 0) {
      return n.create(0, e);
     }
     while (r < i) {
      var o = Math.floor((r + i) / 2);
      if (t[o] > e) {
       i = o;
      } else {
       r = o + 1;
      }
     }
     var a = r - 1;
     return n.create(a, e - t[a]);
    };
    e.prototype.offsetAt = function(e) {
     var t = this.getLineOffsets();
     if (e.line >= t.length) {
      return this._content.length;
     } else if (e.line < 0) {
      return 0;
     }
     var n = t[e.line];
     var r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
     return Math.max(Math.min(n + e.character, r), n);
    };
    Object.defineProperty(e.prototype, "lineCount", {
     get: function() {
      return this.getLineOffsets().length;
     },
     enumerable: true,
     configurable: true
    });
    return e;
   }();
   var N;
   (function(e) {
    var t = Object.prototype.toString;
    function n(e) {
     return typeof e !== "undefined";
    }
    e.defined = n;
    function r(e) {
     return typeof e === "undefined";
    }
    e.undefined = r;
    function i(e) {
     return e === true || e === false;
    }
    e.boolean = i;
    function o(e) {
     return t.call(e) === "[object String]";
    }
    e.string = o;
    function a(e) {
     return t.call(e) === "[object Number]";
    }
    e.number = a;
    function s(e) {
     return t.call(e) === "[object Function]";
    }
    e.func = s;
    function u(e, t) {
     return Array.isArray(e) && e.every(t);
    }
    e.typedArray = u;
   })(N || (N = {}));
  });
 },
 tAAh: function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var r;
  (function(e) {
   e.None = 0;
   e.First = 1;
   e.Last = 2;
  })(r = t.Touch || (t.Touch = {}));
  var i = function() {
   function e() {
    this._map = new Map();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
   }
   e.prototype.clear = function() {
    this._map.clear();
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
   };
   e.prototype.isEmpty = function() {
    return !this._head && !this._tail;
   };
   Object.defineProperty(e.prototype, "size", {
    get: function() {
     return this._size;
    },
    enumerable: true,
    configurable: true
   });
   e.prototype.has = function(e) {
    return this._map.has(e);
   };
   e.prototype.get = function(e) {
    var t = this._map.get(e);
    if (!t) {
     return undefined;
    }
    return t.value;
   };
   e.prototype.set = function(e, t, n) {
    if (n === void 0) {
     n = r.None;
    }
    var i = this._map.get(e);
    if (i) {
     i.value = t;
     if (n !== r.None) {
      this.touch(i, n);
     }
    } else {
     i = {
      key: e,
      value: t,
      next: undefined,
      previous: undefined
     };
     switch (n) {
     case r.None:
      this.addItemLast(i);
      break;

     case r.First:
      this.addItemFirst(i);
      break;

     case r.Last:
      this.addItemLast(i);
      break;

     default:
      this.addItemLast(i);
      break;
     }
     this._map.set(e, i);
     this._size++;
    }
   };
   e.prototype.delete = function(e) {
    var t = this._map.get(e);
    if (!t) {
     return false;
    }
    this._map.delete(e);
    this.removeItem(t);
    this._size--;
    return true;
   };
   e.prototype.shift = function() {
    if (!this._head && !this._tail) {
     return undefined;
    }
    if (!this._head || !this._tail) {
     throw new Error("Invalid list");
    }
    var e = this._head;
    this._map.delete(e.key);
    this.removeItem(e);
    this._size--;
    return e.value;
   };
   e.prototype.forEach = function(e, t) {
    var n = this._head;
    while (n) {
     if (t) {
      e.bind(t)(n.value, n.key, this);
     } else {
      e(n.value, n.key, this);
     }
     n = n.next;
    }
   };
   e.prototype.forEachReverse = function(e, t) {
    var n = this._tail;
    while (n) {
     if (t) {
      e.bind(t)(n.value, n.key, this);
     } else {
      e(n.value, n.key, this);
     }
     n = n.previous;
    }
   };
   e.prototype.values = function() {
    var e = [];
    var t = this._head;
    while (t) {
     e.push(t.value);
     t = t.next;
    }
    return e;
   };
   e.prototype.keys = function() {
    var e = [];
    var t = this._head;
    while (t) {
     e.push(t.key);
     t = t.next;
    }
    return e;
   };
   e.prototype.addItemFirst = function(e) {
    if (!this._head && !this._tail) {
     this._tail = e;
    } else if (!this._head) {
     throw new Error("Invalid list");
    } else {
     e.next = this._head;
     this._head.previous = e;
    }
    this._head = e;
   };
   e.prototype.addItemLast = function(e) {
    if (!this._head && !this._tail) {
     this._head = e;
    } else if (!this._tail) {
     throw new Error("Invalid list");
    } else {
     e.previous = this._tail;
     this._tail.next = e;
    }
    this._tail = e;
   };
   e.prototype.removeItem = function(e) {
    if (e === this._head && e === this._tail) {
     this._head = undefined;
     this._tail = undefined;
    } else if (e === this._head) {
     this._head = e.next;
    } else if (e === this._tail) {
     this._tail = e.previous;
    } else {
     var t = e.next;
     var n = e.previous;
     if (!t || !n) {
      throw new Error("Invalid list");
     }
     t.previous = n;
     n.next = t;
    }
   };
   e.prototype.touch = function(e, t) {
    if (!this._head || !this._tail) {
     throw new Error("Invalid list");
    }
    if (t !== r.First && t !== r.Last) {
     return;
    }
    if (t === r.First) {
     if (e === this._head) {
      return;
     }
     var n = e.next;
     var i = e.previous;
     if (e === this._tail) {
      i.next = undefined;
      this._tail = i;
     } else {
      n.previous = i;
      i.next = n;
     }
     e.previous = undefined;
     e.next = this._head;
     this._head.previous = e;
     this._head = e;
    } else if (t === r.Last) {
     if (e === this._tail) {
      return;
     }
     var n = e.next;
     var i = e.previous;
     if (e === this._head) {
      n.previous = undefined;
      this._head = n;
     } else {
      n.previous = i;
      i.next = n;
     }
     e.next = undefined;
     e.previous = this._tail;
     this._tail.next = e;
     this._tail = e;
    }
   };
   return e;
  }();
  t.LinkedMap = i;
 },
 uJGL: function(e, t) {
  var n = new RegExp("([^\n\\.;!?]+)([\\.;!?]+)", "gi");
  var r = new RegExp("^(\\s)*so\\b[\\s\\S]", "i");
  e.exports = function(e) {
   var t = [];
   var i, o;
   while (i = n.exec(e)) {
    if (o = r.exec(i[1])) {
     t.push({
      index: i.index + (o[1] || "").length,
      offset: 2
     });
    }
   }
   return t;
  };
 },
 v61W: function(e, t) {
  var n = Object.prototype.hasOwnProperty;
  var r = Object.prototype.toString;
  e.exports = function e(t, i, o) {
   if (r.call(i) !== "[object Function]") {
    throw new TypeError("iterator must be a function");
   }
   var a = t.length;
   if (a === +a) {
    for (var s = 0; s < a; s++) {
     i.call(o, t[s], s, t);
    }
   } else {
    for (var u in t) {
     if (n.call(t, u)) {
      i.call(o, t[u], u, t);
     }
    }
   }
  };
 },
 wPMy: function(e, t, n) {
  "use strict";
  var r = this && this.__awaiter || function(e, t, n, r) {
   return new (n || (n = Promise))(function(i, o) {
    function a(e) {
     try {
      u(r.next(e));
     } catch (e) {
      o(e);
     }
    }
    function s(e) {
     try {
      u(r["throw"](e));
     } catch (e) {
      o(e);
     }
    }
    function u(e) {
     e.done ? i(e.value) : new n(function(t) {
      t(e.value);
     }).then(a, s);
    }
    u((r = r.apply(e, t || [])).next());
   });
  };
  var i = this && this.__generator || function(e, t) {
   var n = {
    label: 0,
    sent: function() {
     if (o[0] & 1) throw o[1];
     return o[1];
    },
    trys: [],
    ops: []
   }, r, i, o, a;
   return a = {
    next: s(0),
    throw: s(1),
    return: s(2)
   }, typeof Symbol === "function" && (a[Symbol.iterator] = function() {
    return this;
   }), a;
   function s(e) {
    return function(t) {
     return u([ e, t ]);
    };
   }
   function u(a) {
    if (r) throw new TypeError("Generator is already executing.");
    while (n) try {
     if (r = 1, i && (o = i[a[0] & 2 ? "return" : a[0] ? "throw" : "next"]) && !(o = o.call(i, a[1])).done) return o;
     if (i = 0, o) a = [ 0, o.value ];
     switch (a[0]) {
     case 0:
     case 1:
      o = a;
      break;

     case 4:
      n.label++;
      return {
       value: a[1],
       done: false
      };

     case 5:
      n.label++;
      i = a[1];
      a = [ 0 ];
      continue;

     case 7:
      a = n.ops.pop();
      n.trys.pop();
      continue;

     default:
      if (!(o = n.trys, o = o.length > 0 && o[o.length - 1]) && (a[0] === 6 || a[0] === 2)) {
       n = 0;
       continue;
      }
      if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
       n.label = a[1];
       break;
      }
      if (a[0] === 6 && n.label < o[1]) {
       n.label = o[1];
       o = a;
       break;
      }
      if (o && n.label < o[2]) {
       n.label = o[2];
       n.ops.push(a);
       break;
      }
      if (o[2]) n.ops.pop();
      n.trys.pop();
      continue;
     }
     a = t.call(e, n);
    } catch (e) {
     a = [ 6, e ];
     i = 0;
    } finally {
     r = o = 0;
    }
    if (a[0] & 5) throw a[1];
    return {
     value: a[0] ? a[1] : void 0,
     done: true
    };
   }
  };
  var o = this;
  Object.defineProperty(t, "__esModule", {
   value: true
  });
  var a = n("1Ehp");
  var s = n("kmEW");
  var u = a.createConnection();
  console.log = u.console.log.bind(u.console);
  console.error = u.console.error.bind(u.console);
  var c = new a.TextDocuments();
  c.listen(u);
  u.onInitialize(function(e) {
   var t = {
    textDocumentSync: c.syncKind,
    hoverProvider: true,
    definitionProvider: true
   };
   return {
    capabilities: t
   };
  });
  var l = {};
  var f = n("pVa5");
  c.onDidChangeContent(function(e) {
   process.stderr.write("TESTING");
   var t = f(e.document.getText());
   process.stderr.write(e.document.getText());
   var n = t.map(function(t) {
    var n = e.document.positionAt(t.index);
    var r = {
     message: t.reason,
     range: s.Range.create(n.line, n.character, n.line, n.character + t.offset)
    };
    return r;
   });
   process.stderr.write("SUGGESTIONS: " + JSON.stringify(t));
   process.stderr.write("DIAGNOSTICS:" + JSON.stringify(n));
   u.sendDiagnostics({
    uri: e.document.uri,
    diagnostics: n
   });
  });
  u.onHover(function(e) {
   return r(o, void 0, void 0, function() {
    var t;
    return i(this, function(n) {
     t = c.get(e.textDocument.uri);
     throw "No content";
    });
   });
  });
  u.listen();
 },
 yLpt: function(e, t, n) {
  "use strict";
  var r = n("FufO");
  var i = function() {
   if (!Object.assign) {
    return false;
   }
   var e = "abcdefghijklmnopqrst";
   var t = e.split("");
   var n = {};
   for (var r = 0; r < t.length; ++r) {
    n[t[r]] = t[r];
   }
   var i = Object.assign({}, n);
   var o = "";
   for (var a in i) {
    o += a;
   }
   return e !== o;
  };
  var o = function() {
   if (!Object.assign || !Object.preventExtensions) {
    return false;
   }
   var e = Object.preventExtensions({
    1: 2
   });
   try {
    Object.assign(e, "xy");
   } catch (t) {
    return e[1] === "y";
   }
   return false;
  };
  e.exports = function e() {
   if (!Object.assign) {
    return r;
   }
   if (i()) {
    return r;
   }
   if (o()) {
    return r;
   }
   return Object.assign;
  };
 }
});