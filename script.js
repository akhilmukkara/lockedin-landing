document.getElementById('emailForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload
  const email = document.getElementById('emailInput').value;
  alert('Thank you! We\'ll notify ' + email + ' when LockedIn launches.');
  document.getElementById('emailInput').value = ''; // Clear input
});