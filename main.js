// Dialog data
const dialogs = [
  ['... zzzz ...',"sleepynick.gif"],
  ["...zzzzzz......"],
  ["zzzzzzzzzzzzzzzz......zz"],
  ["..zzzzz-OH OH Hello! I didn't uh, I didn't see you there. Was just uh, resting my eyes ya know.","./previewGifs/nicktalkingexcited.gif"],
  ["Anywho, you're probably looking at this page because I sent it to you after seeing your job posting!","./previewGifs/nicktalking.gif"],
  ["Websites are a little impersonal, so I thought I'd scan my brain and upload a digital version of it here!"],
  ["...Impervious to the flow of time and space, this snapshot of my consciousness will linger in reality far longer than my flesh prison."],
  ["....","./previewGifs/nickidle.gif"],
  ["Anyways, you can find links to my resume and stuff at the bottom, so if you want the TL;DR version look there!","./previewGifs/nicktalkingexcited.gif"],
  ["I'm Nico! I'm a game developer and designer based out of San Francisco.","./previewGifs/nicktalking.gif"],
  ["I have an engineering backbone, I received my bachelors in Computer Science from San Francisco State in 2019."],
  ["I've been running tabletop campaigns since I was a kid, game design came naturally to me and has been a lifelong passion!"],
  ["I'm also quite an eclectic person. I love music, art, philosophy, and math, so game dev is really a perfect craft for me!"],
  ["The ability to create stories and worlds that are *truly* immersive is just so fascinating to me, its magic in real life. ","./previewGifs/nicktalking.gif"],
  ["I try my best to consume as much knowledge as I can, I love learning new tricks, tools, and techniques!","./previewGifs/nicktalkingexcited.gif"],
  ["Whether it's seeing what 3D animators are working on, dreaming with designers, or asking dumb questions to marketers, I love the entire game dev process.","./previewGifs/nicktalkingexcited.gif"],
  ["Music has always been a passion of mine, in my free time I'm making jazz, prog rock, ambient music, hip hop beats, whatever I'm feelin.","./previewGifs/nicktalking.gif"],
  ["Onto my hard skills, I'm a confident engineer and architect who's built entire game systems by myself that have needed to scale for years of development."],
  ["I've worked for 4 years as a Unity Developer in various contract roles, and 1 and a half years as a proffessional full time Godot developer."],
  ["I'm comfortable working in frameworks and game engines, I've worked on contract gigs with simple frameworks, custom engines, and of course Unity and Godot."],
  ["I know how to build and mantain scaleable and performant systems, manage version control workflows, and help with CLI and automated builds."],
  ["I'm comfortable prototyping and working with 3D assets, and have worked very closely with 3D artists to help build solutions for beautiful experiences."],
  ["I'm a highly effective communicator, and have been told I'm an asset to have in any discussion. Whether it be architecture, production goals, or design ideas, lets talk!"],
  ["In summary, I'm a great asset to have on both small and large teams!","./previewGifs/nicktalkingexcited.gif"],
  ["How about a little about my work background!","./previewGifs/nicktalking.gif"],
  ["While working on my degree I started teaching at an afterschool program specifically geared for programming."],
  ["I loved working with kids (8-18), and after I got my programming chops up a bit I started teaching game dev there."],
  ["This gave me an awesome opportunity to share what I was learning with kids, so while teaching there I developed my skills."],
  ["I started doing game jams with friends and alone as often as I could, and instantly got hooked! "],
  ["I had always looked up to solo-devs like Lucas Pope (Papers Please) and Eric Barone (Stardew Valley)..."],
  ["Inspired by them, I made sure that I learned as much about as many parts of game dev as I could."],
  ["While teaching I worked on a variety of personal projects, game jams, and small contract work for friends. This helped me build out my portfolio and learn!"],
  ["And then in 2022, I got hired by Game Grumps to work on Homebody, a psychological Horror Game.","./previewGifs/nicktalkingexcited.gif"],
  ["I work(ed) on a small team and really got to spread my wings and learn a bunch about actually finishing and shipping games.","./previewGifs/nicktalking.gif"],
  ["I would describe my role on that project as a technical designer/gameplay programmer and ui engineer, I wore many hats."],
  ["I implemented the games entire UI, which was a challenge because the game shipped on all platforms at launch AND was localized in 6 languages."],
  ["The game has alot of menus and is very narrative, so this was a fun challenge that I felt I rose to the occasion of!"],
  ["I also took existing base systems and extended them breadth and depth wise."],
  ["Building new extensions to core systems, designing content in those systems, refining their feel."],
  ["I was lucky enough to work under a former Sony Santa Monica engineer, who acted as a fantastic early mentor to me."],
  ["After Homebody launched in June 2023, I spent the rest of 2023 acting as a contractor on a variety of small indie projects."],
  ["I helped design a Lua scripting and modding framework for an in development punch-out inspired game."],
  ["I also worked as a Unity contractor again helping oversee development on a rhythm action roguelike for several months as well."],
  ["In January 2024 I had actually managed to find a contract to hire Godot engineer job!","./previewGifs/nicktalkingexcited.gif"],
  ["A venture backed start up called Elsewhere brought me on board to help with development on a co-op action roguelike inspired by Hades."],
  ["I took over the codebase and acted as the core founding engineer for the studio for about a year and a half. It was awesome!",,"./previewGifs/nicktalking.gif"],
  ["The team was very small, and I acted as the lead engineer on the project. It was a small team, but the project was very ambitious!"],
  ["I had a hand in either designing, architecting, or engineering almost every system in the game."],
  ["I also helped with a variety of studio ops, such as production, task management, version control management, hiring, and more!"],
  ["It was alot of work with many late nights and long hours, but it was a truly amazing experience to cook so hard. I had a blast."],
  ["Sadly the game did not manage to receive additional funding it needed in 2025, and the project had to be dropped."],
  ["That being said, I'm so grateful for the opportunity to have worked on Elsewhere, and cherish the relationships I made with the entire team"],
  ["So here we are! I'm now looking for my next steps in the games industry. I'm open to a wide variety of roles currently."],
  ["While the majority of my experience is gameplay programming, I love most aspects of development. Tools dev, infrastructure, enemy AI, you name it!"],
  ["If I sound like a good fit for your team, feel free to contact my corporeal form through my contact info linked below."],
  ["Thanks so much for getting to know me a bit, I'm just going to rest my eyes a bit now, feel free to hang out as long as you like!"],
  [".....zzzzzzzz....","./previewGifs/sleepynick.gif"],
  ["..zzz."],
  ["..zzz."],
  ["..zzz.."],
  ["..zzz...."],
  ["..zzz......."],
  ["..zzz................................."],
  ["..Are you still here?","./previewGifs/nicktalking.gif"],
  ["Are you expecting something?"],
  ["This isn't the end of like, movie credits or anything..."],
  ["No teaser here...what would it even be for?"],
  ["...","./previewGifs/nickidle.gif"],
  ["..."],
  ["Ok, if you promise to give me an interview, I'll announce something. Deal?","./previewGifs/nicktalking.gif"],
  ["Ok deal..."],
  ["ANNOUNCING... PORTFOLIO SITE ... 2!!!!!!","./previewGifs/nicktalkingexcited.gif"],
  ["Like, that sounds lame c'mon.","./previewGifs/sleepynick.gif"],
  ["You really ought to go just look at my resume.","./previewGifs/nicktalking.gif"],
  ["Thanks for staying the whole way through though. It was a pleasure meeting you! I'm slee- I mean resting my eyes now. Bye!!"],
  [".zzzzzz....","./previewGifs/sleepynick.gif","sleepynick.gif"]
];

