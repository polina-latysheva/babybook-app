SystemJS.config({
  devConfig: {
    'map': {
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.10',
      'babel-preset-react': 'npm:babel-preset-react@6.11.1',
      'react-addons-test-utils': 'npm:react-addons-test-utils@15.3.0'
    },
    'packages': {
      'npm:babel-preset-react@6.11.1': {
        'map': {
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.13.0',
          'babel-plugin-transform-react-jsx-source': 'npm:babel-plugin-transform-react-jsx-source@6.9.0',
          'babel-plugin-transform-react-display-name': 'npm:babel-plugin-transform-react-display-name@6.8.0',
          'babel-plugin-transform-react-jsx': 'npm:babel-plugin-transform-react-jsx@6.8.0',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.13.0',
          'babel-plugin-transform-react-jsx-self': 'npm:babel-plugin-transform-react-jsx-self@6.11.0',
          'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.8.0'
        }
      },
      'npm:babel-plugin-transform-react-display-name@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-transform-react-jsx@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.13.0',
          'babel-helper-builder-react-jsx': 'npm:babel-helper-builder-react-jsx@6.9.0'
        }
      },
      'npm:babel-plugin-transform-react-jsx-source@6.9.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.13.0'
        }
      },
      'npm:babel-plugin-transform-react-jsx-self@6.11.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.13.0'
        }
      },
      'npm:babel-plugin-transform-flow-strip-types@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.13.0'
        }
      },
      'npm:babel-helper-builder-react-jsx@6.9.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.13.0',
          'lodash': 'npm:lodash@4.15.0',
          'esutils': 'npm:esutils@2.0.2'
        }
      }
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'js'
    }
  },
  transpiler: 'plugin-babel',
  babelOptions: {
    'presets': [
      'babel-preset-react'
    ]
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'babel': 'npm:babel-core@6.13.2',
    'babel-polyfill': 'npm:babel-polyfill@6.13.0',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'classnames': 'npm:classnames@2.2.5',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'css': 'github:systemjs/plugin-css@0.1.26',
    'domain': 'github:jspm/nodelibs-domain@0.2.0-alpha',
    'es6-shim': 'npm:es6-shim@0.35.1',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'https': 'github:jspm/nodelibs-https@0.2.0-alpha',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'react': 'npm:react@15.3.0',
    'react-dom': 'npm:react-dom@15.3.0',
    'react-redux': 'npm:react-redux@4.4.5',
    'react-router': 'npm:react-router@2.6.1',
    'redux': 'npm:redux@3.5.2',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'todomvc-app-css': 'npm:todomvc-app-css@2.0.6',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'zlib': 'github:jspm/nodelibs-zlib@0.2.0-alpha'
  },
  packages: {
    'npm:react@15.3.0': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0',
        'object-assign': 'npm:object-assign@4.1.0',
        'fbjs': 'npm:fbjs@0.8.3'
      }
    },
    'npm:react-router@2.6.1': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0',
        'hoist-non-react-statics': 'npm:hoist-non-react-statics@1.2.0',
        'history': 'npm:history@2.1.2',
        'warning': 'npm:warning@3.0.0',
        'invariant': 'npm:invariant@2.2.1'
      }
    },
    'npm:react-redux@4.4.5': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0',
        'hoist-non-react-statics': 'npm:hoist-non-react-statics@1.2.0',
        'lodash': 'npm:lodash@4.15.0',
        'invariant': 'npm:invariant@2.2.1'
      }
    },
    'npm:redux@3.5.2': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0',
        'lodash': 'npm:lodash@4.15.0',
        'lodash-es': 'npm:lodash-es@4.15.0',
        'symbol-observable': 'npm:symbol-observable@0.2.4'
      }
    },
    'npm:babel-polyfill@6.13.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'regenerator-runtime': 'npm:regenerator-runtime@0.9.5',
        'core-js': 'npm:core-js@2.4.1'
      }
    },
    'npm:babel-core@6.13.2': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'lodash': 'npm:lodash@4.15.0',
        'babel-traverse': 'npm:babel-traverse@6.13.0',
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-code-frame': 'npm:babel-code-frame@6.11.0',
        'babel-generator': 'npm:babel-generator@6.11.4',
        'babel-register': 'npm:babel-register@6.11.6',
        'babel-helpers': 'npm:babel-helpers@6.8.0',
        'babel-template': 'npm:babel-template@6.9.0',
        'slash': 'npm:slash@1.0.0',
        'source-map': 'npm:source-map@0.5.6',
        'babylon': 'npm:babylon@6.9.0',
        'path-is-absolute': 'npm:path-is-absolute@1.0.0',
        'convert-source-map': 'npm:convert-source-map@1.3.0',
        'private': 'npm:private@0.1.6',
        'babel-types': 'npm:babel-types@6.13.0',
        'minimatch': 'npm:minimatch@3.0.3',
        'path-exists': 'npm:path-exists@1.0.0',
        'json5': 'npm:json5@0.4.0',
        'shebang-regex': 'npm:shebang-regex@1.0.0',
        'debug': 'npm:debug@2.2.0'
      }
    },
    'npm:fbjs@0.8.3': {
      'map': {
        'core-js': 'npm:core-js@1.2.7',
        'loose-envify': 'npm:loose-envify@1.2.0',
        'object-assign': 'npm:object-assign@4.1.0',
        'promise': 'npm:promise@7.1.1',
        'immutable': 'npm:immutable@3.8.1',
        'isomorphic-fetch': 'npm:isomorphic-fetch@2.2.1',
        'ua-parser-js': 'npm:ua-parser-js@0.7.10'
      }
    },
    'npm:history@2.1.2': {
      'map': {
        'warning': 'npm:warning@2.1.0',
        'invariant': 'npm:invariant@2.2.1',
        'deep-equal': 'npm:deep-equal@1.0.1',
        'query-string': 'npm:query-string@3.0.3'
      }
    },
    'npm:warning@3.0.0': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0'
      }
    },
    'npm:babel-register@6.11.6': {
      'map': {
        'babel-core': 'npm:babel-core@6.13.2',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'core-js': 'npm:core-js@2.4.1',
        'lodash': 'npm:lodash@4.15.0',
        'path-exists': 'npm:path-exists@1.0.0',
        'home-or-tmp': 'npm:home-or-tmp@1.0.0',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'source-map-support': 'npm:source-map-support@0.2.10'
      }
    },
    'npm:babel-runtime@6.11.6': {
      'map': {
        'core-js': 'npm:core-js@2.4.1',
        'regenerator-runtime': 'npm:regenerator-runtime@0.9.5'
      }
    },
    'npm:babel-generator@6.11.4': {
      'map': {
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-types': 'npm:babel-types@6.13.0',
        'lodash': 'npm:lodash@4.15.0',
        'source-map': 'npm:source-map@0.5.6',
        'detect-indent': 'npm:detect-indent@3.0.1'
      }
    },
    'npm:babel-messages@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6'
      }
    },
    'npm:babel-code-frame@6.11.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'chalk': 'npm:chalk@1.1.3',
        'js-tokens': 'npm:js-tokens@2.0.0',
        'esutils': 'npm:esutils@2.0.2'
      }
    },
    'npm:babel-traverse@6.13.0': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.11.0',
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-types': 'npm:babel-types@6.13.0',
        'babylon': 'npm:babylon@6.9.0',
        'invariant': 'npm:invariant@2.2.1',
        'lodash': 'npm:lodash@4.15.0',
        'debug': 'npm:debug@2.2.0',
        'globals': 'npm:globals@8.18.0'
      }
    },
    'npm:babel-helpers@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-template': 'npm:babel-template@6.9.0'
      }
    },
    'npm:babel-template@6.9.0': {
      'map': {
        'babel-traverse': 'npm:babel-traverse@6.13.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babylon': 'npm:babylon@6.9.0',
        'babel-types': 'npm:babel-types@6.13.0',
        'lodash': 'npm:lodash@4.15.0'
      }
    },
    'npm:invariant@2.2.1': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0'
      }
    },
    'npm:babel-types@6.13.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-traverse': 'npm:babel-traverse@6.13.0',
        'lodash': 'npm:lodash@4.15.0',
        'esutils': 'npm:esutils@2.0.2',
        'to-fast-properties': 'npm:to-fast-properties@1.0.2'
      }
    },
    'npm:babylon@6.9.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6'
      }
    },
    'npm:loose-envify@1.2.0': {
      'map': {
        'js-tokens': 'npm:js-tokens@1.0.3'
      }
    },
    'npm:warning@2.1.0': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0'
      }
    },
    'npm:minimatch@3.0.3': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.6'
      }
    },
    'npm:source-map-support@0.2.10': {
      'map': {
        'source-map': 'npm:source-map@0.1.32'
      }
    },
    'npm:debug@2.2.0': {
      'map': {
        'ms': 'npm:ms@0.7.1'
      }
    },
    'npm:detect-indent@3.0.1': {
      'map': {
        'minimist': 'npm:minimist@1.2.0',
        'get-stdin': 'npm:get-stdin@4.0.1',
        'repeating': 'npm:repeating@1.1.3'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:isomorphic-fetch@2.2.1': {
      'map': {
        'node-fetch': 'npm:node-fetch@1.6.0',
        'whatwg-fetch': 'npm:whatwg-fetch@1.0.0'
      }
    },
    'npm:home-or-tmp@1.0.0': {
      'map': {
        'user-home': 'npm:user-home@1.1.1',
        'os-tmpdir': 'npm:os-tmpdir@1.0.1'
      }
    },
    'npm:promise@7.1.1': {
      'map': {
        'asap': 'npm:asap@2.0.4'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'has-ansi': 'npm:has-ansi@2.0.0',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'supports-color': 'npm:supports-color@2.0.0'
      }
    },
    'npm:brace-expansion@1.1.6': {
      'map': {
        'balanced-match': 'npm:balanced-match@0.4.2',
        'concat-map': 'npm:concat-map@0.0.1'
      }
    },
    'npm:query-string@3.0.3': {
      'map': {
        'strict-uri-encode': 'npm:strict-uri-encode@1.1.0'
      }
    },
    'npm:source-map@0.1.32': {
      'map': {
        'amdefine': 'npm:amdefine@1.0.0'
      }
    },
    'npm:node-fetch@1.6.0': {
      'map': {
        'is-stream': 'npm:is-stream@1.1.0',
        'encoding': 'npm:encoding@0.1.12'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:repeating@1.1.3': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.1'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.0'
      }
    },
    'npm:is-finite@1.0.1': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.0'
      }
    },
    'npm:encoding@0.1.12': {
      'map': {
        'iconv-lite': 'npm:iconv-lite@0.4.13'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:buffer@4.9.0': {
      'map': {
        'ieee754': 'npm:ieee754@1.1.6',
        'base64-js': 'npm:base64-js@1.1.2',
        'isarray': 'npm:isarray@1.0.0'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'readable-stream': 'npm:readable-stream@2.1.4'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.3.1'
      }
    },
    'npm:readable-stream@2.1.4': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'inherits': 'npm:inherits@2.0.1',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2'
      }
    },
    'npm:stream-http@2.3.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'readable-stream': 'npm:readable-stream@2.1.4',
        'xtend': 'npm:xtend@4.0.1',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
        'builtin-status-codes': 'npm:builtin-status-codes@2.0.0'
      }
    },
    'github:jspm/nodelibs-domain@0.2.0-alpha': {
      'map': {
        'domain-browserify': 'npm:domain-browser@1.1.7'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'github:jspm/nodelibs-zlib@0.2.0-alpha': {
      'map': {
        'zlib-browserify': 'npm:browserify-zlib@0.1.4'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'querystring': 'npm:querystring@0.2.0',
        'punycode': 'npm:punycode@1.3.2'
      }
    },
    'npm:browserify-zlib@0.1.4': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.1.4',
        'pako': 'npm:pako@0.2.9'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'randombytes': 'npm:randombytes@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'browserify-sign': 'npm:browserify-sign@4.0.0'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'miller-rabin': 'npm:miller-rabin@4.0.0'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'bn.js': 'npm:bn.js@4.11.6',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'elliptic': 'npm:elliptic@6.3.1'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'sha.js': 'npm:sha.js@2.4.5'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1'
      }
    },
    'npm:pbkdf2@3.0.4': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.3.1'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'browserify-des': 'npm:browserify-des@1.0.0'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.5'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:cipher-base@1.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.2',
        'inherits': 'npm:inherits@2.0.1',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'asn1.js': 'npm:asn1.js@4.8.0'
      }
    },
    'npm:elliptic@6.3.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.1',
        'brorand': 'npm:brorand@1.0.5',
        'hash.js': 'npm:hash.js@1.0.3'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:asn1.js@4.8.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    }
  }
});
