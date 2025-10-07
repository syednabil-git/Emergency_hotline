document.addEventListener("DOMContentLoaded", function () {
  // starting coins
  let coins = 100;
  const COST = 20;

  // find the coin display element
  const coinDisplay = document.getElementById("coin-display");

  // function to update coin display
  function updateCoinDisplay() {
    coinDisplay.textContent = coins;
  }

  // function when call button clicked
  function handleCallClick() {
    if (coins >= COST) {
      coins -= COST;
      updateCoinDisplay();
      alert("You have been charged 20 coins for this call.");
    } else {
      alert("Not enough coins to make a call!");
    }
  }

  // attach event listeners to all call buttons
  const buttons = document.querySelectorAll(".call-button");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", handleCallClick);
  });

    
  // show initial coins
  updateCoinDisplay();
});



document.addEventListener("DOMContentLoaded", function () {
  let copies = 0;
  const copyCountDisplay = document.getElementById("copy-count");

  function updateCopyDisplay() {
    copyCountDisplay.textContent = copies;
  }

  document.querySelectorAll(".copy-button").forEach(button => {
    button.addEventListener("click", async function () {
      const card = button.closest(".card");
      if (!card) return console.warn("No .card parent found");
      const textEl = card.querySelector(".copy-text");
      if (!textEl) return console.warn("No .copy-text inside card");

      const textToCopy = textEl.textContent.trim();
      if (!textToCopy) {
        alert("Nothing to copy.");
        return;
      }

      // Try Clipboard API first
      let copied = false;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
          copied = true;
        }
      } catch (err) {
        console.warn("navigator.clipboard failed:", err);
      }

      // Fallback: hidden textarea + execCommand('copy')
      if (!copied) {
        try {
          const ta = document.createElement("textarea");
          ta.value = textToCopy;
          // keep off-screen to avoid page jump
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.focus();
          ta.select();

          // execCommand may return true/false or throw
          const ok = document.execCommand("copy");
          document.body.removeChild(ta);
          if (ok) copied = true;
          else console.warn("execCommand returned false");
        } catch (err) {
          console.warn("execCommand fallback failed:", err);
        }
      }

      // Final fallback: prompt box so user can manually copy
      if (!copied) {
        try {
          window.prompt("Copy the text below (Ctrl/Cmd+C, Enter):", textToCopy);
        } catch (err) {
          // worst case — just alert the user
          alert("Copy failed. Please select the text and press Ctrl/Cmd+C.");
        }
      } else {
        // only count as copied when we succeeded with API or execCommand
        copies++;
        updateCopyDisplay();

        // small UI feedback
        const oldHTML = button.innerHTML;
        button.innerHTML = "✅ Copied!";
        button.disabled = true;
        setTimeout(() => {
          button.innerHTML = oldHTML;
          button.disabled = false;
        }, 1200);
      }
    });
  });

  updateCopyDisplay();
});

