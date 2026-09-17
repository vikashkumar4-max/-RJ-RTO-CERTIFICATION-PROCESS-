// ==========================================
// 1. APPS SCRIPT WEB APP API URL
// ==========================================
const APPS_SCRIPT_API_URL = "https://script.google.com/macros/s/AKfycbyxtYuQT4gHPM2ANN8dhXYZS_H8j1fA0-ImLTZ-o76J3ONs42ITzsJvcGU56wjMaeec4g/exec";

// ==========================================
// 2. SOP TRAINING MODULE DATA (UNTOUCHED - EXACT 10 STEPS)
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

// Fallback Data Matching Your Screenshot Exactly
const fallbackOpsData = {
  selectedDate: "9/17/2026",
  hourlyData: [
    { rto: "HR_RTO", h10: 0, h11: 3, h12: 3, h1: 3, h2: 3, h3: 1, h4: 12, h5: 4, h6: 8, h7: 1, h8: 3, total: 41, totalIssued: 59 },
    { rto: "PB_RTO", h10: 0, h11: 0, h12: 5, h1: 4, h2: 0, h3: 0, h4: 1, h5: 0, h6: 4, h7: 6, h8: 0, total: 20, totalIssued: 20 },
    { rto: "GJ_RTO", h10: 0, h11: 6, h12: 4, h1: 5, h2: 5, h3: 3, h4: 8, h5: 5, h6: 3, h7: 8, h8: 0, total: 47, totalIssued: 47 },
    { rto: "DD_RTO", h10: 0, h11: 1, h12: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 1, h6: 0, h7: 0, h8: 0, total: 2, totalIssued: 2 },
    { rto: "AS_RTO", h10: 0, h11: 0, h12: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 1, h6: 3, h7: 2, h8: 0, total: 6, totalIssued: 6 },
    { rto: "AP_RTO", h10: 0, h11: 0, h12: 1, h1: 0, h2: 1, h3: 0, h4: 0, h5: 0, h6: 1, h7: 1, h8: 0, total: 4, totalIssued: 4 },
    { rto: "AR_RTO", h10: 0, h11: 0, h12: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0, h8: 0, total: 0, totalIssued: 0 },
    { rto: "NL_RTO", h10: 0, h11: 0, h12: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 5, h6: 2, h7: 1, h8: 0, total: 8, totalIssued: 8 },
    { rto: "JK_RTO", h10: 0, h11: 1, h12: 3, h1: 0, h2: 0, h3: 0, h4: 0, h5: 1, h6: 0, h7: 2, h8: 0, total: 7, totalIssued: 7 },
    { rto: "JH_RTO", h10: 0, h11: 0, h12: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0, h8: 0, total: 0, totalIssued: 0 },
    { rto: "TS_RTO", h10: 0, h11: 0, h12: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0, h8: 0, total: 0, totalIssued: 0 }
  ],
  allOverIssued: [
    { rto: "HR_RTO", inOffice: 41, totalIssued: 59, extra: 18 },
    { rto: "PB_RTO", inOffice: 20, totalIssued: 20, extra: 0 },
    { rto: "GJ_RTO", inOffice: 47, totalIssued: 47, extra: 0 },
    { rto: "DD_RTO", inOffice: 2, totalIssued: 2, extra: 0 },
    { rto: "AS_RTO", inOffice: 6, totalIssued: 6, extra: 0 },
    { rto: "AP_RTO", inOffice: 4, totalIssued: 4, extra: 0 },
    { rto: "AR_RTO", inOffice: 0, totalIssued: 0, extra: 0 },
    { rto: "NL_RTO", inOffice: 8, totalIssued: 8, extra: 0 },
    { rto: "JK_RTO", inOffice: 7, totalIssued: 7, extra: 0 },
    { rto: "JH_RTO", inOffice: 0, totalIssued: 0, extra: 0 },
    { rto: "TS_RTO", inOffice: 0, totalIssued: 0, extra: 0 }
  ],
  last10Days: [
    { date: "8-Sep", count: 140 },
    { date: "9-Sep", count: 153 },
    { date: "10-Sep", count: 181 },
    { date: "11-Sep", count: 151 },
    { date: "12-Sep", count: 161 },
    { date: "13-Sep", count: 64 },
    { date: "14-Sep", count: 71 },
    { date: "15-Sep", count: 134 },
    { date: "16-Sep", count: 124 },
    { date: "9/17/2026", count: 153 }
  ]
};

