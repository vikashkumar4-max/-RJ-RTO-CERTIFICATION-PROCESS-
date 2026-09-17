// ==========================================
// 1. GOOGLE SHEET LINK CONFIGURATION
// ==========================================
// Apni Published Google Sheet ka CSV link yahan paste karein
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vXXXX/pub?output=csv";

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
      "Sabse pehle Pan India Response Sheet open karein aur Rajasthan RTO ke naye installation requests verify karein. Iske baad device category ke anusaar respective TopUp Sheet me accurate entry karein..",
      "Check karein ki Rajasthan (RJ) RTO ke liye request valid aur pending status me hai ya nahi.",
      "Duplication se bachne ke liye vehicle/customer entry ID double-check karein."
    ],
    proTip: "⚠️ Chetavni / Tip: Galat sheet ya galat category me entry karne se aage ka poora process blocked ho sakta hai.",
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
    proTip: "Galat package wale vehicle par aage kaam na karein, ise turant remark karke hold par daalein.",
    hindiAudio: " वेरीफाइड डिटेल्स को राजस्थान स्पेसिफिक शीट में एंटर करें। डेट और आरटीओ कोड सही से भरना अनिवार्य है।व्हीकल नंबर को कस्टमर 360 में सर्च करें और पैकेज वेरीफाई करें। अगर पैकेज सही है तभी आगे बढ़ें, वरना रीमार्क में राँग पैकेज सिलेक्टेड दर्ज करके होल्ड करें।अलर्ट डिवाइस में व्हीकल सर्च करके उसका आईएमईआई, सीरियल नंबर, आईसीसीआईडी और ई-सिम नंबर टॉप-अप शीट में सही-सही दर्ज करें"
  },
  {
    step: 3,
    title: "TopUp According To Requirement",
    category: "Wallet & Balance Phase",
    system: "Vahan Portal Wallet",
    instructions: [
      "Process fees aur Fastag/Certificate charges ke anusaar wallet balance check karein.",
      "Agar balance kam hai, toh requirement ke hisab se exact amount ka TopUp karein.",
      "TopUp Transaction ID ko record sheet me save kar lein."
    ],
    proTip: "TopUp hamesha official bank gateway se hi karein aur receipt reference number secure rakhein.",
    hindiAudio: "आईसीसीआईडी के ज़रिये ऑफिसियल पोर्टल पर जाकर टॉप-अप बैलेंस चेक करें। पैकेज के अनुसार आवश्यकता पड़ने पर टॉप-अप पूरा करें और शीट में एंट्री करना न भूलें।"
  },
  {
    step: 4,
    title: "Tagging On Vahan Portal",
    category: "Vahan Portal Integration",
    system: "Govt Vahan Portal",
    instructions: [
      "Official Vahan Portal par login karein.",
      "Vehicle Class aur Chassis Number enter karke device tagging start karein.",
      "Tagging details ko submit karke system status Green hone ka wait karein."
    ],
    proTip: "Vahan portal timeout se bachne ke liye details pehle se copy karke rakhein.",
    hindiAudio: "वाहन पोर्टल पर जाकर व्हीकल नंबर की टैगिंग करें। यदि कोई  इश्यू दिखे, तो उसे तुरंत ग्रुप पर शेयर करके रिसॉल्व करवाएं।"
  },
  {
    step: 5,
    title: "IMEI Number Whitelist On RJ NIC Portal",
    category: "NIC Whitelisting",
    system: "RJ NIC Portal",
    instructions: [
      "RJ NIC (National Informatics Centre) portal me credentials se login karein.",
      "IMEI Whitelisting section me jaakar device ka 15-digit IMEI number enter karein.",
      "Whitelisting status Active/Approved check karein."
    ],
    proTip: "IMEI number me 1 digit ki bhi galti hone par approval reject ho jayega, 2 baar verify karein.",
    hindiAudio: "राजस्थान एनआईसी पोर्टल पर जाकर डिवाइस का आईएमईआई नंबर व्हाइटलिस्ट करें। इसके अप्रूव होने पर ही सर्टिफिकेट का प्रोसेस शुरू होगा"
  },
  {
    step: 6,
    title: "Clear Check By CMD",
    category: "CMD Quality Audit",
    system: "CMD Portal / Backend Audit",
    instructions: [
      "CMD System par data synchronization run karein.",
      "Backend quality audit check karein ki koi red flag ya error code toh nahi aa raha.",
      "Clear Status verified aane par hi aage badhein."
    ],
    proTip: "CMD Clear Status ka screenshot audit proof ke liye save karein.",
    hindiAudio: "अब एक्टिवेशन प्रोसेस के लिए सरकारी गाइडलाइन्स के अनुसार सभी निर्देशों का पालन करें और सभी आवश्यक सिस्टम चेक्स क्लियर करें।"
  },
  {
    step: 7,
    title: "Activation With Pan India Response Details",
    category: "Final Activation",
    system: "Activation Portal",
    instructions: [
      "Pan India Response Form se saari verified credentials collect karein.",
      "Activation portal par details paste karein aur Activation button trigger karein.",
      "Active Status 'SUCCESS' confirm karein."
    ],
    proTip: "Response form ki latest entry hi use karein taaki duplicate activation issue na ho.",
    hindiAudio: "एक्टिवेशन चेक्स पूरे होने के बाद व्हीकल ओनर की सभी आवश्यक जानकारी ध्यानपूर्वक भरें और फॉर्म सबमिट करें।"
  },
  {
    step: 8,
    title: "Send OTP On Registered OPT Number",
    category: "OTP Verification",
    system: "SMS Gateway",
    instructions: [
      "Customer/Authorized person ke OPT mobile number par OTP trigger karein.",
      "System timer start hone ka wait karein.",
      "Customer ko politely OTP share karne ke liye communicate karein."
    ],
    proTip: "OTP trigger karte hi timing note karein kyunki OTP validity limited hoti hai.",
    hindiAudio: "सबमिट करने के बाद ओनर के मोबाइल पर गया हुआ ओटीपी प्राप्त करके दर्ज करें। ओटीपी वेरीफाई होते ही सर्टिफिकेट जनरेट हो जाएगा"
  },
  {
    step: 9,
    title: "Fill OTP & Share Certificate On Group",
    category: "Certificate Generation",
    system: "Group Communication",
    instructions: [
      "Customer dwara mila OTP screen par fill karke Validate par click karein.",
      "RTO Certification PDF generate karke download karein.",
      "Download Certificate ko official Work WhatsApp/Telegram Group par share karein."
    ],
    proTip: "Certificate sharing format me Vehicle No aur Customer Name zaroor mention karein.",
    hindiAudio: "जनरेट हुआ सर्टिफिकेट और वाहन पोर्टल से फिटमेंट लेटर डाउनलोड करके कंप्यूटर में सेव करें। फिर इन दोनों पेपर्स को ऑफिसियल व्हाट्सएप ग्रुप पर शेयर करके टास्क पूरा करें। धन्यवाद!"
  },
  {
    step: 10,
    title: "Mark Certificate Issued On Data Sheet",
    category: "Process Closure",
    system: "Master Tracking Sheet",
    instructions: [
      "Work Data Sheet me 'Certificate Status' ko 'ISSUED' mark karein.",
      "Issue Date, Time, aur Certificate ID enter karke row highlight green karein.",
      "Process successfully complete ho chuka hai!"
    ],
    proTip: "Sheet close karne se pehle File Save/Auto-sync zaroor verify karein.",
    hindiAudio: " बधाई हो, प्रोसेस पूरा हुआ!"
  }
];

