Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('links', {
    template: '<li v-for="link in data().links"><a href="link.url">link.name</a></li>',

    data() {
      return {
        links: [
          { url: 'http://www.google.com', name: 'Google'},
          { url: 'http://www.youtube.com', name: 'Youtube'},
          { url: 'http://www.facebook.com', name: 'Facebook'},
          { url: 'http://www.linkedin.com', name: 'LinkedIn'}
        ]
      };
    }
});

new Vue({
  el: '#root'
});
