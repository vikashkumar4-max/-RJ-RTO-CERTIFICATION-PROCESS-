// ==========================================
// 1. CONFIGURATION (PASTE SHEET CSV LINK HERE)
// ==========================================
// Google Sheet ko 'File -> Share -> Publish to Web -> Select CSV format' se link copy karein
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTfLG89aVvyvEEACEQYDyqtYjY2TZLvhYwSs-nLhQBGprVV1e3LrsQFbx3wwEN7WIMRDhutbfNY3a58/pub?gid=780031891&single=true&output=csv";

// ==========================================
// 2. RJ RTO PROCESS DATA (10 STEPS)
// ==========================================
const stepsData = [
  {
    step: 1,
    title: "Pan India Sheet Check Karein",
    category: "Verification Phase",
    system: "Pan India Master Database",
    instructions: [
      "Sabse pehle Pan India Response Sheet open karein aur Rajasthan RTO ke naye installation requests verify karein.",
      "Check karein ki Rajasthan (RJ) RTO ke liye request valid aur pending status me hai ya nahi.",
      "Duplication se bachne ke liye vehicle/customer entry ID double-check karein."
    ],
    proTip: "Galat sheet ya category me entry aage ka process block kar sakti hai.",
    hindiAudio: "सबसे पहले पैन इंडिया रिस्पॉन्स शीट ओपन करके राजस्थान आरटीओ के नए इंस्टॉलेशन चेक करें। इसके बाद डिवाइस के प्रकार के अनुसार सही टॉप-अप शीट में एंट्री दर्ज करें।"
  },
  {
    step: 2,
    title: "Specific Sheet Me Entry Karein",
    category: "Data Entry Phase",
    system: "RJ State Data Sheet",
    instructions: [
      "Master sheet se detail verify hone ke baad, use RJ Specific Work Sheet me enter karein.",
      "Date, Vehicle Type, Owner Name, aur Regional RTO Code dhyaan se fill karein.",
      "Data formatting standard guidelines ke anusaar hi rakhein."
    ],
    proTip: "Galat package wale vehicle par kaam na karein, ise hold par daalein.",
    hindiAudio: "वेरीफाइड डिटेल्स को राजस्थान स्पेसिफिक शीट में एंटर करें। डेट और आरटीओ कोड सही से भरना अनिवार्य है।"
  },
  {
    step: 3,
    title: "TopUp According To Requirement",
    category: "Wallet Phase",
    system: "Vahan Portal Wallet",
    instructions: [
      "Process fees ke anusaar wallet balance check karein.",
      "Requirement ke hisab se exact amount ka TopUp karein.",
      "TopUp Transaction ID ko record sheet me save karein."
    ],
    proTip: "TopUp hamesha official gateway se hi karein.",
    hindiAudio: "आईसीसीआईडी के ज़रिये ऑफिसियल पोर्टल पर जाकर टॉप-अप बैलेंस चेक करें। पैकेज के अनुसार टॉप-अप पूरा करें।"
  },
  {
    step: 4,
    title: "Tagging On Vahan Portal",
    category: "Integration",
    system: "Govt Vahan Portal",
    instructions: [
      "Official Vahan Portal par login karein.",
      "Vehicle Class aur Chassis Number enter karke device tagging start karein."
    ],
    proTip: "Vahan portal timeout se bachne ke liye details pehle copy karein.",
    hindiAudio: "वाहन पोर्टल पर जाकर व्हीकल नंबर की टैगिंग करें। यदि कोई इश्यू दिखे, तो उसे टीम के साथ शेयर करें।"
  },
  {
    step: 5,
    title: "IMEI Whitelist On RJ NIC Portal",
    category: "Whitelisting",
    system: "RJ NIC Portal",
    instructions: [
      "RJ NIC portal me login karke 15-digit IMEI number enter karein.",
      "Whitelisting status Active check karein."
    ],
    proTip: "IMEI number me 1 digit ki galti se approval reject ho sakta hai.",
    hindiAudio: "राजस्थान एनआईसी पोर्टल पर जाकर डिवाइस का आईएमईआई नंबर व्हाइटलिस्ट करें।"
  },
  {
    step: 6,
    title: "Clear Check By CMD",
    category: "Quality Audit",
    system: "CMD Portal",
    instructions: [
      "CMD System par data synchronization run karein.",
      "Backend quality audit checks perform karein."
    ],
    proTip: "Clear Status ka proof save rakhein.",
    hindiAudio: "एक्टिवेशन प्रोसेस के लिए सभी सरकारी दिशानिर्देशों का पालन करें और सिस्टम चेक्स क्लियर करें।"
  },
  {
    step: 7,
    title: "Activation With Pan India Details",
    category: "Final Activation",
    system: "Activation Portal",
    instructions: [
      "Pan India Response Form se verified credentials collect karein.",
      "Activation portal par submit karein."
    ],
    proTip: "Response form ki latest entry hi use karein.",
    hindiAudio: "एक्टिवेशन चेक्स पूरे होने के बाद व्हीकल ओनर की सभी जानकारी ध्यानपूर्वक भरें।"
  },
  {
    step: 8,
    title: "Send OTP On Registered Number",
    category: "OTP Verification",
    system: "SMS Gateway",
    instructions: [
      "Customer ke registered mobile number par OTP trigger karein."
    ],
    proTip: "OTP trigger karte hi time note karein.",
    hindiAudio: "फॉर्म सबमिट करने के बाद ओनर के मोबाइल पर गया हुआ ओटीपी प्राप्त करके दर्ज करें।"
  },
  {
    step: 9,
    title: "Fill OTP & Share Certificate",
    category: "Certificate Generation",
    system: "Group Communication",
    instructions: [
      "OTP fill karke certificate download karein aur official group me share karein."
    ],
    proTip: "Vehicle Number aur Name zaroor mention karein.",
    hindiAudio: "सर्टिफिकेट और वाहन पोर्टल से फिटमेंट लेटर डाउनलोड करके ऑफिसियल ग्रुप पर शेयर करें।"
  },
  {
    step: 10,
    title: "Mark Certificate Issued On Sheet",
    category: "Process Closure",
    system: "Master Tracking Sheet",
    instructions: [
      "Data Sheet me 'Certificate Status' ko 'ISSUED' mark karein."
    ],
    proTip: "Sheet close karne se pehle verify karein.",
    hindiAudio: "बधाई हो, राजस्थान आरटीओ डिवाइस सर्टिफिकेशन का प्रोसेस सफलता पूर्वक पूरा हुआ!"
  }
];