// ==========================================
// 3. GLOBAL VARIABLES
// ==========================================
let currentStep = 0;
let isAudioOn = true;
let synth = window.speechSynthesis;
let voices = [];

// Ensure voices are loaded properly in Chrome / Mobile Browsers
function loadVoices() {
  voices = synth.getVoices();
}
loadVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = loadVoices;
}

// ==========================================
// 4. INITIALIZATION & DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderStep(currentStep);
  renderDots();
  setupEventListeners();
  fetchLiveDataFromSheet(); // Live Sheet Report Data Call
  if (window.lucide) lucide.createIcons();
});

// ==========================================
// 5. STEP RENDER & NAVIGATION LOGIC
// ==========================================
function renderStep(index) {
  const data = stepsData[index];
  
  document.getElementById('current-step-num').innerText = data.step;
  document.getElementById('total-steps-num').innerText = stepsData.length;
  document.getElementById('progress-bar').style.width = `${((index + 1) / stepsData.length) * 100}%`;

  const displayArea = document.getElementById('step-card-display');
  displayArea.innerHTML = `
    <div class="step-card">
      <div class="step-header">
        <div class="step-number-tag">0${data.step}</div>
        <div class="step-title-group">
          <span class="category-tag">${data.category}</span>
          <h2>${data.title}</h2>
        </div>
      </div>

      <div class="system-badge">
        <i data-lucide="monitor"></i> System Required: ${data.system}
      </div>

      <div class="step-body-grid">
        <div class="instruction-box">
          <h3><i data-lucide="list-checks"></i> Execution Steps</h3>
          <ul>
            ${data.instructions.map(inst => `<li>${inst}</li>`).join('')}
          </ul>
        </div>

        <div class="action-tip-card">
          <h4><i data-lucide="lightbulb"></i> Pro Employee Tip</h4>
          <p>${data.proTip}</p>
        </div>
      </div>
    </div>
  `;

  document.getElementById('dialogue-text').innerText = data.hindiAudio;

  if (window.lucide) lucide.createIcons();

  document.getElementById('prev-btn').disabled = index === 0;
  const nextBtn = document.getElementById('next-btn');
  if (index === stepsData.length - 1) {
    nextBtn.innerHTML = `Finish Training <i data-lucide="check-circle"></i>`;
  } else {
    nextBtn.innerHTML = `Next Step <i data-lucide="arrow-right"></i>`;
  }

  updateDots(index);

  if (isAudioOn) {
    speakHindiInstruction(data.hindiAudio);
  }
}