// State management
let currentDialogIndex = 0;
let currentTimeout = null;
let isTyping = false;

// Initialize background images
function initBackgrounds() {
  const img1 = Math.floor(Math.random() * 160);
  const img2 = Math.floor(Math.random() * 160);
  
  const formattedImg1 = img1.toString().padStart(3, '0');
  const formattedImg2 = img2.toString().padStart(3, '0');
  
  document.getElementById("bg1").style.backgroundImage = `url(./bgs/${formattedImg1}.png)`;
  document.getElementById("bg2").style.backgroundImage = `url(./bgs/${formattedImg2}.png)`;
  document.getElementById("bg2").style.opacity = Math.random() / 4 + 0.3;
}

// Tab functionality
function initTabs() {
  const tabButtons = document.querySelectorAll('.tablinks');
  const tabContents = document.querySelectorAll('.tabcontent');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const tabName = button.getAttribute('data-tab');
      showTab(tabName, e.currentTarget);
    });
  });
  
  // Show initial tab
  showTab('Nico');
}

function showTab(tabName, clickedButton = null) {
  // Hide all tab content
  const tabContents = document.querySelectorAll('.tabcontent');
  tabContents.forEach(tab => {
    tab.style.display = 'none';
  });
  
  // Remove active class from all buttons
  const tabButtons = document.querySelectorAll('.tablinks');
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });
  
  // Show selected tab
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.style.display = 'block';
  }
  
  // Add active class to clicked button
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

