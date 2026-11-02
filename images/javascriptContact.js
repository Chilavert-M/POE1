
const RECIPIENT = "centralwines@gmail.com"; 

const contactForm = document.getElementById("contactForm");
const contactOutput = document.getElementById("contactResponse");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  contactOutput.textContent = "";

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const name = document.getElementById("cname").value.trim();
  const email = document.getElementById("cemail").value.trim();
  const phone = document.getElementById("cphone").value.trim();
  const type = document.getElementById("ctype").value;
  const message = document.getElementById("cmsg").value.trim();

  if (message.length < 10) {
    const box = document.getElementById("cmsg");
    box.setCustomValidity("Please write at least 10 characters.");
    box.reportValidity();
    box.setCustomValidity("");
    return;
  }

 
  const subject = `${type} from ${name}`;
  const body =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Type of message: ${type}\n\n` +
    `Message:\n${message}`;

  const mailto =
    `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const note = document.createElement("p");
  note.textContent =
    `Thank you, ${name}. Your email app should now open with your message addressed to ${RECIPIENT}. Press send in your email app to finish.`;
  contactOutput.append(note);

  window.location.href = mailto;
});