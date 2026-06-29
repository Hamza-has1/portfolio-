document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. SPLASH SCREEN CONTROLLER
  // ==========================================
  const splash = document.getElementById('splash-screen');
  const heroVideo = document.getElementById('hero-video');
  setTimeout(() => {
    if (splash) {
      splash.style.opacity = '0';
      splash.style.visibility = 'hidden';
      setTimeout(() => {
        splash.style.display = 'none';
        if (heroVideo) {
          heroVideo.play().catch(err => {
            console.log("Auto-play blocked or delayed by browser:", err);
          });
        }
      }, 500);
    }
  }, 2200);

  // ==========================================
  // 2. THEME CONFIG & CONTROLLER
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    } else {
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    }
  }

  // ==========================================
  // 3. RESPONSIVE DRAWER NAVIGATION
  // ==========================================
  const menuToggle = document.getElementById('menu-toggle');
  const drawerClose = document.getElementById('drawer-close');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (menuToggle && drawerClose && mobileDrawer) {
    menuToggle.addEventListener('click', () => mobileDrawer.classList.add('open'));
    drawerClose.addEventListener('click', () => mobileDrawer.classList.remove('open'));
  }

  // ==========================================
  // 4. PORTFOLIO DATABASE (DYNAMIC SUB-PAGES)
  // ==========================================
  const portfolioDb = {
    // Project Case Studies
    'creations/agentic-orchestrator': {
      type: 'creations',
      title: 'Agentic Orchestrator',
      banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      description: 'An autonomous AI agent framework executing multi-step diagnostic workflows, automated code reviewing, and semantic integrations.',
      features: [
        'Procedural task planning based on semantic prompts.',
        'Continuous self-correcting feedback loops with sandboxed execution.',
        'Real-time WebSocket event streams for multi-agent tree dialogs.'
      ],
      technologies: ['Python', 'LangChain', 'FastAPI', 'Docker', 'WebSockets'],
      architecture: 'Client Node &rarr; Agent Planner &rarr; Executor Box &rarr; Validator &rarr; Git Commit',
      problemsSolved: 'Resolved manual diagnostics and testing bottlenecks by deploying automated agents that validate code logic in isolated containers.',
      role: 'Lead Architect',
      challenges: 'Preventing agent loops and handling state memory across deep diagnostic recursive trees.',
      results: 'Reduced manual testing cycles by 70% while improving code review coverage to 95%.',
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    'creations/neuroflow-portal': {
      type: 'creations',
      title: 'NeuroFlow Portal',
      banner: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80',
      description: 'Premium tablet-optimized interface displaying real-time EEG brain waves, diagnostic model classifications, and neural metrics.',
      features: [
        'Real-time smooth SVG wave charting running at 60 FPS.',
        'Low-latency GraphQL API interface polling.',
        'Offline caching architecture utilizing local DB storage.'
      ],
      technologies: ['Flutter', 'Dart', 'GraphQL', 'Hive DB', 'WebSockets'],
      architecture: 'Brain Sensor &rarr; Mobile/Tablet Hub &rarr; Node.js Parser &rarr; GraphQL Subscription',
      problemsSolved: 'Created a highly responsive interface that renders high-frequency brainwave streams without locking UI thread execution.',
      role: 'Mobile UI Lead',
      challenges: 'Rerendering complex canvas operations under low battery conditions on portable medical tablets.',
      results: 'Secured stable 60 FPS charts across legacy and low-end medical tablets.',
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    'creations/neural-classifier': {
      type: 'creations',
      title: 'Neural Classifier',
      banner: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80',
      description: 'Convolution-based fine-tuning pipeline analyzing chest radiographs with integrated Gradio overlays showing XAI saliency coordinates.',
      features: [
        'Integrated PyTorch ConvNeXt and Vision Transformer models.',
        'Grad-CAM saliency heatmaps rendering area metrics.',
        'Automated REST API schema formatting for fast hospital integrations.'
      ],
      technologies: ['Python', 'PyTorch', 'Gradio', 'Docker', 'OpenCV'],
      architecture: 'Radiograph Upload &rarr; FastAPI Endpoint &rarr; PyTorch Model (CUDA) &rarr; Grad-CAM Grid Map',
      problemsSolved: 'Provided radiologists with visual reasoning overlays, helping validate why the model classified specific lung anomalies.',
      role: 'ML Engineer',
      challenges: 'Minimizing false positives and stabilizing predictions across diverse scanner manufacturers.',
      results: 'Achieved a validation ROC-AUC score of 0.982 with inference time under 45ms.',
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    'creations/antigravity-chat': {
      type: 'creations',
      title: 'Antigravity Chat',
      banner: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=1200&q=80',
      description: 'Clean responsive chat client communicating with local and cloud language models featuring local SQLite caching and stream rendering.',
      features: [
        'Markdown rendering with syntax highlighting.',
        'Token-by-token text streaming with request cancellation handlers.',
        'Local conversational logs cached securely in SQLite.'
      ],
      technologies: ['Flutter', 'Dart', 'SQLite', 'Ollama API', 'Markdown'],
      architecture: 'Chat Box UI &rarr; Local Ollama API &rarr; SSE Stream Chunking &rarr; local SQLite logger',
      problemsSolved: 'Developed a local LLM companion interface that works 100% offline, guaranteeing privacy for developer logs.',
      role: 'Frontend Developer',
      challenges: 'Rendering markdown syntax and code blocks dynamically during high-speed token streaming.',
      results: 'Successfully built a local companion client currently used internally by our development labs.',
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    'creations/coding-agent': {
      type: 'creations',
      title: 'Coding Agent',
      banner: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      description: 'A fully autonomous code editing agent executing static analysis, file changes, and resolving local project test suites.',
      features: [
        'Hierarchical abstract syntax tree code parsing.',
        'Dynamic multi-replace diff engine preventing file corruption.',
        'Self-healing compilation error fixer executing terminal commands.'
      ],
      technologies: ['Python', 'AST Parser', 'LangChain', 'Git API', 'Ruff Linter'],
      architecture: 'Prompt Command &rarr; AST Analyzer &rarr; Replacement Engine &rarr; Linter Check &rarr; Test Runner',
      problemsSolved: 'Automated minor code adjustments, lint fixes, and documentation parsing directly within developer terminals.',
      role: 'Core AI Engineer',
      challenges: 'Handling large code bases that exceed context window memory constraints.',
      results: 'Automated 40% of routine boilerplate modifications and package version updates in local tests.',
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    'creations/retrieval-core': {
      type: 'creations',
      title: 'Retrieval Core',
      banner: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
      description: 'Hybrid semantic indexing search engine using sparse & dense text representations optimized for low-latency vector databases.',
      features: [
        'BM25 sparse search merged with dense vector representations.',
        'Reciprocal Rank Fusion (RRF) reranking layers.',
        'Dynamic metadata filtering executed at memory speed.'
      ],
      technologies: ['Python', 'Qdrant', 'SentenceTransformers', 'FastAPI', 'Redis'],
      architecture: 'Query Text &rarr; Dual Encoder Model &rarr; Qdrant Vector Grid &rarr; Reranker Node &rarr; Results List',
      problemsSolved: 'Designed a sub-10ms lookup cache to query millions of diagnostic documents with semantic accuracy.',
      role: 'Backend Architect',
      challenges: 'Optimizing high memory footprint during dense vector embedding generations.',
      results: 'Increased search relevance (NDCG@10) by 18% compared to keyword-only search protocols.',
      github: 'https://github.com',
      demo: 'https://github.com'
    },

    // Job Journeys
    'journey/lead-ai-architect': {
      type: 'journey',
      title: 'Lead AI Architect',
      company: 'Future Intelligence Lab',
      duration: '2024 - Present',
      description: 'Heading cognitive framework designs and microservices orchestrations for future-focused AI systems.',
      responsibilities: [
        'Designed multi-agentic orchestration workflows with 15k+ daily runs.',
        'Engineered high-performance Flutter desktop diagnostics dashboard.',
        'Configured secure vector store layers for retrieval augmented generation.'
      ],
      technologies: ['LangChain', 'Python', 'Flutter', 'Dart', 'FastAPI'],
      challenges: 'Scaling agentic pipelines to support high concurrently running dialog systems without memory leak.',
      solutions: 'Designed a stateless redis-based memory caching server that stores context windows efficiently.',
      achievements: 'Launched agent system which now services over 15,000 requests daily with 99.9% uptime.'
    },
    'journey/senior-ai-developer': {
      type: 'journey',
      title: 'Senior AI Developer',
      company: 'Neural Kinetics',
      duration: '2022 - 2024',
      description: 'Constructed custom computer vision systems and mobile medical diagnostics.',
      responsibilities: [
        'Built diagnostic CNN models with high predictive accuracy.',
        'Developed tablet-optimized remote patient neural charts.',
        'Optimized pipeline configurations reducing training costs.'
      ],
      technologies: ['PyTorch', 'Python', 'Flutter', 'Dart', 'GraphQL'],
      challenges: 'Rendering medical waves at high sample rates on battery-powered devices.',
      solutions: 'Leveraged custom canvas renderers and GPU shaders for web GL visualization.',
      achievements: 'Deployed brain-wave visualizers in 5 regional healthcare diagnostics clinics.'
    },
    'journey/ml-engineer': {
      type: 'journey',
      title: 'ML Engineer',
      company: 'ByteWave Systems',
      duration: '2020 - 2022',
      description: 'Implemented serverless classification APIs and model tuning workflows.',
      responsibilities: [
        'Fine-tuned BERT models for multi-class classification.',
        'Built serverless FastAPI classification APIs on Docker.',
        'Created automated CI/CD validation pipelines.'
      ],
      technologies: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'AWS'],
      challenges: 'Large cold starts of serverless containers when spawning deep learning runtimes.',
      solutions: 'Quantized transformer parameters and restructured slim Docker base images.',
      achievements: 'Reduced API response times by 40% while slashing container cloud costs in half.'
    },

    // Skills
    'skills/your-story': {
      type: 'skills',
      title: 'My Narrative & Story',
      level: 'AI Innovator',
      timeline: '5 Years in Production AI',
      overview: 'Dedicated AI Architect building robust backend servers, agentic frameworks, and cross-platform dashboards that bridge the gap between machine intelligence and premium interfaces.',
      projects: ['Agentic Orchestrator', 'Coding Agent', 'Retrieval Core'],
      tech: ['PyTorch', 'LangChain', 'Docker', 'Python', 'Flutter']
    },
    'skills/education': {
      type: 'skills',
      title: 'Educational History',
      level: 'BS Computer Science',
      timeline: '2016 - 2020 Academic Years',
      overview: 'Graduated with a focus on Deep Learning, Natural Language Processing, and Software Engineering. Maintained core focus on self-directed laboratory research.',
      projects: ['Neural Classifier', 'NeuroFlow Portal'],
      tech: ['PyTorch', 'Python', 'C++', 'Algorithms', 'Mathematics']
    },
    'skills/goals': {
      type: 'skills',
      title: 'Professional Objectives',
      level: 'Vision 2035',
      timeline: 'Continuous Milestones',
      overview: 'Committed to developing next-generation cognitive agent systems that demonstrate true reasoning capabilities and scalable, secure low-latency pipeline structures.',
      projects: ['Agentic Orchestrator', 'Retrieval Core'],
      tech: ['LangChain', 'Vector DBs', 'Kubernetes', 'MLOps']
    },
    'skills/personality': {
      type: 'skills',
      title: 'Working Personality',
      level: 'Analytical Thinker',
      timeline: 'Collaborative Environment',
      overview: 'Details-oriented, proactive problem solver who enjoys working at the intersection of complex algorithms and beautiful front-end designs.',
      projects: ['Antigravity Chat', 'NeuroFlow Portal'],
      tech: ['UI/UX Design', 'Systems Engineering', 'Team Collaboration']
    },

    // Social Networks (Platform Themed)
    'network/linkedin': {
      type: 'network',
      platform: 'LinkedIn',
      username: 'Hamza (AI Architect)',
      bio: 'Lead AI Architect @ Future Intelligence Lab | Constructing Cognitive Agent Systems & Responsive Interfaces.',
      followers: '5,000+ Connections',
      activity: [
        'Shared a new update on multi-agent feedback loop compilation times.',
        'Published case study on low-latency document searches in vector databases.',
        'Celebrated 1 year at Future Intelligence Lab!'
      ],
      link: 'https://linkedin.com',
      color: '#0a66c2',
      verified: true
    },
    'network/instagram': {
      type: 'network',
      platform: 'Instagram',
      username: '@hamza.code',
      bio: 'AI Developer | Sharing snippets of coding workflows, aesthetic dark setups, and agent logs.',
      followers: '12.4K Followers',
      activity: [
        'Posted story showing local Ollama chat client streaming at 90 tokens/sec.',
        'Shared reel on creating 3D cards with mouse tilt parallax effects.',
        'New post: "From Flutter to Native Web - Portfolio Refactoring".'
      ],
      link: 'https://instagram.com',
      color: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
      verified: true
    },
    'network/youtube': {
      type: 'network',
      platform: 'YouTube',
      username: 'Hamza AI Developer',
      bio: 'Aesthetic tutorials on building deep learning models, deploying FastAPI backends, and customizing developer terminals.',
      followers: '25K Subscribers',
      activity: [
        'Uploaded video: "Mastering LangChain Agentic workflows in 15 minutes".',
        'Livestream: "Building a Flutter medical wave chart from scratch".',
        'Community post: "What AI tool should we build next?"'
      ],
      link: 'https://youtube.com',
      color: '#ff0000',
      verified: true
    },
    'network/facebook': {
      type: 'network',
      platform: 'Facebook',
      username: 'Hamza Code',
      bio: 'AI & Developer news updates, software engineering quotes, and project releases.',
      followers: '2,800 Followers',
      activity: [
        'Shared article: "The Future of Abstract Syntax Tree Parsers in AI Agents".',
        'Posted update: "My portfolio conversion to Native Web is complete!"',
        'Created album: "Tech Lab Setup v3".'
      ],
      link: 'https://facebook.com',
      color: '#1877f2',
      verified: false
    },
    'network/twitter': {
      type: 'network',
      platform: 'X (Twitter)',
      username: '@hamza_architect',
      bio: 'Tweeting about agent loops, LLM quantization, local LLMs, and hot tech takes.',
      followers: '3,400 Followers',
      activity: [
        'Tweet: "If your AI agent doesn\'t have self-correcting validation cycles, it\'s just a complex switch statement."',
        'Retweeted: Ollama support for new vision models.',
        'Tweet: "Native web (HTML/CSS) transitions feel so much lighter than heavy WebAssembly runtimes. Lesson learned."'
      ],
      link: 'https://twitter.com',
      color: '#000000',
      verified: true
    },
    'network/github': {
      type: 'network',
      platform: 'GitHub',
      username: '@hamza-ai',
      bio: 'Open-source contributor. Home of Agentic Orchestrator, Retrieval Core, and other diagnostic experiments.',
      followers: '850 Stars',
      activity: [
        'Committed 24 changes to agentic-orchestrator repository.',
        'Merged pull request #4: "Optimize memory caching in local chat databases".',
        'Created new repository: low-latency-eeg-charting.'
      ],
      link: 'https://github.com',
      color: '#24292e',
      verified: true
    }
  };

  // ==========================================
  // 5. CLIENT-SIDE ROUTER NAVIGATION
  // ==========================================
  const panels = document.querySelectorAll('.page-panel');
  const navLinks = document.querySelectorAll('.nav-link');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  const mainSections = document.querySelectorAll('.section');
  const mainSectionsArray = Array.from(mainSections);
  const pagePanels = document.querySelectorAll('.page-panel');

  let currentSectionIndex = 0;
  let isScrolling = false;

  function router() {
    const hash = window.location.hash || '#launch';
    
    // Close mobile drawer on navigation
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
    }

    // Handle Deep-Linked details (overlays)
    if (hash.startsWith('#creations/') || hash.startsWith('#journey/') || hash.startsWith('#skills/') || hash.startsWith('#network/')) {
      const path = hash.substring(1);
      showPanel('page-detail');
      renderDetail(path);
      return;
    }

    if (hash === '#digital-card') {
      showPanel('digital-card');
      return;
    }

    // Standard static sections (hide overlays, scroll page-container to target)
    hideAllPanels();
    
    const pageId = hash.substring(1);
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
      const index = mainSectionsArray.indexOf(targetSection);
      if (index !== -1) {
        currentSectionIndex = index;
        scrollToSection(index);
        setActiveNavLink(pageId);
        
        mainSections.forEach(sec => sec.classList.remove('active'));
        targetSection.classList.add('active');
      }
    } else {
      currentSectionIndex = 0;
      scrollToSection(0);
      setActiveNavLink('launch');
      const startSec = document.getElementById('launch');
      if (startSec) {
        mainSections.forEach(sec => sec.classList.remove('active'));
        startSec.classList.add('active');
      }
    }
  }

  function showPanel(panelId) {
    pagePanels.forEach(panel => {
      if (panel.id === panelId) {
        panel.style.display = 'flex';
        setTimeout(() => {
          panel.classList.add('active');
        }, 50);
      } else {
        panel.classList.remove('active');
        setTimeout(() => {
          panel.style.display = 'none';
        }, 1000);
      }
    });
  }

  function hideAllPanels() {
    pagePanels.forEach(panel => {
      panel.classList.remove('active');
      setTimeout(() => {
        panel.style.display = 'none';
      }, 1000);
    });
  }

  function setActiveNavLink(id) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    drawerLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Smooth Snapping Scroll Controller for Mouse Wheel
  const pageContainer = document.querySelector('.page-container');
  if (pageContainer) {
    pageContainer.addEventListener('wheel', (e) => {
      // Only snap scroll if overlays are not active
      const activeOverlay = document.querySelector('.page-panel.active');
      if (activeOverlay) return;

      if (window.innerWidth < 1024) return; // Standard scrolling on mobile
      e.preventDefault();
      if (isScrolling) return;

      if (e.deltaY > 0) {
        if (currentSectionIndex < mainSectionsArray.length - 1) {
          currentSectionIndex++;
          updateHash(currentSectionIndex);
        }
      } else {
        if (currentSectionIndex > 0) {
          currentSectionIndex--;
          updateHash(currentSectionIndex);
        }
      }
    }, { passive: false });
  }

  function updateHash(index) {
    const targetSection = mainSectionsArray[index];
    if (targetSection) {
      const id = targetSection.getAttribute('id');
      window.location.hash = `#${id}`;
    }
  }

  function scrollToSection(index) {
    if (!pageContainer || !mainSectionsArray[index]) return;
    isScrolling = true;
    
    const targetOffset = mainSectionsArray[index].offsetTop;
    const startScrollTop = pageContainer.scrollTop;
    const distance = targetOffset - startScrollTop;
    const duration = 1000; // smooth easing transition (1 second)
    let startTime = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animateScroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      pageContainer.scrollTop = startScrollTop + (distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isScrolling = false;
      }
    }

    requestAnimationFrame(animateScroll);
  }

  // Intersection Observer to update active nav state dynamically on manual scrolls (especially on mobile)
  const sectionObserverOptions = {
    root: pageContainer,
    threshold: 0.5
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    // Only track intersection highlights if overlays are not active
    const activeOverlay = document.querySelector('.page-panel.active');
    if (activeOverlay) return;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        setActiveNavLink(id);
        
        mainSections.forEach(sec => sec.classList.remove('active'));
        entry.target.classList.add('active');
        
        // Sync currentSectionIndex to avoid snap back loops
        const index = mainSectionsArray.indexOf(entry.target);
        if (index !== -1) {
          currentSectionIndex = index;
        }
      }
    });
  }, sectionObserverOptions);

  mainSections.forEach(section => {
    sectionObserver.observe(section);
  });



  // ==========================================
  // 6. DETAIL PAGE RENDER ENGINE
  // ==========================================
  const detailDynamicContent = document.getElementById('detail-dynamic-content');
  const btnDetailBack = document.getElementById('btn-detail-back');
  const detailBackLabel = document.getElementById('detail-back-label');

  function renderDetail(path) {
    const data = portfolioDb[path];
    if (!data) {
      detailDynamicContent.innerHTML = `<h3 style="text-align:center; margin-top: 50px;">Details for path "${path}" not found.</h3>`;
      btnDetailBack.onclick = () => window.location.hash = '#launch';
      detailBackLabel.textContent = 'Back to Home';
      return;
    }

    // Configure Back Link
    if (data.type === 'creations') {
      btnDetailBack.onclick = () => window.location.hash = '#creations';
      detailBackLabel.textContent = 'Back to Creations';
    } else if (data.type === 'journey') {
      btnDetailBack.onclick = () => window.location.hash = '#journey';
      detailBackLabel.textContent = 'Back to Journey';
    } else if (data.type === 'skills') {
      btnDetailBack.onclick = () => window.location.hash = '#identity';
      detailBackLabel.textContent = 'Back to Identity';
    } else if (data.type === 'network') {
      btnDetailBack.onclick = () => window.location.hash = '#network';
      detailBackLabel.textContent = 'Back to Network';
    }

    let html = '';

    if (data.type === 'creations') {
      // Find Next/Prev projects
      const keys = Object.keys(portfolioDb).filter(k => k.startsWith('creations/'));
      const currentIndex = keys.indexOf(path);
      const prevKey = currentIndex > 0 ? keys[currentIndex - 1] : keys[keys.length - 1];
      const nextKey = currentIndex < keys.length - 1 ? keys[currentIndex + 1] : keys[0];

      html = `
        <div class="detail-banner-container" style="position:relative; border-radius:16px; overflow:hidden; height:240px;">
          <img src="${data.banner}" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.65);" alt="${data.title}">
          <div style="position:absolute; bottom:20px; left:20px; z-index:3;">
            <span class="tech-badge" style="margin-bottom:8px;">CASE STUDY</span>
            <h1 style="font-family:var(--font-heading); font-size:28px; font-weight:700; color:white;">${data.title}</h1>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1.8fr 1.2fr; gap:28px; margin-top:16px;">
          <div>
            <h3 style="font-family:var(--font-heading); font-size:18px; margin-bottom:8px; color:var(--primary);">Project Overview</h3>
            <p style="font-size:14px; line-height:1.6; color:var(--text-secondary); margin-bottom:20px;">${data.description}</p>
            
            <h3 style="font-family:var(--font-heading); font-size:18px; margin-bottom:8px; color:var(--primary);">Key Features</h3>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:10px; margin-bottom:20px;">
              ${data.features.map(f => `<li style="font-size:13.5px; color:var(--text-secondary); position:relative; padding-left:14px;"><span style="position:absolute; left:0; color:var(--primary);">▸</span>${f}</li>`).join('')}
            </ul>

            <h3 style="font-family:var(--font-heading); font-size:18px; margin-bottom:8px; color:var(--primary);">Flow Architecture</h3>
            <code style="display:block; padding:16px; border-radius:8px; background:var(--surface); border:1px solid var(--border); font-size:12px; color:var(--primary); line-height:1.4;">${data.architecture}</code>
          </div>

          <div style="display:flex; flex-direction:column; gap:20px;">
            <div class="glass-card" style="padding:20px; border-radius:12px; border:1px solid var(--border);">
              <h4 style="font-family:var(--font-heading); font-size:15px; margin-bottom:12px;">Metadata</h4>
              <div style="display:flex; flex-direction:column; gap:10px; font-size:12.5px;">
                <div><strong style="color:var(--text-primary);">My Role:</strong> <span style="color:var(--text-secondary); float:right;">${data.role}</span></div>
                <hr style="border:0; border-top:1px solid var(--border);">
                <div><strong style="color:var(--text-primary);">Latency Focus:</strong> <span style="color:var(--text-secondary); float:right;">High Speed</span></div>
              </div>
            </div>

            <div class="glass-card" style="padding:20px; border-radius:12px; border:1px solid var(--border);">
              <h4 style="font-family:var(--font-heading); font-size:15px; margin-bottom:12px; color:var(--primary);">Technologies</h4>
              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                ${data.technologies.map(t => `<span class="tech-badge" style="font-size:10px; background-color:var(--surface); border-color:var(--border); color:var(--text-secondary);">${t}</span>`).join('')}
              </div>
            </div>

            <div style="display:flex; gap:12px; width:100%;">
              <a href="${data.github}" target="_blank" class="btn btn-secondary" style="flex:1; text-align:center; padding:10px 0; font-size:13px; font-weight:600; text-decoration:none;">GitHub Repo</a>
              <a href="${data.demo}" target="_blank" class="btn btn-primary" style="flex:1; text-align:center; padding:10px 0; font-size:13px; font-weight:600; text-decoration:none;">Live Demo</a>
            </div>
          </div>
        </div>

        <div style="margin-top:20px; padding:20px; border-radius:12px; background:var(--surface); border:1px solid var(--border);">
          <h3 style="font-family:var(--font-heading); font-size:17px; margin-bottom:8px; color:var(--primary);">Problem Solved</h3>
          <p style="font-size:13.5px; line-height:1.55; color:var(--text-secondary); margin-bottom:14px;">${data.problemsSolved}</p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div>
              <strong style="font-size:13px; color:var(--text-primary);">Challenge Encountered:</strong>
              <p style="font-size:12.5px; color:var(--text-secondary); margin-top:2px;">${data.challenges}</p>
            </div>
            <div>
              <strong style="font-size:13px; color:var(--text-primary);">Metric/Result Achieved:</strong>
              <p style="font-size:12.5px; color:var(--text-secondary); margin-top:2px;">${data.results}</p>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; margin-top:28px; border-top:1px solid var(--border); padding-top:20px;">
          <a href="#${prevKey}" style="text-decoration:none; color:var(--text-secondary); font-size:13.5px; font-weight:600; display:flex; align-items:center; gap:6px;">&larr; Previous Case</a>
          <a href="#${nextKey}" style="text-decoration:none; color:var(--primary); font-size:13.5px; font-weight:600; display:flex; align-items:center; gap:6px;">Next Case &rarr;</a>
        </div>
      `;
    } else if (data.type === 'journey') {
      html = `
        <div class="glass-card" style="padding:32px; border-radius:16px; border:1px solid var(--border); display:flex; flex-direction:column; gap:20px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <span class="tech-badge" style="margin-bottom:8px;">PROFESSIONAL JOURNEY</span>
              <h1 style="font-family:var(--font-heading); font-size:26px; font-weight:700; color:white;">${data.title}</h1>
              <h4 style="font-family:var(--font-heading); font-size:16px; color:var(--primary); margin-top:4px;">${data.company}</h4>
            </div>
            <span style="font-size:12px; font-weight:700; color:var(--text-secondary);">${data.duration}</span>
          </div>
          <hr style="border:0; border-top:1px solid var(--border);">
          
          <div>
            <h3 style="font-family:var(--font-heading); font-size:18px; margin-bottom:10px; color:var(--primary);">Core Responsibilities</h3>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:8px;">
              ${data.responsibilities.map(r => `<li style="font-size:13.5px; color:var(--text-secondary); position:relative; padding-left:14px;"><span style="position:absolute; left:0; color:var(--primary);">▸</span>${r}</li>`).join('')}
            </ul>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; background:rgba(255,255,255,0.01); border:1px solid var(--border); border-radius:10px; padding:20px;">
            <div>
              <strong style="font-size:13.5px; color:var(--text-primary);">Challenge Faced:</strong>
              <p style="font-size:12.5px; color:var(--text-secondary); margin-top:4px; line-height:1.4;">${data.challenges}</p>
            </div>
            <div>
              <strong style="font-size:13.5px; color:var(--text-primary);">Our Solution:</strong>
              <p style="font-size:12.5px; color:var(--text-secondary); margin-top:4px; line-height:1.4;">${data.solutions}</p>
            </div>
          </div>

          <div>
            <strong style="font-size:13.5px; color:var(--text-primary);">Core Achievement Metric:</strong>
            <p style="font-size:13px; color:var(--primary); font-weight:600; margin-top:2px;">${data.achievements}</p>
          </div>

          <div>
            <h4 style="font-family:var(--font-heading); font-size:15px; margin-bottom:8px; color:var(--text-primary);">Technologies Applied</h4>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${data.technologies.map(t => `<span class="tech-badge" style="font-size:10px; background-color:var(--surface); border-color:var(--border); color:var(--text-secondary);">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (data.type === 'skills') {
      html = `
        <div class="glass-card" style="padding:32px; border-radius:16px; border:1px solid var(--border); display:flex; flex-direction:column; gap:20px;">
          <div>
            <span class="tech-badge" style="margin-bottom:8px;">IDENTITY FEATURE</span>
            <h1 style="font-family:var(--font-heading); font-size:26px; font-weight:700; color:white;">${data.title}</h1>
            <div style="display:flex; gap:12px; margin-top:6px; font-size:12px; color:var(--text-secondary);">
              <span><strong>Type:</strong> ${data.level}</span>
              <span>•</span>
              <span><strong>Scope:</strong> ${data.timeline}</span>
            </div>
          </div>
          <hr style="border:0; border-top:1px solid var(--border);">

          <div>
            <h3 style="font-family:var(--font-heading); font-size:18px; margin-bottom:8px; color:var(--primary);">Detail Overview</h3>
            <p style="font-size:14px; line-height:1.6; color:var(--text-secondary);">${data.overview}</p>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1.2fr; gap:20px; margin-top:8px;">
            <div>
              <h4 style="font-family:var(--font-heading); font-size:15px; margin-bottom:8px; color:var(--text-primary);">Core Competencies</h4>
              <div style="display:flex; flex-wrap:wrap; gap:6px;">
                ${data.tech.map(t => `<span class="tech-badge" style="font-size:10.5px; background-color:var(--surface); border-color:var(--border); color:var(--text-secondary);">${t}</span>`).join('')}
              </div>
            </div>
            <div>
              <h4 style="font-family:var(--font-heading); font-size:15px; margin-bottom:8px; color:var(--text-primary);">Linked Creations</h4>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:6px;">
                ${data.projects.map(p => `<li style="font-size:13px; color:var(--text-secondary);"><span style="color:var(--primary); margin-right:6px;">✔</span>${p}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    } else if (data.type === 'network') {
      html = `
        <div style="width:100%; max-width:650px; margin: 0 auto; border-radius:18px; overflow:hidden; border:1.5px solid var(--border); background:var(--surface); box-shadow: 0 10px 40px rgba(0,0,0,0.5);">
          <!-- Platform Header -->
          <div style="background:${data.color}; padding:24px 32px; display:flex; align-items:center; justify-content:space-between; color:white;">
            <div style="display:flex; align-items:center; gap:12px;">
              <h2 style="font-family:var(--font-heading); font-size:24px; font-weight:700; margin:0;">${data.platform}</h2>
              ${data.verified ? '<span style="background:rgba(255,255,255,0.2); font-size:10px; font-weight:700; padding:2px 8px; border-radius:10px; border:1px solid rgba(255,255,255,0.4);">VERIFIED</span>' : ''}
            </div>
            <span style="font-size:13px; font-weight:600; opacity:0.85;">Connection Channel</span>
          </div>

          <div style="padding:32px; display:flex; flex-direction:column; gap:20px; align-items:center; text-align:center;">
            <!-- Profile Avatar -->
            <div style="width:110px; height:110px; border-radius:50%; border:3px solid var(--primary); overflow:hidden; box-shadow:0 0 20px var(--primary-glow); background:#111;">
              <video style="width:100%; height:100%; object-fit:cover;" autoplay loop muted playsinline>
                <source src="provid.mp4" type="video/mp4">
              </video>
            </div>

            <div>
              <h3 style="font-family:var(--font-heading); font-size:20px; font-weight:700; color:var(--text-primary);">${data.username}</h3>
              <span style="font-size:12.5px; color:var(--primary); font-weight:600;">${data.followers}</span>
            </div>

            <p style="font-size:13.5px; color:var(--text-secondary); line-height:1.5; max-width:480px; margin:0;">${data.bio}</p>

            <a href="${data.link}" target="_blank" class="btn btn-primary" style="padding:10px 32px; font-size:13px; font-weight:700; text-decoration:none; margin-top:8px;">Visit External Channel</a>
            
            <hr style="border:0; border-top:1px solid var(--border); width:100%; margin:8px 0;">

            <div style="width:100%; text-align:left;">
              <h4 style="font-family:var(--font-heading); font-size:14px; margin-bottom:12px; color:var(--text-primary); border-left:3px solid var(--primary); padding-left:8px;">Recent Channel Broadcasts</h4>
              <div style="display:flex; flex-direction:column; gap:10px;">
                ${data.activity.map(a => `
                  <div style="padding:12px; border-radius:8px; background:rgba(255,255,255,0.01); border:1px solid var(--border); font-size:12px; line-height:1.4; color:var(--text-secondary); display:flex; gap:8px;">
                    <span style="color:var(--primary);">➜</span>
                    <span>${a}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div style="margin-top:16px; padding:12px; border-radius:10px; background:white; display:inline-block;">
              <svg viewBox="0 0 100 100" width="80" height="80" fill="#000000">
                <rect x="0" y="0" width="25" height="25" />
                <rect x="5" y="5" width="15" height="15" fill="#ffffff" />
                <rect x="10" y="10" width="5" height="5" />
                
                <rect x="75" y="0" width="25" height="25" />
                <rect x="80" y="5" width="15" height="15" fill="#ffffff" />
                <rect x="85" y="10" width="5" height="5" />
                
                <rect x="0" y="75" width="25" height="25" />
                <rect x="5" y="80" width="15" height="15" fill="#ffffff" />
                <rect x="10" y="85" width="5" height="5" />
                
                <rect x="35" y="15" width="5" height="5" /><rect x="45" y="5" width="10" height="5" />
                <rect x="60" y="20" width="5" height="10" /><rect x="40" y="30" width="5" height="5" />
                <rect x="15" y="40" width="5" height="15" /><rect x="30" y="50" width="15" height="5" />
                <rect x="55" y="45" width="10" height="10" /><rect x="70" y="35" width="5" height="5" />
                <rect x="50" y="60" width="5" height="15" /><rect x="35" y="75" width="10" height="10" />
                <rect x="80" y="50" width="15" height="5" /><rect x="65" y="80" width="10" height="5" />
                <rect x="85" y="70" width="10" height="10" />
              </svg>
              <div style="font-size:8px; font-weight:700; color:#555; text-transform:uppercase; margin-top:4px;">Secure QR Link</div>
            </div>
          </div>
        </div>
      `;
    }

    detailDynamicContent.innerHTML = html;
  }

  // ==========================================
  // 7. CARD CLICK NAVIGATION TRIGGERS (DYNAMIC CLICK)
  // ==========================================
  
  // Projects/Creations cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // Don't intercept action buttons
      if (e.target.closest('.proj-action-btn')) return;
      const title = card.querySelector('.project-title').textContent.toLowerCase().replace(/\s+/g, '-');
      window.location.hash = `#creations/${title}`;
    });
  });

  // Experience nodes
  document.querySelectorAll('.experience-node').forEach(node => {
    node.style.cursor = 'pointer';
    node.addEventListener('click', (e) => {
      const role = node.querySelector('.job-role').textContent.toLowerCase().replace(/\s+/g, '-');
      window.location.hash = `#journey/${role}`;
    });
  });

  // Identity cards
  document.querySelectorAll('.skill-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const title = card.querySelector('.card-title').textContent.toLowerCase().replace(/\s+/g, '-');
      window.location.hash = `#skills/${title}`;
    });
  });

  // Social brand cards (override default redirects)
  document.querySelectorAll('.social-card-vertical').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const platform = Array.from(card.classList).find(c => 
        ['linkedin', 'instagram', 'youtube', 'facebook', 'twitter', 'github'].includes(c)
      ) || 'linkedin';
      window.location.hash = `#network/${platform}`;
    });
  });

  // ==========================================
  // 8. 3D DIGITAL BUSINESS CARD PARALLAX ROTATION
  // ==========================================
  const card3dScene = document.querySelector('.card-3d-scene');
  const hologramCard = document.getElementById('hologram-card');
  const cardReflection = document.querySelector('.card-reflection');

  if (card3dScene && hologramCard) {
    card3dScene.addEventListener('mousemove', (e) => {
      if (hologramCard.classList.contains('flipped')) return;

      const rect = card3dScene.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Max tilt angle
      const rotateX = -y / (rect.height / 2) * 20;
      const rotateY = x / (rect.width / 2) * 20;

      hologramCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      // Shift glare reflection
      if (cardReflection) {
        cardReflection.style.background = `linear-gradient(${135 + rotateY}deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.05) 100%)`;
      }
    });

    card3dScene.addEventListener('mouseleave', () => {
      if (hologramCard.classList.contains('flipped')) return;
      hologramCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
      if (cardReflection) {
        cardReflection.style.background = `linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.05) 100%)`;
      }
    });

    // Flip action
    const btnCardFlip = document.getElementById('btn-card-flip');
    if (btnCardFlip) {
      btnCardFlip.addEventListener('click', () => {
        hologramCard.classList.toggle('flipped');
        if (hologramCard.classList.contains('flipped')) {
          hologramCard.style.transform = 'rotateY(180deg)';
        } else {
          hologramCard.style.transform = 'rotateY(0deg)';
        }
      });
    }

    // Save vCard mock action
    const btnCardSave = document.getElementById('btn-card-save');
    if (btnCardSave) {
      btnCardSave.addEventListener('click', () => {
        alert("vCard Download Initialized: Hamza's contact information compiled for packaging.");
      });
    }

    // Share mock action
    const btnCardShare = document.getElementById('btn-card-share');
    if (btnCardShare) {
      btnCardShare.addEventListener('click', () => {
        alert("Copy link to clipboard: Secure contact URL generated.");
      });
    }
  }

  // ==========================================
  // 9. CONTACT FORM & SUCCESS MODAL
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const successModal = document.getElementById('success-modal');
  const modalClose = document.getElementById('modal-close');

  if (contactForm && successModal && modalClose) {
    const submitBtn = contactForm.querySelector('.submit-btn');
    const submitBtnText = submitBtn.querySelector('span');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      submitBtn.disabled = true;
      if (submitBtnText) submitBtnText.textContent = 'Transmitting...';
      submitBtn.style.opacity = '0.75';

      setTimeout(() => {
        successModal.classList.add('open');
        contactForm.reset();
        
        submitBtn.disabled = false;
        if (submitBtnText) submitBtnText.textContent = 'Transmit Message';
        submitBtn.style.opacity = '1';
      }, 1500);
    });

    modalClose.addEventListener('click', () => successModal.classList.remove('open'));
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) successModal.classList.remove('open');
    });
  }

  // Set Year in footer copyright
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  window.addEventListener('hashchange', router);
  // Trigger initial routing
  router();

});