// Dialog system
function typeDialog(text, index = 0) {
  if (index < text.length && !isTyping) {
    const dialogElement = document.getElementById('dialog');
    dialogElement.textContent += text[index];
    
    currentTimeout = setTimeout(() => {
      typeDialog(text, index + 1);
    }, 20);
  } else if (index >= text.length) {
    // Dialog finished typing
    if (dialogs[currentDialogIndex + 1]) {
      // Add arrow indicator
      const arrow = document.createElement('div');
      arrow.id = 'arrow';
      document.getElementById('dialog').prepend(arrow);
    }
  }
}

function showNextDialog() {
  if (currentDialogIndex >= dialogs.length - 1) return;
  
  currentDialogIndex++;
  const [text, portrait] = dialogs[currentDialogIndex];
  
  // Update portrait if provided
  if (portrait) {
    document.getElementById('portrait').src = portrait.startsWith('./') ? portrait : `./previewGifs/${portrait}`;
  }
  
  // Clear dialog and start typing
  const dialogElement = document.getElementById('dialog');
  dialogElement.textContent = '';
  isTyping = false;
  
  if (currentTimeout) {
    clearTimeout(currentTimeout);
  }
  
  typeDialog(text);
}

function initDialog() {
  const dialogElement = document.getElementById('dialog');
  
  // Click handler for dialog
  dialogElement.addEventListener('click', () => {
    if (dialogs[currentDialogIndex + 1]) {
      showNextDialog();
    }
  });
  
  // Keyboard handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && dialogs[currentDialogIndex + 1]) {
      showNextDialog();
    }
  });
  
  // Start first dialog
  const [firstText] = dialogs[0];
  typeDialog(firstText);
}

// Gallery links
function initGalleryLinks() {
  const galleryLinks = document.querySelectorAll('.gallery-link');
  
  galleryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabName = link.getAttribute('data-tab');
      showTab(tabName);
    });
  });
}

// Lightbox functionality
function initLightbox() {
  const imgs = document.querySelectorAll('.preview_gallery img');
  const fullPage = document.querySelector('#fullpage');
  
  imgs.forEach(img => {
    img.addEventListener('click', function() {
      fullPage.style.backgroundImage = `url(${img.src})`;
      fullPage.style.display = 'block';
    });
  });
}

// Modal Gallery System
let currentImageIndex = 0;
let galleryImages = [];

function initImageModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.querySelector('.modal-close');
  const modalPrev = document.querySelector('.modal-prev');
  const modalNext = document.querySelector('.modal-next');
  const modalDots = document.getElementById('modalDots');
  
  // Get all screenshot thumbnails
  const thumbnails = document.querySelectorAll('.screenshot-thumb');
  
  // Add click event to each thumbnail
  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', function() {
      // Build gallery array from siblings
      const gallery = thumb.parentElement;
      galleryImages = Array.from(gallery.querySelectorAll('.screenshot-thumb'));
      currentImageIndex = galleryImages.indexOf(thumb);
      
      // Show modal
      modal.style.display = 'block';
      updateModalImage();
      createDots();
    });
  });
  
  // Close modal
  modalClose.addEventListener('click', closeModal);
  
  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Navigation
  modalPrev.addEventListener('click', showPrevImage);
  modalNext.addEventListener('click', showNextImage);
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'ArrowRight') showNextImage();
    }
  });
  
  function updateModalImage() {
    const currentImg = galleryImages[currentImageIndex];
    modalImg.src = currentImg.getAttribute('data-full') || currentImg.src;
    modalCaption.textContent = currentImg.alt;
    updateDots();
  }
  
  function createDots() {
    modalDots.innerHTML = '';
    galleryImages.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = 'modal-dot';
      if (index === currentImageIndex) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        currentImageIndex = index;
        updateModalImage();
      });
      modalDots.appendChild(dot);
    });
  }
  
  function updateDots() {
    const dots = modalDots.querySelectorAll('.modal-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentImageIndex);
    });
  }
  
  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateModalImage();
  }
  
  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateModalImage();
  }
  
  function closeModal() {
    modal.style.display = 'none';
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initBackgrounds();
  initTabs();
  initDialog();
  initGalleryLinks();
  initLightbox();
  initImageModal();
});