function renderDots() {
  const dotsContainer = document.getElementById('step-dots-timeline');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  stepsData.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `dot-step ${idx === currentStep ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      currentStep = idx;
      renderStep(currentStep);
    });
    dotsContainer.appendChild(dot);
  });
}

function updateDots(activeIndex) {
  const dots = document.querySelectorAll('.dot-step');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === activeIndex);
  });
}

function setupEventListeners() {
  document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      renderStep(currentStep);
    }
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    if (currentStep < stepsData.length - 1) {
      currentStep++;
      renderStep(currentStep);
    } else {
      alert('Congratulations! Aapne RJ RTO Certification Training successfully poori kar li hai.');
    }
  });

  document.getElementById('toggle-audio-btn').addEventListener('click', function() {
    isAudioOn = !isAudioOn;
    this.classList.toggle('active', isAudioOn);
    this.querySelector('span').innerText = isAudioOn ? 'Audio Guide On' : 'Audio Guide Off';
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
// 6. HINDI VOICE SPEECH ENGINE
// ==========================================
function speakHindiInstruction(text) {
  if (!('speechSynthesis' in window)) return;

  synth.cancel(); // Stop any ongoing speech

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'hi-IN'; // Force Hindi language code

  if (voices.length === 0) voices = synth.getVoices();
  const hindiVoice = voices.find(v => v.lang === 'hi-IN' || v.lang.startsWith('hi') || v.name.includes('Hindi'));
  
  if (hindiVoice) {
    utterance.voice = hindiVoice;
  }

  utterance.rate = 0.9;
  utterance.pitch = 1.0;

  utterance.onstart = () => startTalkingAnimation();
  utterance.onend = () => stopTalkingAnimation();
  utterance.onerror = () => stopTalkingAnimation();

  synth.speak(utterance);
}

function startTalkingAnimation() {
  const waves = document.getElementById('speaker-waves');
  const status = document.getElementById('status-text');
  const avatar = document.getElementById('avatar-wrapper');

  if (waves) waves.classList.add('speaking');
  if (status) status.innerText = 'Speaking Instruction...';
  if (avatar) avatar.style.transform = 'scale(1.05)';
}

function stopTalkingAnimation() {
  const waves = document.getElementById('speaker-waves');
  const status = document.getElementById('status-text');
  const avatar = document.getElementById('avatar-wrapper');

  if (waves) waves.classList.remove('speaking');
  if (status) status.innerText = 'Ready to Guide';
  if (avatar) avatar.style.transform = 'scale(1)';
}

// ==========================================
// 7. GOOGLE SHEET LIVE REPORT DATA FETCH
// ==========================================
async function fetchLiveDataFromSheet() {
  try {
    const response = await fetch(GOOGLE_SHEET_CSV_URL);
    if (!response.ok) throw new Error("Network error fetching sheet");
    
    const csvText = await response.text();
    const rows = csvText.split('\n').map(row => row.split(','));

    // Google Sheet se dynamic values update karein
    if (rows.length > 1) {
      const kpi1Total = document.getElementById('kpi1-total');
      const kpi1Passed = document.getElementById('kpi1-passed');
      const kpi1Pending = document.getElementById('kpi1-pending');
      const kpi1Percent = document.getElementById('kpi1-percent');
      const kpi1Bar = document.getElementById('kpi1-bar');

      if (kpi1Total) kpi1Total.innerText = rows[1][0]?.trim() || '148';
      if (kpi1Passed) kpi1Passed.innerText = rows[1][1]?.trim() || '132';
      if (kpi1Pending) kpi1Pending.innerText = rows[1][2]?.trim() || '16';
      
      const percent1 = rows[1][3]?.trim() || '89.1%';
      if (kpi1Percent) kpi1Percent.innerText = percent1;
      if (kpi1Bar) kpi1Bar.style.width = percent1;

      const kpi2Officers = document.getElementById('kpi2-officers');
      const kpi2Score = document.getElementById('kpi2-score');
      const kpi2Flagged = document.getElementById('kpi2-flagged');
      const kpi2Percent = document.getElementById('kpi2-percent');
      const kpi2Bar = document.getElementById('kpi2-bar');

      if (kpi2Officers) kpi2Officers.innerText = rows[2][0]?.trim() || '24';
      if (kpi2Score) kpi2Score.innerText = rows[2][1]?.trim() || '96.4';
      if (kpi2Flagged) kpi2Flagged.innerText = rows[2][2]?.trim() || '03';

      const percent2 = rows[2][3]?.trim() || '92.0%';
      if (kpi2Percent) kpi2Percent.innerText = percent2;
      if (kpi2Bar) kpi2Bar.style.width = percent2;
    }
  } catch (error) {
    console.log("Sheet link active nahi hai, default static values show hongi:", error);
  }
}