// Fallback Default Data for Modern Common RTO Report (Exact Matching Image Layout)
const defaultReportData = {
  date: "9/17/2026",
  states: [
    { name: "HR-RTO", count: 76 },
    { name: "PB-RTO", count: 20 },
    { name: "GJ-RTO", count: 43 },
    { name: "DD-RTO", count: 2 },
    { name: "AS-RTO", count: 6 },
    { name: "AP-RTO", count: 3 },
    { name: "AR-RTO", count: 0 },
    { name: "NL-RTO", count: 9 },
    { name: "JK-RTO", count: 7 },
    { name: "JH-RTO", count: 0 },
    { name: "TS-RTO", count: 0 }
  ],
  team1Score: 76,
  vikashScore: 30,
  sonuScore: 61
};

// ==========================================
// 3. GLOBAL VARIABLES & INITIALIZATION
// ==========================================
let currentStep = 0;
let isAudioOn = true;
let synth = window.speechSynthesis;
let voices = [];
let isTalking = false;

document.addEventListener('DOMContentLoaded', () => {
  initMaleCharacterCanvas();
  renderStep(currentStep);
  renderDots();
  setupEventListeners();
  fetchLiveDataFromSheet();
  if (window.lucide) lucide.createIcons();
});

// Load Male Voice Priority
function loadVoices() {
  voices = synth.getVoices();
}
loadVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = loadVoices;
}

// ==========================================
// 4. ANIMATED MALE CHARACTER (CANVAS ENGINE)
// ==========================================
let canvas, ctx, mouthOpenRatio = 0;

function initMaleCharacterCanvas() {
  canvas = document.getElementById('maleAvatarCanvas');
  if(!canvas) return;
  ctx = canvas.getContext('2d');
  drawMaleCharacter(0);
}

