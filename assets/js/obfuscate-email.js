 // JavaScript to obfuscate and populate the email link
 (function() {
    // Email address parts
    var user = "jggianna";
    var domain = "yahoo.com";
    var email = user + "@" + domain;

    // Create mailto link
    var link = document.createElement("a");
    link.href = "mailto:" + email;
    link.textContent = email;

    // Append the link to the span with id "email-link"
    document.getElementById("email-link").appendChild(link);
  })();