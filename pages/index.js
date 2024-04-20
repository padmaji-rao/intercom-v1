import { useEffect } from 'react';

const Home = () => {
  // Define user data
  const user = {
    name: "Padmaji Rao",
    id: "267",
    email: "pandu@example.com",
    createdAt: Date.now() // Example signup date
  };

  useEffect(() => {
    // Intercom settings
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "zt9ij0cf",
      name: user.name, // Full name
      user_id: user.id, // a UUID for your user
      email: user.email, // the email for your user
      created_at: user.createdAt // Signup date as a Unix timestamp
    };

    // Load Intercom widget script
    (function() {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        var d = document;
        var i = function() {
          i.c(arguments);
        };
        i.q = [];
        i.c = function(args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function() {
          var s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://widget.intercom.io/widget/zt9ij0cf';
          var x = d.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === 'complete') {
          l();
        } else if (w.attachEvent) {
          w.attachEvent('onload', l);
        } else {
          w.addEventListener('load', l, false);
        }
      }
    })();
  }, []);

  return (
    <>
      <h1>Final Testing</h1>
    </>
  );
};

export default Home;
