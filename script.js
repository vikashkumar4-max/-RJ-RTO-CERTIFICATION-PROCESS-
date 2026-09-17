// ==========================================
// 1. APPS SCRIPT API URL (Paste your link here)
// ==========================================
const APPS_SCRIPT_API_URL = "https://script.google.com/macros/s/AKfycbwSIKcE5PYWtmdrVpgKc_-3D19UQKLmc185vlKOl_XkfKUXotVJpws7ARjYycVg7pLqLA/exec";

// ==========================================
// 2. COMPLETE RTO CERTIFICATION SOP TRAINING DATA
// ==========================================
const stepsData = [
  {
    step: 1,
    title: "Pan India Sheet Check Karein",
    category: "Verification",
    system: "Pan India Master Database",
    instructions: [
      "Sabse pehle Pan India Response Sheet open karein.",
      "Rajasthan RTO ke liye aayi hui pending requests ko verify karein.",
      "Customer details aur Vehicle Chassis number ki accuracy check karein."
    ],
    proTip: "Duplicate entries se bachne ke liye hamesha Chassis Number se Filter lagayein.",
    hindiAudio: "सबसे पहले पैन इंडिया रिस्पॉन्स शीट ओपन करें और राजस्थान आरटीओ की पेंडिंग रिक्वेस्ट वेरीफाई करें।"
  },
  {
    step: 2,
    title: "Specific Sheet Me Entry Karein",
    category: "Data Entry",
    system: "RJ State Data Sheet",
    instructions: [
      "Master sheet se details verify karne ke baad use RJ RTO Specific Sheet me transfer karein.",
      "Ensure karein ki saare fields jaise Date, Dealer Name, aur Mobile Number sahi hain.",
      "Status column ko 'In Progress' par set karein."
    ],
    proTip: "Data formatting ko hamesha Standard Text Format par rakhein.",
    hindiAudio: "मास्टर शीट से डिटेल वेरीफाई करने के बाद, जानकारी को राजस्थान आरटीओ स्पेसिफिक शीट में दर्ज करें।"
  },
  {
    step: 3,
    title: "TopUp According To Requirement",
    category: "Wallet",
    system: "Vahan Portal Wallet",
    instructions: [
      "Pending certificates ke count ke hisaab se Vahan Portal Wallet check karein.",
      "Requirement ke according exact TopUp amount process karein.",
      "Payment confirmation receipt record me save karein."
    ],
    proTip: "Transaction failure se bachne ke liye hamesha official payment gateway hi use karein.",
    hindiAudio: "आवश्यकता के अनुसार वाहन पोर्टल वॉलेट में सही अमाउंट का टॉप-अप पूरा करें।"
  },
  {
    step: 4,
    title: "Tagging On Vahan Portal",
    category: "Integration",
    system: "Govt Vahan Portal",
    instructions: [
      "Vahan Portal par login karke Tagging section me jaayein.",
      "Vehicle Class aur Chassis Number enter karke Device Tagging start karein.",
      "System alert ya error message ko carefully check karein."
    ],
    proTip: "Tagging fail hone par Chassis number ki spelling re-check karein.",
    hindiAudio: "वाहन पोर्टल पर लॉगिन करें और वाहन क्लास व चेसिस नंबर डालकर टैगिंग पूर्ण करें।"
  },
  {
    step: 5,
    title: "IMEI Whitelist On RJ NIC Portal",
    category: "Whitelisting",
    system: "RJ NIC Portal",
    instructions: [
      "RJ NIC Portal open karein aur Whitelisting module me enter karein.",
      "15-digit IMEI number carefully fill karke submit karein.",
      "Status 'Active / Whitelisted' show hone ka wait karein."
    ],
    proTip: "Ek sath multiple IMEIs upload karte waqt CSV format correct hona chahiye.",
    hindiAudio: "राजस्थान एनआईसी पोर्टल पर पंद्रह अंकों का आईएमईआई नंबर दर्ज करके व्हाइटलिस्ट करें।"
  },
  {
    step: 6,
    title: "Clear Check By CMD",
    category: "Audit",
    system: "CMD Portal",
    instructions: [
      "CMD (Central Monitoring Dashboard) portal me login karein.",
      "Device data packet transfer sync status verify karein.",
      "Agar koi compliance issue hai toh use clear mark karein."
    ],
    proTip: "CMD Sync status green hone par hi aage badhein.",
    hindiAudio: "सीएमडी पोर्टल पर जाकर डेटा पैकेट सिंक और सभी सिक्योरिटी चेक्स क्लियर करें।"
  },
  {
    step: 7,
    title: "Activation With Pan India Details",
    category: "Activation",
    system: "Activation Portal",
    instructions: [
      "Activation Portal par customer ki Pan India verified details enter karein.",
      "Device Serial Number aur SIM details match karein.",
      "Final activation request submit karein."
    ],
    proTip: "Double check karein ki SIM card active state me ho.",
    hindiAudio: "एक्टिवेशन पोर्टल में व्हीकल ओनर और डिवाइस की पूरी जानकारी दर्ज करें।"
  },
  {
    step: 8,
    title: "Send OTP On Registered Number",
    category: "OTP Verification",
    system: "SMS Gateway",
    instructions: [
      "Customer ke registered mobile number par OTP trigger karein.",
      "Customer se Telephonic/SMS call ke through OTP confirm karein.",
      "System me OTP 180 seconds ke andar enter karein."
    ],
    proTip: "OTP expired hone par 'Resend OTP' click karein.",
    hindiAudio: "रजिस्टर्ड मोबाइल नंबर पर ओटीपी भेजें और ग्राहक से कन्फर्म करके दर्ज करें।"
  },
  {
    step: 9,
    title: "Fill OTP & Share Certificate",
    category: "Certificate",
    system: "Group Comm / Portal",
    instructions: [
      "Correct OTP fill karke 'Generate Fitment Certificate' button par click karein.",
      "PDF Download karke official format verify karein.",
      "Certificate ko respective WhatsApp Group/Email par share karein."
    ],
    proTip: "Certificate PDF me RTO Stamp aur QR Code clear visible hona chahiye.",
    hindiAudio: "ओटीपी दर्ज करके सर्टिफिकेट जनरेट करें, पीडीएफ डाउनलोड करें और ग्रुप में शेयर करें।"
  },
  {
    step: 10,
    title: "Mark Certificate Issued On Sheet",
    category: "Closure",
    system: "Master Sheet & RJ Sheet",
    instructions: [
      "Dono sheets (Pan India & RJ State Sheet) par status 'ISSUED' mark karein.",
      "Certificate Generation Timestamp aur Issued ID update karein.",
      "SOP Completion log close karein."
    ],
    proTip: "Time-stamp update karna daily audit performance ke liye zaroori hai.",
    hindiAudio: "मास्टर शीट और राजस्थान शीट दोनों जगह स्टेटस 'ISSUED' मार्क करें। प्रक्रिया पूर्ण हुई।"
  }
];