let currentStep = 0;
let isAudioOn = true;
let synth = window.speechSynthesis;
let canvas, ctx;

document.addEventListener('DOMContentLoaded', () => {
  initMaleCharacterCanvas();
  renderStep(currentStep);
  renderDots();
  setupEventListeners();
  renderOperationsDashboard(fallbackOpsData);
  fetchLiveDataFromSheet();
  if (window.lucide) lucide.createIcons();
});

async function fetchLiveDataFromSheet() {
  try {
    if (!APPS_SCRIPT_API_URL || APPS_SCRIPT_API_URL.includes("PASTE_YOUR_APPS_SCRIPT")) {
      throw new Error("Unconfigured Script URL");
    }
    const res = await fetch(APPS_SCRIPT_API_URL);
    const json = await res.json();
    if (json && json.status === "success") {
      renderOperationsDashboard(json);
    }
  } catch(e) {
    console.warn("Rendering fallback Operations Analytics layout:", e.message);
    renderOperationsDashboard(fallbackOpsData);
  }
}

async function applyOpsDateFilter() {
  const pickerVal = document.getElementById('ops-date-picker').value;
  if (!pickerVal) return;
  
  const parts = pickerVal.split('-');
  const formattedDate = `${parseInt(parts[1])}/${parseInt(parts[2])}/${parts[0]}`;

  try {
    const res = await fetch(`${APPS_SCRIPT_API_URL}?date=${encodeURIComponent(formattedDate)}`);
    const json = await res.json();
    if (json && json.status === "success") {
      renderOperationsDashboard(json);
    }
  } catch(e) {
    renderOperationsDashboard(fallbackOpsData);
  }
}

function renderOperationsDashboard(data) {
  // 1. Hourly Table Rendering
  const hourlyBody = document.getElementById('hourly-table-body');
  const hourlyFoot = document.getElementById('hourly-table-foot');
  
  if (hourlyBody) {
    hourlyBody.innerHTML = '';
    let sums = { h10:0, h11:0, h12:0, h1:0, h2:0, h3:0, h4:0, h5:0, h6:0, h7:0, h8:0, total:0, totalIssued:0 };

    data.hourlyData.forEach(row => {
      sums.h10 += row.h10; sums.h11 += row.h11; sums.h12 += row.h12; sums.h1 += row.h1;
      sums.h2 += row.h2; sums.h3 += row.h3; sums.h4 += row.h4; sums.h5 += row.h5;
      sums.h6 += row.h6; sums.h7 += row.h7; sums.h8 += row.h8; sums.total += row.total; sums.totalIssued += row.totalIssued;

      hourlyBody.innerHTML += `
        <tr>
          <td><strong>${row.rto}</strong></td>
          <td>${row.h10}</td><td>${row.h11}</td><td>${row.h12}</td><td>${row.h1}</td>
          <td>${row.h2}</td><td>${row.h3}</td><td>${row.h4}</td><td>${row.h5}</td>
          <td>${row.h6}</td><td>${row.h7}</td><td>${row.h8}</td>
          <td style="background:#e8eaf6; font-weight:800;">${row.total}</td>
          <td style="background:#ffebee; font-weight:800; color:#eb0029;">${row.totalIssued}</td>
        </tr>
      `;
    });

    if (hourlyFoot) {
      hourlyFoot.innerHTML = `
        <tr style="background:#f1f2f4; font-weight:900;">
          <td>TOTAL</td>
          <td>${sums.h10}</td><td>${sums.h11}</td><td>${sums.h12}</td><td>${sums.h1}</td>
          <td>${sums.h2}</td><td>${sums.h3}</td><td>${sums.h4}</td><td>${sums.h5}</td>
          <td>${sums.h6}</td><td>${sums.h7}</td><td>${sums.h8}</td>
          <td style="background:#c5cae9;">${sums.total}</td>
          <td style="background:#ffcdd2; color:#eb0029;">${sums.totalIssued}</td>
        </tr>
      `;
    }
  }

  // 2. All Over Issued Table Rendering
  const allBody = document.getElementById('allover-table-body');
  const allFoot = document.getElementById('allover-table-foot');
  if (allBody) {
    allBody.innerHTML = '';
    let sums = { inOffice: 0, totalIssued: 0, extra: 0 };

    data.allOverIssued.forEach(row => {
      sums.inOffice += row.inOffice;
      sums.totalIssued += row.totalIssued;
      sums.extra += row.extra;

      allBody.innerHTML += `
        <tr>
          <td><strong>${row.rto}</strong></td>
          <td class="text-right">${row.inOffice}</td>
          <td class="text-right">${row.totalIssued}</td>
          <td class="text-right">${row.extra}</td>
        </tr>
      `;
    });

    if (allFoot) {
      allFoot.innerHTML = `
        <tr style="background:#e8f5e9; font-weight:900;">
          <td>TOTAL</td>
          <td class="text-right">${sums.inOffice}</td>
          <td class="text-right">${sums.totalIssued}</td>
          <td class="text-right">${sums.extra}</td>
        </tr>
      `;
    }
  }

  // 3. Last 10 Days Table Rendering
  const last10Body = document.getElementById('last10-table-body');
  const last10GrandTotal = document.getElementById('last10-grand-total');
  if (last10Body) {
    last10Body.innerHTML = '';
    let total10 = 0;

    data.last10Days.forEach(row => {
      total10 += row.count;
      last10Body.innerHTML += `
        <tr>
          <td><strong>${row.date}</strong></td>
          <td class="text-right">${row.count}</td>
        </tr>
      `;
    });

    if (last10GrandTotal) last10GrandTotal.innerText = total10;
  }

  // 4. Common RTO Scorecard Rendering
  const commonRtoBody = document.getElementById('common-rto-body');
  if (commonRtoBody) {
    commonRtoBody.innerHTML = '';
    data.allOverIssued.forEach(row => {
      commonRtoBody.innerHTML += `
        <tr>
          <td><strong>${row.rto}</strong></td>
          <td class="text-right">${row.totalIssued}</td>
        </tr>
      `;
    });
  }
}

