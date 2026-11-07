# Akhand Shukla — Animated Art Portfolio (v2.0)

> High-performance dark cinematic portfolio of **Akhand Shukla** — Software Developer & AI Engineer. Engineered with a **zero-lag 60 FPS HTML5 Canvas video-to-frame pipeline**, Lenis momentum smooth scrolling, and complete alignment with the latest curriculum vitae.

---

## ⚡ What was Optimized & Upgraded

### 1. Zero-Lag 60 FPS Cinematic Canvas Pipeline
- **Root Cause of Old Lag**: The previous version scrubbed an MP4/WebM `<video>` element on scroll via `currentTime = progress * duration`. In modern browsers, frequent hardware video decode seeking produces CPU/GPU thread contention, dropped frames, and visual jitter. Additionally, dynamic CSS `filter: blur(...)` during scroll forced continuous re-rasterization.
- **New Architecture**: 
  - Extracted 240 WebP sequence frames into `/public/sequence/`.
  - Built `CinematicCanvas.jsx` using HTML5 Canvas `drawImage` with DPI-aware devicePixelRatio scaling.
  - Initial 40 frames preloaded instantly for zero-latency first interaction; remaining frames cached progressively in background.
  - Smooth requestAnimationFrame lerping (`current += (target - current) * 0.16`).
  - Replaced expensive dynamic blur filters with transform/opacity transitions.
  - Result: **Locked 60+ FPS bi-directional scrubbing with zero stutter on all displays**.

### 2. Complete Resume Sync (5 Flagship Production Platforms)
1. **Jal Sutra — AI-Powered Groundwater Contamination Platform**:
   - Shortlisted for Smart India Hackathon (SIH) 2026.
   - Computes Heavy Metal Pollution Index (HPI), Heavy Metal Evaluation Index (HEI), and Contamination Degree (Cd).
   - Geospatial GIS heatmaps & RAG-driven remediation.
2. **CivicPulse AI — Civic Demand Intelligence Platform**:
   - 4th Place at GDG Indore Hackathon 2026 (Team Prompt Pirates).
   - Google Gemini Multimodal GenAI (Hinglish audio transcription & damage validation) + Leaflet.js ward clustering.
3. **Tarazu (Vakeel Vision) — AI Legal Contract Analysis Platform**:
   - Automated commercial contract clause analysis, liability detection, and Dockerized FastAPI microservices.
4. **SurakshaPay (Sentinel-Recover) — AI Revenue Recovery Engine**:
   - Autonomous Razorpay recovery with HMAC SHA-256 webhooks, WhatsApp recovery drawer, and tamper-evident audit ledger seal.
5. **Model Wars — Dual-LLM Agentic Battle Arena**:
   - Competitive duels between Groq API and Google Gemini 2.5 Flash orchestrated via LangGraph state machines.

### 3. Integrated Resume Viewer & Modal
- Direct in-browser formatted CV viewer with one-click print/PDF support and clean Markdown/HTML endpoints (`/resume` and `/RESUME.md`).

---

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4, Liquid Glass Architecture, Custom Fonts (`Bebas Neue` & `Barlow`)
- **Motion**: Lenis Momentum Smooth Scroll + Custom Canvas Frame Engine
- **Icons**: Lucide React

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```