const fallbackReportData = {
  date: "9/18/2026",
  states: [
    { name: "HR-RTO", count: 76 },
    { name: "PB-RTO", count: 20 },
    { name: "GJ-RTO", count: 43 },
    { name: "DD-RTO", count: 2 },
    { name: "AS-RTO", count: 6 }
  ],
  team1Score: 76,
  vikashScore: 30,
  sonuScore: 61
};

let currentStep = 0;
let isAudioOn = true;
let synth = window.speechSynthesis;
let canvas, ctx;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initMaleCharacterCanvas();
  renderStep(currentStep);
  renderDots();
  setupEventListeners();
  fetchLiveDataFromSheet();
  if (window.lucide) lucide.createIcons();
});

// INSTANT LIVE DATA FETCH FROM APPS SCRIPT
async function fetchLiveDataFromSheet() {
  const syncIcon = document.getElementById('sync-icon');
  if (syncIcon) syncIcon.classList.add('spin-anim');

  try {
    if (!APPS_SCRIPT_API_URL || APPS_SCRIPT_API_URL.includes("PASTE_YOUR_APPS_SCRIPT")) {
      throw new Error("Apps Script URL Unconfigured");
    }

    const response = await fetch(APPS_SCRIPT_API_URL);
    if (!response.ok) throw new Error("API Fetch Error");

    const jsonRows = await response.json();

    if (jsonRows && jsonRows.length > 1) {
      const parsedStates = [];
      for (let i = 1; i < jsonRows.length; i++) {
        const row = jsonRows[i];
        if (row && row[0]) {
          const stName = String(row[0]).trim();
          const count = parseInt(row[1]) || 0;
          if (stName) parsedStates.push({ name: stName, count: count });
        }
      }

      renderReportTable({
        date: String(jsonRows[1][4] || "9/18/2026"),
        states: parsedStates,
        team1Score: parseInt(jsonRows[1][2]) || 0,
        vikashScore: parseInt(jsonRows[2][2]) || 0,
        sonuScore: parseInt(jsonRows[3][2]) || 0
      });
      return;
    }
    throw new Error("Invalid Format");
  } catch (err) {
    console.warn("Using local fallback data:", err.message);
    renderReportTable(fallbackReportData);
  } finally {
    if (syncIcon) syncIcon.classList.remove('spin-anim');
  }
}