// Avatar Canvas & SOP Step Controls (UNTOUCHED)
function initMaleCharacterCanvas() {
  canvas = document.getElementById('maleAvatarCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  drawMaleCharacter(0);
}

function drawMaleCharacter(mouthOpen) {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#EEF0F3"; ctx.beginPath(); ctx.arc(110, 110, 100, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#0D0D0D"; ctx.beginPath(); ctx.ellipse(110, 200, 75, 40, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#FFFFFF"; ctx.beginPath(); ctx.moveTo(90, 160); ctx.lineTo(110, 185); ctx.lineTo(130, 160); ctx.fill();
  ctx.fillStyle = "#EB0029"; ctx.beginPath(); ctx.moveTo(106, 160); ctx.lineTo(114, 160); ctx.lineTo(112, 195); ctx.lineTo(108, 195); ctx.fill();
  ctx.fillStyle = "#F5C396"; ctx.beginPath(); ctx.arc(110, 110, 50, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#0D0D0D"; ctx.beginPath(); ctx.arc(110, 95, 52, Math.PI * 0.85, Math.PI * 2.15); ctx.fill();
  ctx.strokeStyle = "#EB0029"; ctx.lineWidth = 2.5; ctx.strokeRect(80, 100, 24, 16); ctx.strokeRect(116, 100, 24, 16);
  ctx.beginPath(); ctx.moveTo(104, 108); ctx.lineTo(116, 108); ctx.stroke();
  ctx.fillStyle = "#000000"; ctx.beginPath(); ctx.arc(92, 108, 3, 0, Math.PI * 2); ctx.arc(128, 108, 3, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#EB0029"; ctx.beginPath(); ctx.ellipse(110, 138, 10, 2 + mouthOpen * 10, 0, 0, Math.PI * 2); ctx.fill();
}

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
  if (isAudioOn) speakHindiVoice(data.hindiAudio);
}

function speakHindiVoice(text) {
  if (!synth) return;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'hi-IN'; utterance.rate = 0.95;
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
    dot.addEventListener('click', () => { currentStep = idx; renderStep(currentStep); });
    container.appendChild(dot);
  });
}

function updateDots(activeIndex) {
  const dots = document.querySelectorAll('.dot-item');
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === activeIndex));
}

function setupEventListeners() {
  document.getElementById('prev-btn')?.addEventListener('click', () => { if (currentStep > 0) { currentStep--; renderStep(currentStep); } });
  document.getElementById('next-btn')?.addEventListener('click', () => { if (currentStep < stepsData.length - 1) { currentStep++; renderStep(currentStep); } });
  document.getElementById('replay-voice-btn')?.addEventListener('click', () => { speakHindiVoice(stepsData[currentStep].hindiAudio); });
}
