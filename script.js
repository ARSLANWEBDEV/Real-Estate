// Contact Form Submission Handler
document.getElementById("contact-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent form from reloading the page

  const form = event.target;
  const formData = new FormData(form);
  const status = document.getElementById("form-status");

  status.textContent = "Submitting your message...";
  status.style.color = "blue";

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      status.textContent = "Thank you for your message! We'll be in touch soon.";
      status.style.color = "green";
      form.reset();
    } else {
      const errorData = await response.json();
      status.textContent = `Error: ${errorData.message || "Unable to submit your message."}`;
      status.style.color = "red";
    }
  } catch (error) {
    status.textContent = `Network Error: ${error.message}`;
    status.style.color = "red";
  }
});

// Property Search Functionality
function searchProperties() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim();

  if (query) {
    // Provide feedback to the user
    alert(`Searching for properties in "${query}"`);
    // Call a function to handle property search logic or redirect to the search results
    handlePropertySearch(query);
  } else {
    // Alert the user if the input is empty
    alert('Please enter a destination to search.');
    // Optionally, focus on the search input field for convenience
    searchInput.focus();
  }
}

// Example function for handling property search logic
function handlePropertySearch(query) {
  console.log(`Initiating search for: ${query}`);
  // Add your logic here, e.g., an API call or redirect
  // window.location.href = `/search?destination=${encodeURIComponent(query)}`;
}
