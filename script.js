// Mobile Hamburger Menu Toggle
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

// Contact Form Submission Handler (For contact.html)
function handleContactSubmit(e) {
    e.preventDefault(); // Prevent page reload
    const successMsg = document.getElementById('contact-success');
    if (successMsg) {
        successMsg.style.display = 'block';
        document.getElementById('contact-form').reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    }
}

// Apply Now Form Submission Handler (For apply.html)
function handleApplySubmit(e) {
    e.preventDefault(); // Prevent page reload
    const successMsg = document.getElementById('apply-success');
    if (successMsg) {
        successMsg.style.display = 'block';
        document.getElementById('apply-form').reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    }
}
// Mobile Hamburger Menu Toggle
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

// =========================================
// CONTACT FORM SUBMISSION
// =========================================
function handleContactSubmit(e) {
    e.preventDefault(); // Stops the FormSubmit "Thanks" page from opening
    
    const form = e.target;
    const data = new FormData(form);

    // Send the data quietly in the background
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json' // Tells FormSubmit we want a quiet response
        }
    }).then(response => {
        if (response.ok) {
            // 1. Show the success message
            const successMsg = document.getElementById('contact-success');
            if (successMsg) successMsg.style.display = 'block';
            
            // 2. Clear the form
            form.reset(); 
            
            // 3. Wait 1.5 seconds, then redirect to Home Page
            setTimeout(() => { 
                window.location.href = 'index.html'; 
            }, 1500);
        } else {
            alert("Oops! There was a problem submitting your message.");
        }
    }).catch(error => {
        alert("Oops! There was a problem submitting your message.");
    });
}


// =========================================
// APPLY NOW FORM SUBMISSION
// =========================================
function handleApplySubmit(e) {
    e.preventDefault(); // Stops the FormSubmit "Thanks" page from opening
    
    const form = e.target;
    const data = new FormData(form);

    // Send the data quietly in the background
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json' // Tells FormSubmit we want a quiet response
        }
    }).then(response => {
        if (response.ok) {
            // 1. Show the success message
            const successMsg = document.getElementById('apply-success');
            if (successMsg) successMsg.style.display = 'block';
            
            // 2. Clear the form
            form.reset(); 
            
            // 3. Wait 1.5 seconds, then redirect to Home Page
            setTimeout(() => { 
                window.location.href = 'index.html'; 
            }, 1500);
        } else {
            alert("Oops! There was a problem saving your entry.");
        }
    }).catch(error => {
        alert("Oops! There was a problem saving your entry.");
    });
}
}
/* =========================================
   ACTIVITY PAGE LOGIC
   ========================================= */

// 1. Gallery Filtering Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const filterItems = document.querySelectorAll('.filter-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        filterItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

// 2. Modal Logic (Mock Data for demonstration)
const modalData = {
    robotics: { title: "Robotics Team", category: "Academic & Tech", desc: "Design, build, and program competitive robots. Students work hands-on with CAD software, 3D printing, and Java programming.", time: "Tues & Thurs, 3:30 PM", loc: "Innovation Lab", adv: "Mr. Davis", ach: "<li>1st Place - State VRC Championship 2025</li><li>Excellence in Engineering Design Award</li>" },
    band: { title: "Symphonic Band", category: "Arts & Music", desc: "Perform a diverse repertoire of concert music. Open to woodwind, brass, and percussion musicians of intermediate to advanced skill.", time: "Mon, Wed, Fri, 7:00 AM", loc: "Band Room", adv: "Ms. O'Connor", ach: "<li>Superior Rating at District Festival</li><li>Annual Spring Tour Participants</li>" },
    soccer: { title: "Varsity Soccer", category: "Athletics", desc: "Compete at the state level emphasizing teamwork, endurance, and advanced tactical skills. Tryouts held in late August.", time: "Mon-Fri, 4:00 PM - 6:00 PM", loc: "Stadium Field", adv: "Coach Henderson", ach: "<li>Regional Finalists 2024</li><li>3 Academic All-State Players</li>" },
    mun: { title: "Model United Nations", category: "Social & Service", desc: "Develop diplomacy, public speaking, and negotiation skills by simulating global UN committees and debating current world issues.", time: "Wednesdays, 3:45 PM", loc: "Room 214", adv: "Mrs. Lin", ach: "<li>Best Delegation - State MUN Conference</li><li>Hosted regional middle school summit</li>" },
    coding: { title: "CodeCraft Creators", category: "Academic & Tech", desc: "Learn web development, app creation, and game design in a collaborative coding environment. No prior experience required.", time: "Thursdays, 4:00 PM", loc: "Computer Lab B", adv: "Mr. Patel", ach: "<li>Created official school mobile app</li><li>Winners of the City Hackathon</li>" },
    art: { title: "Studio Art Collective", category: "Arts & Music", desc: "Explore mediums from oil painting to digital sculpting. Students work independently on portfolios culminating in a showcase.", time: "Tuesdays, 3:30 PM", loc: "Art Studio", adv: "Ms. Rivera", ach: "<li>3 Scholastic Art Gold Key Winners</li><li>Curated community art walk downtown</li>" }
};

const modalOverlay = document.getElementById('activity-modal');

function openModal(activityId) {
    if (!modalOverlay) return; // Guard clause if not on activity page

    const data = modalData[activityId];
    if (data) {
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-category').innerText = data.category;
        document.getElementById('modal-desc').innerText = data.desc;
        document.getElementById('modal-time').innerText = data.time;
        document.getElementById('modal-location').innerText = data.loc;
        document.getElementById('modal-advisor').innerText = data.adv;
        document.getElementById('modal-achievements-list').innerHTML = data.ach;
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore background scrolling
    }
}

// Close modal when clicking outside of it
if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
}