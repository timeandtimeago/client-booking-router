const app = new Vue({
    el: '#app',
    data: {
      email: '',
      link: null,
      emailDictionary: {
        // Replace this with your actual email-URL dictionary
        john.doe@example.com: 'https://example.com/john',
        jane.smith@example.com: 'https://example.com/jane',
      },
    },
    methods: {
      checkEmail() {
        this.link = null;
        const matchedEmail = Object.keys(this.emailDictionary).find(
          email => email === this.email
        );
        if (matchedEmail) {
          this.link = this.emailDictionary[matchedEmail];
        } else {
          // handle no match scenario (show message, etc.)
        }
      },
    },
  });