function renderReportTable(data) {
  const tbody = document.getElementById('state-rows-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  let grandTotal = 0;

  data.states.forEach(st => {
    grandTotal += Number(st.count);
    tbody.innerHTML += `
      <tr>
        <td><strong>${st.name}</strong></td>
        <td class="text-right">${st.count}</td>
      </tr>
    `;
  });

  document.getElementById('report-date-display').innerText = data.date;
  document.getElementById('big-grand-total').innerText = grandTotal;
  document.getElementById('score-team-1').innerText = data.team1Score;
  document.getElementById('score-vikash').innerText = data.vikashScore;
  document.getElementById('score-sonu').innerText = data.sonuScore;
}

// Canvas Male Avatar Renderer
function initMaleCharacterCanvas() {
  canvas = document.getElementById('maleAvatarCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  drawMaleCharacter(0);
}

function drawMaleCharacter(mouthOpen) {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Background Circle
  ctx.fillStyle = "#EEF0F3";
  ctx.beginPath();
  ctx.arc(110, 110, 100, 0, Math.PI * 2);
  ctx.fill();

  // Suit Body
  ctx.fillStyle = "#0D0D0D";
  ctx.beginPath();
  ctx.ellipse(110, 200, 75, 40, 0, 0, Math.PI * 2);
  ctx.fill();

  // Shirt Collar & Red Tie
  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.moveTo(90, 160); ctx.lineTo(110, 185); ctx.lineTo(130, 160);
  ctx.fill();

  ctx.fillStyle = "#EB0029";
  ctx.beginPath();
  ctx.moveTo(106, 160); ctx.lineTo(114, 160); ctx.lineTo(112, 195); ctx.lineTo(108, 195);
  ctx.fill();

  // Face
  ctx.fillStyle = "#F5C396";
  ctx.beginPath();
  ctx.arc(110, 110, 50, 0, Math.PI * 2);
  ctx.fill();

  // Hair Style
  ctx.fillStyle = "#0D0D0D";
  ctx.beginPath();
  ctx.arc(110, 95, 52, Math.PI * 0.85, Math.PI * 2.15);
  ctx.fill();

  // Glasses (OnePlus Red Accent Frame)
  ctx.strokeStyle = "#EB0029";
  ctx.lineWidth = 2.5;
  ctx.strokeRect(80, 100, 24, 16);
  ctx.strokeRect(116, 100, 24, 16);
  ctx.beginPath(); ctx.moveTo(104, 108); ctx.lineTo(116, 108); ctx.stroke();

  // Eyes
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(92, 108, 3, 0, Math.PI * 2);
  ctx.arc(128, 108, 3, 0, Math.PI * 2);
  ctx.fill();

  // Mouth (Animated)
  ctx.fillStyle = "#EB0029";
  ctx.beginPath();
  ctx.ellipse(110, 138, 10, 2 + mouthOpen * 10, 0, 0, Math.PI * 2);
  ctx.fill();
}

// SOP Training Card Renderer
function renderStep(index) {
  const data = stepsData[index];
  document.getElementById('current-step-num').innerText = data.step;
  document.getElementById('total-steps-num').innerText = stepsData.length;
  
  const pct = Math.round(((index + 1) / stepsData.length) * 100);
  document.getElementById('progress-bar').style.width = `${pct}%`;
  document.getElementById('progress-percent').innerText = `${pct}%`;

  const displayArea = document.getElementById('step-card-display');
  displayArea.innerHTML = `
    <div class="op-card" style="border-top: 4px solid var(--op-red);">
      <span class="op-tag">PHASE 0${data.step} • ${data.category.toUpperCase()}</span>
      <h3 style="font-size:1.35rem; margin:8px 0; font-weight:800;">${data.title}</h3>
      <p style="font-size:0.85rem; color:#666; font-weight:700; margin-bottom:14px;">Target System: <span style="color:#111;">${data.system}</span></p>
      
      <div style="background:#F4F5F7; padding:16px; border-radius:12px; margin-bottom:16px;">
        <h4 style="font-size:0.8rem; text-transform:uppercase; color:#666; margin-bottom:8px; font-weight:800;">Execution Instructions:</h4>
        <ul style="margin-left:18px; font-size:0.9rem; line-height:1.6; font-weight:600;">
          ${data.instructions.map(inst => `<li style="margin-bottom:6px;">${inst}</li>`).join('')}
        </ul>
      </div>

      <div style="background:#FFEBEE; border-left:4px solid #EB0029; padding:12px 16px; font-size:0.85rem; border-radius:8px; color:#111; font-weight:600;">
        <strong style="color:#EB0029;">Pro-Tip:</strong> ${data.proTip}
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  document.getElementById('prev-btn').disabled = index === 0;
  document.getElementById('next-btn').disabled = index === stepsData.length - 1;
  updateDots(index);

  if (isAudioOn) {
    speakHindiVoice(data.hindiAudio);
  }
}

function speakHindiVoice(text) {
  if (!synth) return;
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'hi-IN';
  utterance.rate = 0.95;

  const waveBar = document.getElementById('speaker-waves');
  const statusText = document.getElementById('status-text');
  const statusDot = document.getElementById('status-dot');

  let animationInterval;

  utterance.onstart = () => {
    if (waveBar) waveBar.classList.add('speaking');
    if (statusText) statusText.innerText = "Speaking SOP Guidance...";
    if (statusDot) statusDot.classList.add('active');

    let toggleMouth = 0;
    animationInterval = setInterval(() => {
      toggleMouth = toggleMouth === 0 ? 1 : 0;
      drawMaleCharacter(toggleMouth);
    }, 180);
  };

  utterance.onend = () => {
    clearInterval(animationInterval);
    drawMaleCharacter(0);
    if (waveBar) waveBar.classList.remove('speaking');
    if (statusText) statusText.innerText = "Ready to Guide";
    if (statusDot) statusDot.classList.remove('active');
  };

  synth.speak(utterance);
}

function renderDots() {
  const container = document.getElementById('step-dots-timeline');
  if (!container) return;
  container.innerHTML = '';
  stepsData.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `dot-item ${idx === currentStep ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      currentStep = idx;
      renderStep(currentStep);
    });
    container.appendChild(dot);
  });
}

function updateDots(activeIndex) {
  const dots = document.querySelectorAll('.dot-item');
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === activeIndex));
}

function setupEventListeners() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const replayBtn = document.getElementById('replay-voice-btn');
  const audioToggleBtn = document.getElementById('toggle-audio-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        renderStep(currentStep);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < stepsData.length - 1) {
        currentStep++;
        renderStep(currentStep);
      }
    });
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      speakHindiVoice(stepsData[currentStep].hindiAudio);
    });
  }

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      isAudioOn = !isAudioOn;
      if (isAudioOn) {
        audioToggleBtn.classList.add('active');
        audioToggleBtn.querySelector('span').innerText = "Voice Guide On";
        speakHindiVoice(stepsData[currentStep].hindiAudio);
      } else {
        synth.cancel();
        audioToggleBtn.classList.remove('active');
        audioToggleBtn.querySelector('span').innerText = "Voice Muted";
      }
    });
  }
}