function drawMaleCharacter(mouthOpen) {
  if(!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background Circle
  ctx.fillStyle = "#Eef2f5";
  ctx.beginPath();
  ctx.arc(110, 110, 100, 0, Math.PI * 2);
  ctx.fill();

  // Shoulders / Corporate Suit
  ctx.fillStyle = "#1d1d1f";
  ctx.beginPath();
  ctx.ellipse(110, 200, 75, 40, 0, 0, Math.PI * 2);
  ctx.fill();

  // Shirt Collar
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(90, 160);
  ctx.lineTo(110, 185);
  ctx.lineTo(130, 160);
  ctx.fill();

  // Face
  ctx.fillStyle = "#F5C396";
  ctx.beginPath();
  ctx.arc(110, 110, 50, 0, Math.PI * 2);
  ctx.fill();

  // Male Short Hair
  ctx.fillStyle = "#2c1d11";
  ctx.beginPath();
  ctx.arc(110, 95, 52, Math.PI * 0.85, Math.PI * 2.15);
  ctx.fill();

  // Glasses Frame
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.strokeRect(80, 100, 24, 16);
  ctx.strokeRect(116, 100, 24, 16);
  ctx.beginPath();
  ctx.moveTo(104, 108);
  ctx.lineTo(116, 108);
  ctx.stroke();

  // Eyes
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(92, 108, 3, 0, Math.PI * 2);
  ctx.arc(128, 108, 3, 0, Math.PI * 2);
  ctx.fill();

  // Animated Mouth
  ctx.fillStyle = "#900";
  ctx.beginPath();
  let mouthHeight = 2 + mouthOpen * 12;
  ctx.ellipse(110, 138, 10, mouthHeight, 0, 0, Math.PI * 2);
  ctx.fill();
}

function startTalkingAnimation() {
  isTalking = true;
  document.getElementById('speaker-waves')?.classList.add('speaking');
  document.getElementById('status-dot')?.classList.add('active');
  document.getElementById('status-text').innerText = "Speaking SOP...";

  function animate() {
    if(!isTalking) {
      drawMaleCharacter(0);
      return;
    }
    mouthOpenRatio = Math.abs(Math.sin(Date.now() / 100));
    drawMaleCharacter(mouthOpenRatio);
    requestAnimationFrame(animate);
  }
  animate();
}

function stopTalkingAnimation() {
  isTalking = false;
  document.getElementById('speaker-waves')?.classList.remove('speaking');
  document.getElementById('status-dot')?.classList.remove('active');
  document.getElementById('status-text').innerText = "Ready to Guide";
  drawMaleCharacter(0);
}

// ==========================================
// 5. PURE HINDI MALE VOICE ENGINE
// ==========================================
function speakHindiInstruction(text) {
  if (!('speechSynthesis' in window)) return;
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'hi-IN';

  if (voices.length === 0) voices = synth.getVoices();

  const hindiMaleVoice = voices.find(v => 
    (v.lang === 'hi-IN' || v.lang.startsWith('hi')) && 
    (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('madhav') || v.name.toLowerCase().includes('hemant') || !v.name.toLowerCase().includes('female'))
  );

  if (hindiMaleVoice) {
    utterance.voice = hindiMaleVoice;
  }

  utterance.rate = 0.95;
  utterance.pitch = 0.9;

  utterance.onstart = () => startTalkingAnimation();
  utterance.onend = () => stopTalkingAnimation();
  utterance.onerror = () => stopTalkingAnimation();

  synth.speak(utterance);
}

// ==========================================
// 6. RENDER LOGIC
// ==========================================
function renderStep(index) {
  const data = stepsData[index];
  
  document.getElementById('current-step-num').innerText = data.step;
  document.getElementById('total-steps-num').innerText = stepsData.length;
  
  const pct = Math.round(((index + 1) / stepsData.length) * 100);
  document.getElementById('progress-bar').style.width = `${pct}%`;
  document.getElementById('progress-percent').innerText = `${pct}%`;

  const displayArea = document.getElementById('step-card-display');
  displayArea.innerHTML = `
    <div class="step-inner-card">
      <span class="step-num-pill">PHASE 0${data.step} • ${data.category.toUpperCase()}</span>
      <h3 class="step-main-title">${data.title}</h3>
      
      <div class="sys-badge">
        <i data-lucide="cpu"></i> System: ${data.system}
      </div>

      <ol class="instruction-list">
        ${data.instructions.map(inst => `<li>${inst}</li>`).join('')}
      </ol>

      <div class="pro-tip-box">
        <strong>Pro Executive Tip:</strong> ${data.proTip}
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();

  document.getElementById('prev-btn').disabled = index === 0;
  const nextBtn = document.getElementById('next-btn');
  nextBtn.innerHTML = index === stepsData.length - 1 ? 
    `Finish Training <i data-lucide="check-circle"></i>` : 
    `Next Step <i data-lucide="chevron-right"></i>`;

  updateDots(index);

  if (isAudioOn) {
    speakHindiInstruction(data.hindiAudio);
  }
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
  document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentStep > 0) { currentStep--; renderStep(currentStep); }
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    if (currentStep < stepsData.length - 1) { currentStep++; renderStep(currentStep); } 
    else { alert('Aapne RJ RTO Training SOP Successfully Complete kar liya hai!'); }
  });

  document.getElementById('toggle-audio-btn').addEventListener('click', function() {
    isAudioOn = !isAudioOn;
    this.classList.toggle('active', isAudioOn);
    this.querySelector('span').innerText = isAudioOn ? 'Voice Guide On' : 'Voice Guide Off';
    if (!isAudioOn && synth.speaking) {
      synth.cancel();
      stopTalkingAnimation();
    }
  });

  document.getElementById('replay-voice-btn').addEventListener('click', () => {
    speakHindiInstruction(stepsData[currentStep].hindiAudio);
  });
}

// ==========================================
// 7. GOOGLE SHEET LIVE REPORT FETCHING & STRICT SANITIZATION
// ==========================================
async function fetchLiveDataFromSheet() {
  try {
    if (!GOOGLE_SHEET_CSV_URL || GOOGLE_SHEET_CSV_URL.includes("PASTE_YOUR_GOOGLE_SHEET")) {
      throw new Error("Invalid or unconfigured Sheet URL");
    }

    const response = await fetch(GOOGLE_SHEET_CSV_URL);
    if (!response.ok) throw new Error("CSV Fetch failed");
    
    const rawText = await response.text();

    // Check if returned response is actually HTML/JS code instead of pure CSV
    if (rawText.trim().startsWith("<") || rawText.includes("function") || rawText.includes("typeof")) {
      throw new Error("Returned response is HTML/JavaScript code, not a CSV stream.");
    }

    const rows = rawText.split('\n').map(row => row.split(','));

    if (rows.length > 1) {
      const parsedStates = [];
      for (let i = 1; i < rows.length; i++) {
        if (rows[i] && rows[i].length >= 2) {
          const stName = rows[i][0]?.replace(/"/g, '').trim() || "";
          const count = parseInt(rows[i][1]?.replace(/"/g, '').trim()) || 0;

          // Reject any row containing code strings
          if (stName && !stName.includes("function") && !stName.includes("{") && !stName.includes("var ")) {
            parsedStates.push({ name: stName, count: count });
          }
        }
      }

      if (parsedStates.length > 0) {
        renderReportTable({
          date: rows[1][4]?.replace(/"/g, '').trim() || "9/17/2026",
          states: parsedStates,
          team1Score: parseInt(rows[1][2]) || 76,
          vikashScore: parseInt(rows[2][2]) || 30,
          sonuScore: parseInt(rows[3][2]) || 61
        });
        return;
      }
    }

    throw new Error("CSV parsing returned empty valid rows");
  } catch (error) {
    console.warn("Sheet fetch blocked or unconfigured, rendering fallback data cleanly:", error.message);
    renderReportTable(defaultReportData);
  }
}

function renderReportTable(data) {
  const tbody = document.getElementById('state-rows-body');
  if(!tbody) return;

  tbody.innerHTML = '';
  let grandTotal = 0;

  data.states.forEach(st => {
    grandTotal += Number(st.count);
    tbody.innerHTML += `
      <tr>
        <td>${st.name}</td>
        <td class="text-right">${st.count}</td>
      </tr>
    `;
  });

  document.getElementById('report-date-display').innerText = data.date;
  document.getElementById('grand-total-val').innerText = grandTotal;
  document.getElementById('big-grand-total').innerText = grandTotal;

  document.getElementById('score-team-1').innerText = data.team1Score;
  document.getElementById('score-vikash').innerText = data.vikashScore;
  document.getElementById('score-sonu').innerText = data.sonuScore;
}
