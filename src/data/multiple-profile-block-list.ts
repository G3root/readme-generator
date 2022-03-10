// https://github.com/rahuldkjain/github-profile-readme-generator/blob/master/src/constants/skills.js

import { Category, Block, BlockType } from '~/types'
import dedent from 'ts-dedent'

const categorizedSkills = {
  language: {
    title: 'Programming Languages',
    skills: [
      {
        name: 'C',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
        url: 'https://www.cprogramming.com/',
      },
      {
        name: 'C++',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
        url: 'https://www.w3schools.com/cpp/',
      },
      {
        name: 'C#',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
        url: 'https://www.w3schools.com/cs/',
      },
      {
        name: 'Go',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
        url: 'https://golang.org',
      },
      {
        name: 'Java',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
        url: 'https://www.java.com',
      },
      {
        name: 'JavaScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'TypeScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
        url: 'https://www.typescriptlang.org/',
      },
      {
        name: 'PHP',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
        url: 'https://www.php.net',
      },
      {
        name: 'Perl',
        icon: 'https://api.iconify.design/logos-perl.svg',
        url: 'https://www.perl.org/',
      },
      {
        name: 'Ruby',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg',
        url: 'https://www.ruby-lang.org/en/',
      },
      {
        name: 'Scala',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg',
        url: 'https://www.scala-lang.org',
      },
      {
        name: 'Python',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
        url: 'https://www.python.org',
      },
      {
        name: 'Swift',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg',
        url: 'https://developer.apple.com/swift/',
      },
      {
        name: 'Objective-C',
        icon: 'https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg',
        url: 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html',
      },
      {
        name: 'Clojure',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg',
        url: 'https://clojure.org/',
      },
      {
        name: 'Rust',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg',
        url: 'https://www.rust-lang.org',
      },
      {
        name: 'Haskell',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg',
        url: 'https://www.haskell.org/',
      },
      {
        name: 'CoffeeScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/coffeescript/coffeescript-original-wordmark.svg',
        url: 'https://offeescript.org',
      },
      {
        name: 'Elixir',
        icon: 'https://www.vectorlogo.zone/logos/elixir-lang/elixir-lang-icon.svg',
        url: 'https://elixir-lang.org',
      },
      {
        name: 'Erlang',
        icon: 'https://www.vectorlogo.zone/logos/erlang/erlang-official.svg',
        url: 'https://www.erlang.org/',
      },
      {
        name: 'Nim',
        icon: 'https://www.vectorlogo.zone/logos/nim-lang/nim-lang-icon.svg',
        url: 'https://nim-lang.org/',
      },
      {
        name: 'Zig',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/zig/zig-original.svg',
        url: 'https://ziglang.org/',
      },
    ],
  },
  frontend_dev: {
    title: 'Frontend Development',
    skills: [
      {
        name: 'Vue',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
        url: 'https://vuejs.org/',
      },
      {
        name: 'React',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
        url: 'https://reactjs.org/',
      },
      {
        name: 'Svelte',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
        url: 'https://svelte.dev',
      },
      {
        name: 'Angular.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg',
        url: 'https://angular.io',
      },
      {
        name: 'Angular',
        icon: 'https://angular.io/assets/images/logos/angular/angular.svg',
        url: 'https://angular.io',
      },
      {
        name: 'Backbone.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/backbonejs/backbonejs-original-wordmark.svg',
        url: 'https://backbonejs.org',
      },
      {
        name: 'Bootstrap',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
        url: 'https://getbootstrap.com',
      },
      {
        name: 'Vuetify',
        icon: 'https://bestofjs.org/logos/vuetify.svg',
        url: 'https://vuetifyjs.com/en/',
      },
      {
        name: 'Css3',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
        url: 'https://www.w3schools.com/css/',
      },
      {
        name: 'Html5',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
        url: 'https://www.w3.org/html/',
      },
      {
        name: 'Pug',
        icon: 'https://cdn.worldvectorlogo.com/logos/pug.svg',
        url: 'https://pugjs.org',
      },
      {
        name: 'Gulp',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg',
        url: 'https://gulpjs.com',
      },
      {
        name: 'Sass',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
        url: 'https://sass-lang.com',
      },
      {
        name: 'Redux',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
        url: 'https://redux.js.org',
      },
      {
        name: 'Webpack',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg',
        url: 'https://webpack.js.org',
      },
      {
        name: 'Babel',
        icon: 'https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg',
        url: 'https://babeljs.io/',
      },
      {
        name: 'TailWind',
        icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
        url: 'https://tailwindcss.com/',
      },
      {
        name: 'Materialize',
        icon: 'https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg',
        url: 'https://materializecss.com/',
      },
      {
        name: 'Bulma',
        icon: 'https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg',
        url: 'https://bulma.io/',
      },
      {
        name: 'GTK',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg',
        url: 'https://www.gtk.org/',
      },
      {
        name: 'QT',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg',
        url: 'https://www.qt.io/',
      },
      {
        name: 'WX Widgets',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg',
        url: 'https://www.wxwidgets.org/',
      },
      {
        name: 'Ember',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ember/ember-original-wordmark.svg',
        url: 'https://emberjs.com/',
      },
    ],
  },
  backend_dev: {
    title: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
        url: 'https://nodejs.org',
      },
      {
        name: 'Spring',
        icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg',
        url: 'https://spring.io/',
      },
      {
        name: 'Express',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
        url: 'https://expressjs.com',
      },
      {
        name: 'Graphql',
        icon: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg',
        url: 'https://graphql.org',
      },
      {
        name: 'Kafka',
        icon: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg',
        url: 'https://kafka.apache.org/',
      },
      {
        name: 'Solr',
        icon: 'https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg',
        url: 'https://lucene.apache.org/solr/',
      },
      {
        name: 'RabbitMQ',
        icon: 'https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg',
        url: 'https://www.rabbitmq.com',
      },
      {
        name: 'Hadoop',
        icon: 'https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg',
        url: 'https://hadoop.apache.org/',
      },
      {
        name: 'Nginx',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg',
        url: 'https://www.nginx.com',
      },
      {
        name: 'Nestjs',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg',
        url: 'https://nestjs.com/',
      },
    ],
  },
  mobile_dev: {
    title: 'Mobile App Development',
    skills: [
      {
        name: 'Android',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg',
        url: 'https://developer.android.com',
      },
      {
        name: 'Flutter',
        icon: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg',
        url: 'https://flutter.dev',
      },
      {
        name: 'Dart',
        icon: 'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg',
        url: 'https://dart.dev',
      },
      {
        name: 'Kotlin',
        icon: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
        url: 'https://kotlinlang.org',
      },
      {
        name: 'Native Script',
        icon: 'https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg',
        url: 'https://nativescript.org/',
      },
      {
        name: 'Xamarin',
        icon: 'https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg',
        url: 'https://dotnet.microsoft.com/apps/xamarin',
      },
      {
        name: 'React Native',
        icon: 'https://reactnative.dev/img/header_logo.svg',
        url: 'https://reactnative.dev/',
      },
      {
        name: 'Ionic',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg',
        url: 'https://ionicframework.com',
      },
      {
        name: 'Apache Cordova',
        icon: 'https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg',
        url: 'https://cordova.apache.org/',
      },
    ],
  },
  ai: {
    title: 'AI/ML',
    skills: [
      {
        name: 'TensorFlow',
        icon: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
        url: 'https://www.tensorflow.org',
      },
      {
        name: 'PyTorch',
        icon: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg',
        url: 'https://pytorch.org/',
      },
      {
        name: 'Pandas',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg',
        url: 'https://pandas.pydata.org/',
      },
      {
        name: 'Seaborn',
        icon: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg',
        url: 'https://seaborn.pydata.org/',
      },
      {
        name: 'OpenCV',
        icon: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg',
        url: 'https://opencv.org/',
      },
      {
        name: 'Scikit Learn',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
        url: 'https://scikit-learn.org/',
      },
    ],
  },
  database: {
    title: 'Database',
    skills: [
      {
        name: 'MongoDB',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
        url: 'https://www.mongodb.com/',
      },
      {
        name: 'MySQL',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
        url: 'https://www.mysql.com/',
      },
      {
        name: 'PostgreSQL',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
        url: 'https://www.postgresql.org',
      },
      {
        name: 'Redis',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg',
        url: 'https://redis.io',
      },
      {
        name: 'Oracle',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg',
        url: 'https://www.oracle.com/',
      },
      {
        name: 'Cassandra',
        icon: 'https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg',
        url: 'https://cassandra.apache.org/',
      },
      {
        name: 'CouchDB',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg',
        url: 'https://couchdb.apache.org/',
      },
      {
        name: 'Hive',
        icon: 'https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg',
        url: 'https://hive.apache.org/',
      },
      {
        name: 'Realm',
        icon: 'https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg',
        url: 'https://realm.io/',
      },
      {
        name: 'MariaDB',
        icon: 'https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg',
        url: 'https://mariadb.org/',
      },
      {
        name: 'CockroachDB',
        icon: 'https://cdn.worldvectorlogo.com/logos/cockroachdb.svg',
        url: 'https://www.cockroachlabs.com/product/cockroachdb/',
      },
      {
        name: 'Elasticsearch',
        icon: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg',
        url: 'https://www.elastic.co',
      },
      {
        name: 'SQLite',
        icon: 'https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg',
        url: 'https://www.sqlite.org/',
      },
      {
        name: 'MsSQL',
        icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
        url: 'https://www.microsoft.com/en-us/sql-server',
      },
    ],
  },
  data_visualization: {
    title: 'Data Visualization',
    skills: [
      {
        name: 'D3.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg',
        url: 'https://d3js.org/',
      },
      {
        name: 'Chart.js',
        icon: 'https://www.chartjs.org/media/logo-title.svg',
        url: 'https://www.chartjs.org',
      },
      {
        name: 'Canvas.js',
        icon: 'https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg',
        url: 'https://canvasjs.com',
      },
      {
        name: 'Kibana',
        icon: 'https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg',
        url: 'https://www.elastic.co/kibana',
      },
      {
        name: 'Grafana',
        icon: 'https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg',
        url: 'https://grafana.com',
      },
    ],
  },
  devops: {
    title: 'Devops',
    skills: [
      {
        name: 'AWS',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        url: 'https://aws.amazon.com',
      },
      {
        name: 'Docker',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
        url: 'https://www.docker.com/',
      },
      {
        name: 'Jenkins',
        icon: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg',
        url: 'https://www.jenkins.io',
      },
      {
        name: 'GCP',
        icon: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        url: 'https://cloud.google.com',
      },
      {
        name: 'Kubernetes',
        icon: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
        url: 'https://kubernetes.io',
      },
      {
        name: 'Bash',
        icon: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
        url: 'https://www.gnu.org/software/bash/',
      },
      {
        name: 'Azure',
        icon: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg',
        url: 'https://azure.microsoft.com/en-in/',
      },
      {
        name: 'Vagrant',
        icon: 'https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg',
        url: 'https://www.vagrantup.com/',
      },
      {
        name: 'CircleCI',
        icon: 'https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg',
        url: 'https://circleci.com',
      },
      {
        name: 'TravisCI',
        icon: 'https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg',
        url: 'https://travis-ci.org',
      },
    ],
  },
  baas: {
    title: 'Backend as a Service(BaaS)',
    skills: [
      {
        name: 'Firebase',
        icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
        url: 'https://firebase.google.com/',
      },
      {
        name: 'AppWrite',
        icon: 'https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg',
        url: 'https://appwrite.io',
      },
      {
        name: 'Amplify',
        icon: 'https://docs.amplify.aws/assets/logo-dark.svg',
        url: 'https://aws.amazon.com/amplify/',
      },
      {
        name: 'Heroku',
        icon: 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg',
        url: 'https://heroku.com',
      },
    ],
  },
  framework: {
    title: 'Framework',
    skills: [
      {
        name: 'Django',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg',
        url: 'https://www.djangoproject.com/',
      },
      {
        name: 'Dotnet',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg',
        url: 'https://dotnet.microsoft.com/',
      },
      {
        name: 'Electron',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg',
        url: 'https://www.electronjs.org',
      },
      {
        name: 'Symfony',
        icon: 'https://symfony.com/logos/symfony_black_03.svg',
        url: 'https://symfony.com',
      },
      {
        name: 'Laravel',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg',
        url: 'https://laravel.com/',
      },
      {
        name: 'Codeigniter',
        icon: 'https://cdn.worldvectorlogo.com/logos/codeigniter.svg',
        url: 'https://codeigniter.com',
      },
      {
        name: 'Rails',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg',
        url: 'https://rubyonrails.org',
      },
      {
        name: 'Flask',
        icon: 'https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg',
        url: 'https://flask.palletsprojects.com/',
      },
      {
        name: 'Quasar',
        icon: 'https://cdn.quasar.dev/logo/svg/quasar-logo.svg',
        url: 'https://quasar.dev/',
      },
    ],
  },
  testing: {
    title: 'Testing',
    skills: [
      {
        name: 'Cypress',
        icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg',
        url: 'https://www.cypress.io',
      },
      {
        name: 'Selenium',
        icon: 'https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg',
        url: 'https://www.selenium.dev',
      },
      {
        name: 'Jest',
        icon: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg',
        url: 'https://jestjs.io',
      },
      {
        name: 'Mocha',
        icon: 'https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg',
        url: 'https://mochajs.org',
      },
      {
        name: 'Puppeteer',
        icon: 'https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg',
        url: 'https://github.com/puppeteer/puppeteer',
      },
      {
        name: 'Karma',
        icon: 'https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg',
        url: 'https://karma-runner.github.io/latest/index.html',
      },
      {
        name: 'Jasmine',
        icon: 'https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg',
        url: 'https://jasmine.github.io/',
      },
    ],
  },
  software: {
    title: 'Software',
    skills: [
      {
        name: 'Illustrator',
        icon: 'https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg',
        url: 'https://www.adobe.com/in/products/illustrator.html',
      },
      {
        name: 'Photoshop',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg',
        url: 'https://www.photoshop.com/en',
      },
      {
        name: 'Xd',
        icon: 'https://cdn.worldvectorlogo.com/logos/adobe-xd.svg',
        url: 'https://www.adobe.com/products/xd.html',
      },
      {
        name: 'Figma',
        icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
        url: 'https://www.figma.com/',
      },
      {
        name: 'Blender',
        icon: 'https://download.blender.org/branding/community/blender_community_badge_white.svg',
        url: 'https://www.blender.org/',
      },
      {
        name: 'Sketch',
        icon: 'https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg',
        url: 'https://www.sketch.com/',
      },
      {
        name: 'Invision',
        icon: 'https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg',
        url: 'https://www.invisionapp.com/',
      },
      {
        name: 'Framer',
        icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg',
        url: 'https://www.framer.com/',
      },
      {
        name: 'Matlab',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png',
        url: 'https://www.mathworks.com/',
      },
      {
        name: 'Postman',
        icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
        url: 'https://postman.com',
      },
    ],
  },
  static_site_generator: {
    title: 'Static Site Generators / Meta FrameWorks',
    skills: [
      {
        name: 'Gatsby',
        icon: 'https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg',
        url: 'https://www.gatsbyjs.com/',
      },
      {
        name: 'Gridsome',
        icon: 'https://www.vectorlogo.zone/logos/gridsome/gridsome-icon.svg',
        url: 'https://gridsome.org/',
      },
      {
        name: 'Hugo',
        icon: 'https://api.iconify.design/logos-hugo.svg',
        url: 'https://gohugo.io/',
      },
      {
        name: 'Jekyll',
        icon: 'https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg',
        url: 'https://jekyllrb.com/',
      },
      {
        name: 'Next.js',
        icon: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
        url: 'https://nextjs.org/',
      },
      {
        name: 'Nuxt.js',
        icon: 'https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg',
        url: 'https://nuxtjs.org/',
      },
      {
        name: '11ty',
        icon: 'https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/f4c85cce5790758286b8f155ef9a177710b995df/11ty.svg',
        url: 'https://www.11ty.dev/',
      },
      {
        name: 'Vuepress',
        icon: 'https://raw.githubusercontent.com/AliasIO/wappalyzer/master/src/drivers/webextension/images/icons/VuePress.svg',
        url: 'https://vuepress.vuejs.org/',
      },
      {
        name: 'Hexo',
        icon: 'https://www.vectorlogo.zone/logos/hexoio/hexoio-icon.svg',
        url: 'hexo.io/',
      },
      {
        name: 'Svelte Kit',
        icon: 'https://raw.githubusercontent.com/bestofjs/bestofjs-webui/4ef9bb94b95129a515a4a05d415f9f5e25bb276e/public/logos/svelte.dark.svg',
        url: 'https://kit.svelte.dev/',
      },
      {
        name: 'Remix Run',
        icon: 'https://raw.githubusercontent.com/bestofjs/bestofjs-webui/4ef9bb94b95129a515a4a05d415f9f5e25bb276e/public/logos/remix.svg',
        url: 'https://remix.run/',
      },
    ],
  },
  game_engines: {
    title: 'Game Engines',
    skills: [
      {
        name: 'Unity',
        icon: 'https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg',
        url: 'https://unity.com/',
      },
      {
        name: 'Unreal',
        icon: 'https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg',
        url: 'https://unrealengine.com/',
      },
    ],
  },
  automation: {
    title: 'Automation',
    skills: [
      {
        name: 'Zapier',
        icon: 'https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg',
        url: 'https://zapier.com',
      },
      {
        name: 'IFTTT',
        icon: 'https://www.vectorlogo.zone/logos/ifttt/ifttt-ar21.svg',
        url: 'https://ifttt.com/',
      },
    ],
  },
  other: {
    title: 'Other',
    skills: [
      {
        name: 'Linux',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
        url: 'https://www.linux.org/',
      },
      {
        name: 'Git',
        icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
        url: 'https://git-scm.com/',
      },
      {
        name: 'Arduino',
        icon: 'https://cdn.worldvectorlogo.com/logos/arduino-1.svg',
        url: 'https://www.arduino.cc/',
      },
    ],
  },
}

const categories = Object.keys(categorizedSkills) as Array<keyof typeof categorizedSkills>

export const MultipleProfileBlockList: Block[] = categories.map((item) => ({
  name: `Github Profile - Skills ${categorizedSkills[item].title}`,
  category: Category.GithubProfile,
  type: BlockType.Multiple,
  title: categorizedSkills[item].title,
  snippets: categorizedSkills[item].skills.map((skill) => ({
    isActive: false,
    name: skill.name,
    markdown: dedent`
    <a href="${skill.url}" target="blank">
    <img align="center" src="${skill.icon}" alt="${skill.name}" height="40" width="40" />
    </a>

    `,
  })),
}))
